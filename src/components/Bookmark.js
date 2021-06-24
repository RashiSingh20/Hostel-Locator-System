import React, { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { getBookmark, removeFromBookmark } from '../functions/user';
import Button from '@material-ui/core/Button';

function Bookmark(){
	const divStyle={
marginTop:'10px',
	}
	const [{bookmark}, dispatch] = useStateValue();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
		gettingBookmarkedHostels();

    }, []);

	const gettingBookmarkedHostels = () => {
		getBookmark(user.token)
        .then((res) => {
            dispatch({
                type: 'GET_BOOKMARK',
                bookmark: res.data.bookmark
            });
        });
	};
    
    const handleRemoveFromBookmark = (e, formId) => {
		e.preventDefault();

        removeFromBookmark(user.token, formId)
		.then(() => gettingBookmarkedHostels());
    };

    return(
<div class="wrapper">
  <h1 class="heading">Bookmarked Hostels</h1>
  <div class="cols">
  {
	bookmark.map((details) => (
		<>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
					<div class="containerSearch">
						<div class="front pic">
							<div class="innerr">
								<p>{details.name}</p>
								<span>📍{details.state} Maharashtra</span> <br></br>
								<span>Cost: {details.price}</span>		  
							</div>
						</div>

						<div class="back">
							<div class="innerr">
								<p>📞Contact Me:</p>
								<p>{details.phoneNumber}</p>
								<Button href={details.hostelLink} target="_blank"  variant="contained"> <b>Visit Hostel Link </b></Button>
							</div>
						</div>
					</div>
								<Button style={divStyle}onClick={(e) => handleRemoveFromBookmark(e, details._id)} variant="contained"> <b>Remove</b></Button>

			</div>
		</>
	  ))
  }		
		</div>
 </div>
    );
}

export default Bookmark;