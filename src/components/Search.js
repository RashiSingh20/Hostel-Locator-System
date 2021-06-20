import React,{useEffect} from 'react';
import '../style/search.css';
import Button from '@material-ui/core/Button';
import { useStateValue } from './StateProvider';
import { postGetData } from '../functions/form';

function Search(){
	const [{display, user}, dispatch] = useStateValue();

useEffect(() => {
	postGetData()
	.then((res) => {
		dispatch({
			type: 'SET_DISPLAY',
			display: res.data.form
		});
	});

}, [dispatch]);

    return(
<div class="wrapper">
  <h1 class="heading">Everything You Need</h1>
  <div class="cols">
  {
	  display.map((details) => (

		<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front pic">
						<div class="inner">
							<p>{details.name}</p>
              <span>📍{details.state} Maharashtra</span> <br></br>
			  {/* <span>{details.email}</span> */}
			  <span>Cost: {details.price}</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>📞Contact Me:</p>
						  <p>{details.phoneNumber}</p>
						  <Button href={details.hostelLink} target="_blank"  variant="contained"> <b>Visit Hostel Link </b></Button>
						</div>
					</div>
				</div>
			</div>
	  ))
  }		
		</div>
 </div>
    );
}
export default Search;