import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import Link from '@material-ui/core/Link';
import { PhotoSizeSelectActualOutlined } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const [{user}, dispatch] = useStateValue();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const mystyle = {  
    backgroundColor: "#778899",
    padding: "10px",
    fontFamily: "Arial"
  };
   const size = {  
   fontSize:'20px',
  };


  return (
    <AppBar>
      <Toolbar style={mystyle}>
 
        <Typography  variant="h6" className={classes.title}>
          Hostel Locator Systemm
        </Typography>
       
        
        <Button ><Link href="/" color="inherit" onClick={handleOpen}>
          Home   
        </Link></Button>
 
        <Button><Link href="/Search" color="inherit" onClick={handleOpen}>
          Search Hostels 
        </Link> </Button> 

        <Button >   <Link href="/Detail" color="inherit" onClick={handleOpen}>
          My Hostel
        </Link> </Button> 
        
        <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                { user && user.token ?
                <MenuItem onClick={() => auth.signOut()}>Sign Out</MenuItem> :
                (
                <>
                <MenuItem onClick={handleClose}><a href="/SignIn">Sign In</a></MenuItem>
                <MenuItem onClick={handleClose}><a href="/SignUp">Sign Up</a></MenuItem>
                </>
                )
                }
              </Menu>
        </div>

      </Toolbar>
     
    </AppBar>
  );
};

export default Header;



