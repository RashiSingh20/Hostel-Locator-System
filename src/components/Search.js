import React,{useEffect} from 'react';
import '../style/search.css';
import Button from '@material-ui/core/Button';
import { useStateValue } from './StateProvider';
import { postGetData } from '../functions/form';
import { addToBookmark } from '../functions/user';
import IconButton from '@material-ui/core/IconButton';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
function Search(){
		const divStyle={
backgroundColor:'white',
	}
	const [{display}, dispatch] = useStateValue();

	const user = JSON.parse(localStorage.getItem('user'));

	useEffect(() => {
		postGetData()
		.then((res) => {
			dispatch({
				type: 'SET_DISPLAY',
				display: res.data.form
			});
		});
	}, [dispatch]);

	const handleAddToBookmark = (e, formId) => {
		e.preventDefault();

		// dispatch({
		// 	type: 'CLEAR_MESSAGES'
		// });

		addToBookmark(user.token, formId)
		.then(() => alert("Hostel Bookmarked! Visit Your Profile to see the bookmarked hostels."))
		// .then(() => {
		// 	dispatch({
		// 		type: 'DISPLAY_MESSAGE',
		// 		message: {
		// 		successMessage: "Hostel Bookmarked! Visit Your Profile to see the bookmarked hostels."
		// 		}
		// 	});
		// })
		// .catch((err) => {
        //     console.log(err);
		// });
	};

    return(
			<div class="wrapper">
			<h1 class="heading">Everything You Need</h1>
			<div class="cols">
			{
				display.map((details) => (

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
								<IconButton style={divStyle} onClick={(e) => handleAddToBookmark(e, details._id)}><BookmarksOutlinedIcon/></IconButton>

						</div>
				))
			}		
					</div>
			</div>
    );
}
export default Search;