import React, {useRef,useEffect,useState} from 'react';
import './form.css';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router';
import { postFormData } from '../functions/form';
import Button from '@material-ui/core/Button';

const divStyle = {
    marginTop: '130px',
  };

function Form(){
  const [{name, place, city, user}, dispatch] = useStateValue();

  const history = useHistory();
  
  const hostelname = useRef(null);
  const state = useRef(null);
  const price = useRef(null);
  const [hostelink, setHostelink] = useState('');
  const email = useRef(null);
  const desc = useRef(null);
  const token = user ? user.token: ""

  useEffect(() => {
    setHostelink(`https://www.google.com/maps/search/?api=1&query=${name}+${place}+${city}`);

  }, []);


    const submitted = (e) => {
      e.preventDefault();

      const details = {
        hostelname:hostelname.current.value,
        state:state.current.value,
        price:price.current.value,
        hostelink,
        email:email.current.value,
        desc:desc.current.value
      }

      postFormData(details, token)
  
      history.push('/Search')
    }

return(

<div style={divStyle}>
<div class="form-style-6">
<h1>Confirm Your Hostel Details </h1>
<form onSubmit={submitted}>
<input type="text" name="field1" ref={hostelname} placeholder="Hostel Name" />
<input type="text" name="field2" ref={state} placeholder="State" />
<input type="text" name="field2" ref={price} placeholder="Hostel price" />
<label htmlFor="hostelink">Hostel Link</label>
<input id="hostelink" type="text" value={hostelink} onChange={(e) => setHostelink(e.target.value)} name="field2" /> 
<Button><a href={hostelink} target="_blank">Go to Link</a> </Button>

<input type="text" ref={email} name="field2" placeholder="Contact Number" />
{/* <textarea name="field3" ref={desc} placeholder="Description"></textarea> */}
<input type="submit" value="Submit" onClick={submitted}/>
</form>
</div>
</div>

);
}


export default Form;