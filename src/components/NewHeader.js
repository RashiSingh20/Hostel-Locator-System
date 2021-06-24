import React, { useState } from 'react';
import '../style/NewHeader.css';
import { NavLink, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    list: {
        width: 250
    }
}));

function Header() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [left, setLeft] = useState(false);
    const [{user}, dispatch] = useStateValue();    
    const history = useHistory();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }   

        setLeft(open);
    };

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={() => setMobileMoreAnchorEl(null)}
        >
            {
                user && user.token ? (
                    <MenuItem className="menuItems">
                        <Button><Link href="/" color="inherit">Home</Link></Button>
 
                        <Button><Link href="/Search" color="inherit">Search Hostels </Link> </Button> 

                        <Button><Link href="/Detail" color="inherit">My Hostel</Link> </Button>

                        <Button><Link href="/User" color="inherit">My Profile</Link> </Button>

                        <Button color="inherit" onClick={() => {
                            auth.signOut();
                            localStorage.clear();
                            }}>Sign out</Button>
                    </MenuItem>
                ) : (
                    <MenuItem className="menuItems">
                        <Button><Link href="/" color="inherit">Home   </Link></Button>
 
                        <Button><Link href="/Search" color="inherit">Search Hostels </Link></Button> 
                        <Button color="inherit"><Link href="/SignIn" color="inherit">Sign In </Link></Button> 
                        <Button color="inherit"><Link href="/SignUp" color="inherit">Sign Up </Link></Button> 

                    </MenuItem>
                )
            }
        </Menu>
    );
   const mystyle = {  
    backgroundColor: "#778899",
    padding: "10px",
    fontFamily: "Arial"
  };

      const size1 = {  
   fontSize:'16px',
  };
  
       const icon = {  
   fontSize:'31px',
  };


    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar style={mystyle} >
                    <Typography variant="h6" noWrap>
                     <strong>   Hostel Locator System</strong>
                    </Typography>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {
                            user && user.token ? (
                                <>
                                    <Button><Link href="/" color="inherit">Home </Link></Button>
 
                                    <Button><Link href="/Search" color="inherit">Search Hostels </Link> </Button> 

                                    <Button><Link href="/Detail" color="inherit">My Hostel</Link> </Button>

                                    <div>
                                        <IconButton
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={(event) => setAnchorEl(event.currentTarget)}
                                            color="inherit"
                                        >
                                            <AccountCircle />
                                        </IconButton>

                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={() => setAnchorEl(null)}
                                        >
                                            { user && user.token ?
                                                <>
                                                <MenuItem onClick={() => history.push('/User')}>My Profile</MenuItem>

                                                <MenuItem onClick={() => {
                                                    auth.signOut();
                                                    localStorage.clear();
                                                  }}>Sign Out</MenuItem> 
                                                </>
                                                  :
                                                (
                                                <>
                                                    <MenuItem onClick={() => setAnchorEl(null)}><a style={{textDecoration: "none", color: "black"}} href="/SignIn">Sign In</a></MenuItem>
                                                    <MenuItem onClick={() => setAnchorEl(null)}><a style={{textDecoration: "none", color: "black"}} href="/SignUp">Sign Up</a></MenuItem>
                                                </>
                                                )
                                            }
                                        </Menu>
                                    </div>                                
                                </>
                            ) : (
                                <>
                                    <Button style={size1}><Link href="/" color="inherit"><b>Home</b></Link></Button>
 
                                    <Button style={size1}><Link href="/Search" color="inherit"><b>Search Hostels</b></Link> </Button> 

                                    <div>
                                        <IconButton
                                        style={size1}
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={(event) => setAnchorEl(event.currentTarget)}
                                            color="inherit"
                                        >
                                            <AccountCircle style={icon}/>
                                        </IconButton>

                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={() => setAnchorEl(null)}
                                        >
                                            { user && user.token ?
                                                <>
                                                    <MenuItem onClick={() => history.push('/User')}>My Profile</MenuItem>

                                                    <MenuItem onClick={() => {
                                                        auth.signOut();
                                                        localStorage.clear();
                                                    }}>Sign Out</MenuItem>
                                                </> 
                                                    :
                                                (
                                                <>
                                                    <MenuItem onClick={() => setAnchorEl(null)}><a style={{textDecoration: "none", color: "black"}} href="/SignIn">Sign In</a></MenuItem>
                                                    <MenuItem onClick={() => setAnchorEl(null)}><a style={{textDecoration: "none", color: "black"}} href="/SignUp">Sign Up</a></MenuItem>
                                                </>
                                                )
                                            }
                                        </Menu>
                                    </div> 
                                </>
                            )
                        }
                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={(event) => setMobileMoreAnchorEl(event.currentTarget)}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
     
            </AppBar>
            {renderMobileMenu}

            </div>
    );
}

export default Header;