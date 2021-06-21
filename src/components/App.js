import React, {useEffect} from 'react';
import NewHeader from './NewHeader';
import Home from './Home';
import Footer from './Footer';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Search from './Search';
import Detail from './Detail';
import Form from './Form';
import PrivateRoute from './PrivateRoute';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import {currentUser} from '../functions/user';
import Message from './Message';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [{message}, dispatch] = useStateValue();

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const idTokenResult = await authUser.getIdTokenResult();

        currentUser(idTokenResult.token)
        .then((res) => {
          const user = {
            name: res.data.name,
            email: res.data.email,
            phoneNo: res.data.phoneNo,
            token: idTokenResult.token,
            role: res.data.role
          };
//saving user details in local storage to access it for private route.
          window.localStorage.setItem('user', JSON.stringify(user));

          dispatch({
            type: 'SET_USER',
            user
          });
        })
        .catch(err => console.log(err))
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

    return () => {
      unsubscribe();
    };
    
  }, [dispatch]);

  return (

       <Router>   
    <div className="App">
    <NewHeader/>
    <Message />
    
    <Switch>
    {/* <Route exact path='/About' component={About}/> */}

    <Route exact path='/Search' component={Search}/>
   
    <PrivateRoute exact path='/Detail' component={Detail}/>
    <Route exact path='/Form' component={Form}/>
    <Route exact path='/SignIn' component={SignIn}/>
    <Route exact path='/SignUp' component={SignUp}/>
    {/* <Route exact path='/OwnerHostels' component={OwnerHostels}/> */}

    <Route exact path='/' component={Home}/>

    </Switch>
    
    <Footer/>
   </div>
    </Router>
  
  );
}

export default App;
