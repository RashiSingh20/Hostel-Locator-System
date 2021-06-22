import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router';
import '../style/Detail.css'
import isEmpty from 'validator/lib/isEmpty';

const but={
  fontSize:'28px',
  color:'white',
}

const divStyle = {
  marginTop: '130px',
  text:'centre',
 
};

function Detail(){

  const [{}, dispatch] = useStateValue();
  const history = useHistory();

    const name = useRef(null);
    const place = useRef(null);
    const city = useRef(null);

    const submitted = (e) => {
      e.preventDefault()

     if (isEmpty(name.current.value) || isEmpty(place.current.value) || isEmpty(city.current.value)) {
      alert('All fields are required.')
    }
    else {
      dispatch({
            type: 'SET_NAME',
            name: name.current.value
      });
  
      dispatch({
        type: 'SET_PLACE',
        place: place.current.value
      });

      dispatch({
        type: 'SET_CITY',
        city: city.current.value
      });

      history.push('/Form');
    }
    };

    return(
      <div className="bodyy">
  
<div style={divStyle}>

<div>

{/* <div className="bodyy">
<input outline="Hostel Name" ref={name} /> 
<input outline="State" ref={place} /> 
<input outline="City" ref={city} /> 

</div> */}
<h1 className="heading">ENTER HOSTEL DETAILS</h1>

<div className="form" >
    <input type="text" className="form__input" autocomplete="off" placeholder=" " ref={name}/>
    <label className="form__label">Hostel Name</label>
    
  </div>
  <div className="form" >
    <input type="text" className="form__input" autocomplete="off" placeholder=" " ref={place}/>
    <label  className="form__label">State</label>
    
  </div>
  <div className="form" >
    <input type="text" className="form__input" autocomplete="off" placeholder=" " ref={city}/>
    <label className="form__label">City</label>
    
  </div>


<div className="container1">
  <div className="vertical-center">
  <Button style={but} type="submit"  onClick={submitted}> Submit
          {/* <a href="/Form"> submit </a> */}
  </Button>

  </div>
</div>

</div>



</div>
</div>
    );
}
export default Detail;