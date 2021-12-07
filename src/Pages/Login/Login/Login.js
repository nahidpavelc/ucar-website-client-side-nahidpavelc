import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from "../../../Images/login.png"
import Header from '../../Shared/Header/Header';

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const { user, loginUser, registerUser, signInWithGoogle, loading, authError } = useAuth();

    //location & history for Private Route
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    //send location & history for redirect Private Route
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, loginData.name, location, history);
        e.preventDefault();
    }

    // google Signin
    const hangleGoogleSignIn = e => {
        signInWithGoogle(location, history)
    }


    return (
        <>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>Login</Typography>

                        {!loading && <form onSubmit={handleLogin}>
                            <TextField
                                sx={{ width: "60%", m: 1 }}
                                id="outlined-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onChange={handleOnChange}
                                variant="outlined" />
                            <TextField
                                sx={{ width: "60%", m: 1 }}
                                id="outlined-password-input"
                                label="Enter Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                autoComplete="current-password" />
                            <NavLink
                                style={{ textDecoration: "none" }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            <Button type="submit" variant="contained" sx={{ width: "60%", m: 1 }}>Login</Button>

                            <Button onClick={hangleGoogleSignIn} type="submit" variant="contained" sx={{ width: "60%", m: 1 }}>Google Sign In</Button>

                            {loading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login Successful.</Alert>}
                        </form>}

                        {loading && <CircularProgress />}

                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: "100%" }} src={login} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;