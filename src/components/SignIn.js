import React,{useRef, useEffect} from 'react';
import './signIn.css';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router';
import {postUserData} from '../functions/user';

function SignIn(){
  const email = useRef(null);
  const password = useRef(null);

  const history = useHistory();
  const [{user, info}, dispatch] = useStateValue();
//will push to home page if user is already signed in
  useEffect(() => {
    if(user && user.token) {
      history.push('/');
    }

  }, [user, history]);

//   const signIn = (e) => {
//     e.preventDefault();

//     auth.signInWithEmailAndPassword(email.current.value, password.current.value)
//       .catch(err => console.log(err))
// };

  const signIn = async (e) => {
    e.preventDefault();

    dispatch({
      type: 'CLEAR_MESSAGES'
    });

    try {
      const authUser = await auth.signInWithEmailAndPassword(email.current.value, password.current.value)
      const {user} = authUser;
      const idTokenResult = await user.getIdTokenResult();

    const userObject = {};

    // const userObject = {
    //   phoneNo: info.phoneNo,
    //   role: info.role
    // };

    if(info && info.phoneNo) {
      userObject.phoneNo = info.phoneNo
    }

    if(info && info.role) {
      userObject.role = info.role
    }

    postUserData(userObject, idTokenResult.token)
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
    .catch((err) => console.log(err));
    } catch(error) {
      console.log(error);

      dispatch({
        type: 'DISPLAY_MESSAGE',
        message:{
          errorMessage: error.message
        }});
    }
};

    return (
  <div className="body2">
    {/* {JSON.stringify(info)} */}
    <div className="containerr">
        <div className="title">Login</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Email</span>
                <input ref={email} type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input ref={password} type="password" placeholder="Enter your password" required/>
              </div>
            </div>
            <div className="button">
              <input onClick={signIn} type="submit" value="Login"/>
            </div>
          </form>
        </div>
      </div> 
  </div>
    );
}
export default SignIn;