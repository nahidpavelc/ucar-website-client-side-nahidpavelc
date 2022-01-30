import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Container, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import profile from './../../../Images/profile.png';
import logo from './../../../Images/logo.png';
import useAuth from '../../../hooks/useAuth';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Navigation() {
    const { user, logout, displayname, photoURL } = useAuth();

    const theme = useTheme()
    const useStyle = makeStyles({
        navItem: {
            color: '#ffff',
            textDecoration: 'none'
        },
        navText: {
            color: '#0F0F0F',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navButton: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center'
            }
        }
    })

    const { navItem, navIcon, navButton, navLogo, navText, listItem } = useStyle()
    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <DrawerHeader>
                <IconButton onClick={() => setState(false)}>
                    <ChevronLeftIcon />
                </IconButton>
            </DrawerHeader>

            <List>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link className={navText} to="/home">Home</Link>
                    </ListItemText>
                </ListItem><Divider />
                <ListItem button>
                    <ListItemText>
                        <Link className={navText} to="/allCars">Cars</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                {/* <ListItem button>
                    <ListItemText>
                        <Link className={navText} to="/about">About us</Link>
                    </ListItemText>
                </ListItem> */}
                <Divider />
            </List>
        </Box >
    );
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Container>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                // sx={{ mr: 2 }}
                                className={navIcon}
                                onClick={() => setState(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <Link className={navItem} to="/">
                                    <Button><Avatar alt="UCAR" src={logo} /></Button>
                                    UCAR
                                </Link>
                            </Typography>

                            <Box className={navButton} sx={{ flexGrow: 1 }}>
                                <Link className={navItem} to="/home"><Button color='inherit'>Home</Button></Link>
                                <Link className={navItem} to="/allcars"><Button color='inherit'>Cars</Button></Link>
                                {/* <Link className={navItem} to="/about"><Button color='inherit'>About us</Button></Link> */}
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} >
                                        <Avatar alt="Remy Sharp" src={user.photoURL} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px', pr: '0px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem onClick={handleCloseNavMenu}>

                                        <Typography textAlign="center">
                                            {user?.email ?
                                                <Box>
                                                    {/* <Button style={{ textDecoration: "none" }} color="inherit">
                                             <img  src={user.photoURL} alt="" />
                                         </Button> */}
                                                    <ListItem button>
                                                        <ListItemText style={{ textDecoration: "none", color: "red" }}>
                                                            {user.displayName}
                                                        </ListItemText>
                                                    </ListItem><Divider />
                                                    <ListItem button>
                                                        <ListItemText>
                                                            <NavLink style={{ textDecoration: "none" }} to="/dashboard">Dashboard</NavLink>
                                                        </ListItemText>
                                                    </ListItem><Divider />
                                                    <ListItem button onClick={logout}>
                                                        <ListItemText>Logout</ListItemText>
                                                    </ListItem>
                                                </Box>
                                                :
                                                <NavLink
                                                    style={{ textDecoration: "none" }}
                                                    to="/login">
                                                    <Button color="inherit">Login</Button>
                                                </NavLink>

                                            }
                                        </Typography>
                                    </MenuItem>

                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>

            {/* open-close navbar */}
            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
}
