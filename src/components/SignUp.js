import React, {useRef, useEffect, useState, Component} from 'react';
import './signIn.css';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router';
// import {postUserData} from '../functions/user';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
// import equals from 'validator/lib/equals';

function SignUp() {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const phoneNo = useRef(null);
  const history = useHistory();
  const [{user}, dispatch] = useStateValue();
  const [role, setRole] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  

  useEffect(() => {
  if(user && user.token) {
    history.push('/');
  }

  }, [user, history]);

//   const submitted = async (e) => {
//     e.preventDefault();

//     if (name === null || email === null || phoneNo === null) {
//         return alert("All fields are required!");
//     }

//     try {
//     const authUser = await auth.createUserWithEmailAndPassword(email.current.value, password.current.value)
//     const {user} = authUser;

//     // user.updateProfile({
//     //   displayName: name.current.value
//     // });

//     const idTokenResult = await user.getIdTokenResult();

//     const userObject = {
//       token: idTokenResult.token,
//       phoneNo: phoneNo.current.value,
//       name: name.current.value,
//       role
//     };

//     postUserData(userObject)
//     .then((res) => {
//       dispatch({
//         type: 'SET_USER',
//         user: {
//         name: res.data.name,
//         email: res.data.email,
//         phoneNo: res.data.phoneNo,
//         token: idTokenResult.token,
//         role: res.data.role
//       }
//     });
//     })
//     .catch((err) => console.log(err));

//       } catch(error) {
//         console.log(error);
//       }
// };

  const submitted = (e) => {
    e.preventDefault();

    if (isEmpty(email.current.value) || isEmpty(password.current.value) || isEmpty(phoneNo.current.value)) {
      alert('All fields are required.')
    } else if (!isEmail(email.current.value)) {
      alert('Invalid email.')}
     else {
      auth.createUserWithEmailAndPassword(email.current.value, password.current.value)
          .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name.current.value
            });

            dispatch({
              type: "INFO",
              info: {
                phoneNo: phoneNo.current.value,
                role
              }
            });

            history.push('/SignIn');
          })
          .catch((err) => console.log(err));
    }
        
};

    return (
<div className="body2">
<div className="containerr">
    <div className="title">Registration</div>
    <div className="content">
      <form>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input ref={name}  name="name" type="text" placeholder="Enter your name" required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input ref={email} name="email" type="text" placeholder="Enter your email" required/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input ref={phoneNo}  name="phoneNo" type="text" placeholder="Enter your number" required/>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input ref={password} name="password" type="text" placeholder="Enter your password" required/>
          </div>
        
    <div class="gender-details"/>
          <input type="radio" name="role" value="hostelOwner" onClick={handleRoleChange} on id="dot-1"/>
          <input type="radio" name="role" value="visitor" onClick={handleRoleChange} id="dot-2"/>
          <input type="radio" name="role" value="admin" onClick={handleRoleChange} id="dot-3"/>
          {/* <span class="gender-title">Gender</span> */}

          <div class="category">
            <label htmlFor="dot-1"> 
              <span class="dot one"></span>
              <span class="gender">Hostel Owner</span>
            </label>

            <label htmlFor="dot-2">
              <span class="dot two"></span>
              <span class="gender">Visitor</span>
            </label>

            <label htmlFor="dot-3">
              <span class="dot three"></span>
              <span class="gender">Admin</span>
            </label>
          </div>
    </div>
        <div className="button">
          
          <input type="submit" onClick={submitted}  value="Register"/>
        </div>
      </form>
    </div>
  </div>
    
</div>
    );
    }
export default SignUp;