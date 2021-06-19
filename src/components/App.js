import React, {useEffect} from 'react';
import NewHeader from './NewHeader';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Search from './Search';
import Detail from './Detail';
import Form from './Form';
import OwnerHostels from './OwnerHostels';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import {currentUser} from '../functions/user';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [{}, dispatch] = useStateValue();

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      console.log('CALL');
      if (authUser) {
        const idTokenResult = await authUser.getIdTokenResult();

        currentUser(idTokenResult.token)
        .then((res) => {
          dispatch({
            type: 'SET_USER',
            user: {
              name: res.data.name,
              email: res.data.email,
              phoneNo: res.data.phoneNo,
              token: idTokenResult.token,
              role: res.data.role
            }
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
    
    <Switch>
    {/* <Route exact path='/About' component={About}/> */}

    <Route exact path='/Search' component={Search}/>
   
    <Route exact path='/Detail' component={Detail}/>
    <Route exact path='/Form' component={Form}/>
    <Route exact path='/SignIn' component={SignIn}/>
    <Route exact path='/SignUp' component={SignUp}/>
    <Route exact path='/OwnerHostels' component={OwnerHostels}/>

    <Route exact path='/' component={Home}/>

    </Switch>
    
    <Footer/>
   </div>
    </Router>
  
  );
}

export default App;
