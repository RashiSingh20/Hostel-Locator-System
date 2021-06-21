import React, { useRef, useEffect, useState } from 'react';
import './form.css';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router';
import { postFormData, postGetData } from '../functions/form';
import Button from '@material-ui/core/Button';
import isEmpty from 'validator/lib/isEmpty';

const divStyle = {
  marginTop: '130px',
};

function Form() {
  const [{ name, place, city, user }, dispatch] = useStateValue();
  const history = useHistory();
  const hostelname = useRef(null);
  const state = useRef(null);
  const price = useRef(null);
  const [hostelink, setHostelink] = useState('');
  const phoneNumber = useRef(null);
  const token = user ? user.token : ""

  useEffect(() => {
    setHostelink(`https://www.google.com/maps/search/?api=1&query=${name}+${place}+${city}`);

  }, []);

  const submitted = (e) => {

    e.preventDefault();

    if (isEmpty(hostelname.current.value) || isEmpty(state.current.value) || isEmpty(price.current.value) || isEmpty(phoneNumber.current.value)) {
      alert('All fields are required.')
      return;
    }
    else {
      const details = {
        hostelname: hostelname.current.value,
        state: state.current.value,
        price: price.current.value,
        hostelink,
        phoneNumber: phoneNumber.current.value,
      }
//sending data to backend
      postFormData(details, token)
        .then(() =>
          postGetData()
            .then((res) => {
<<<<<<< HEAD
              //dispatching in reducer
=======
>>>>>>> 346f0dec8fe00e360864861cdd99bb181333ff9f
              dispatch({
                type: 'SET_DISPLAY',
                display: res.data.form
              });
            }))

      history.push('/Search')
    }
  }
  return (

    <div style={divStyle}>
      <div className="form-style-6">
        <h1>Confirm Your Hostel Details </h1>
        <form onSubmit={submitted}>
          <input type="text" name="field1" ref={hostelname} placeholder="Hostel Name" />
          <input type="text" name="field2" ref={state} placeholder="Place and City" />
          <input type="text" name="field2" ref={price} placeholder="Hostel price" />

          <label htmlFor="hostelink">Hostel Link</label>
          <input id="hostelink" type="text" value={hostelink} onChange={(e) => setHostelink(e.target.value)} name="field2" />
          <Button><a href={hostelink} target="_blank">Go to Link</a> </Button>

          <label htmlFor="hostelink">Contact Number</label>
          <input type="text" ref={phoneNumber} name="field2" placeholder="Contact Number" />
          {/* <textarea name="field3" ref={desc} placeholder="Description"></textarea> */}
          <input type="submit" value="Submit" onClick={submitted} />
        </form>
      </div>
    </div>

  );
}

export default Form;
