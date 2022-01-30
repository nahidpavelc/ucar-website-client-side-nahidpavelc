import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout, displayname, photoURL } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                        <NavLink to="/home" style={{ textDecoration: "none", color: 'white' }}>
                            <Button color="inherit">Home</Button>
                        </NavLink>
                        <NavLink to="/allCars" style={{ textDecoration: "none", color: 'white' }}>
                            <Button color="inherit">Cars</Button>
                        </NavLink>
                    </Typography>
                    {
                        user?.email ?
                            <Box>
                                {/* <Button style={{ textDecoration: "none" }} color="inherit">
                                    <img  src={user.photoURL} alt="" />
                                </Button> */}
                                <Button style={{ textDecoration: "none", color: "red" }}>{user.displayName}</Button>
                                <NavLink style={{ textDecoration: "none", color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logout} style={{ textDecoration: "none" }} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink
                                style={{ textDecoration: "none", color: 'white' }}
                                to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;