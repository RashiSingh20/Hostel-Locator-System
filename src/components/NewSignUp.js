// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import './style.css';
// const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
// const validateForm = (errors) => {
//   let valid = true;
//   Object.values(errors).forEach(
//     (val) => val.length > 0 && (valid = false)
//   );
//   return valid;
// }

//  constructor(props) {
//     super(props);
//     this.state = {
//       name: null,
//       email: null,
//       password: null,
//       errors: {
//         name: '',
//         email: '',
//         password: '',
//       }
//     };
//   }

//   handleChange = (event) => {
//     event.preventDefault();
//     const { name, value } = event.target;
//     let errors = this.state.errors;

//     switch (name) {
//       case 'fullName': 
//         errors.fullName = 
//           value.length < 5
//             ? 'Full Name must be 5 characters long!'
//             : '';
//         break;
//       case 'email': 
//         errors.email = 
//           validEmailRegex.test(value)
//             ? ''
//             : 'Email is not valid!';
//         break;
//       case 'password': 
//         errors.password = 
//           value.length < 8
//             ? 'Password must be 8 characters long!'
//             : '';
//         break;
//       default:
//         break;
//     }
    
//     this.setState({errors, [name]: value});
//   }
//    handleSubmit = (event) => {
//     event.preventDefault();
//     if(validateForm(this.state.errors)) {
//       console.info('Valid Form')
//     }else{
//       console.error('Invalid Form')
//     }
//   }

// import isEmpty from 'validator/lib/isEmpty';
// import isEmail from 'validator/lib/isEmail';
// import equals from 'validator/lib/equals';

//         // client-side validation
//         if (isEmpty(email) || isEmpty(password) || isEmpty(phoneNo)) {
//             alert('All fields are required.')
//         } else if (!isEmail(email)) {
//             alert('Invalid email.')
//         } else {



