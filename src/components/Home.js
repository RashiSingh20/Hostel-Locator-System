import React, {useState} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useStateValue } from './StateProvider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const divStyle = {
 color:'black',
 
};

function Home() {
  const classes = useStyles();
  const [{user}, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return(
    <>
      <div class="container-fluid">
        <div class="background">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>
 
        <header class="top">
          <section class="header-content">
            {
            user && user.name ?
            <h1><b> Welcome {user.name} 😊🏠 </b></h1> :  <h1><b> Welcome 😊🏠 </b></h1>
            }
            <p>
              Easing the process of searching a comfortable and affordable hostels and
              PG's for you!
            </p>

            <div className={classes.root}>
              <div class="container1">
                <div class="vertical-center">
                    <Button variant="contained" onClick={handleClickOpen}>Instructions</Button>
                </div>
              </div>
            </div>
          </section>    
        </header>

        {/* Instructions */}
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div id="instruction">
            <h1 style={divStyle}>Instructions</h1>
            <h2>For those who own hostel</h2>

            <ol>
              <li>Create your account- Log In</li>
              <li>Visit "My Hostel" and fill up your hostel details</li>
              <li>Verify the Google map link once you have entered the Hostel Name, State, City</li>
              <li>You will be redirected to Google maps, Confirm your hostel and proceed with further information</li>
              <li> If its not your hostel link, replace it with hostel link in the field and you are set!</li>
              
            </ol>
            
              <h2>For those who do not own hostel</h2>
              <p>Visit "Search Hostels"!</p>
            
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">Ok</Button>
        </DialogActions>
      </Dialog>
   
      </div>
  </>

    );
}

export default Home;
