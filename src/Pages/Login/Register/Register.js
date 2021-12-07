import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from "../../../Images/login.png"
import Header from '../../Shared/Header/Header';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, loading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(newLoginData);
    }
    const handleLogin = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password not Match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>Register</Typography>

                        {!loading && <form onSubmit={handleLogin}>
                            <TextField
                                sx={{ width: "60%", m: 1 }}
                                id="outlined-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="outlined" />
                            <TextField
                                sx={{ width: "60%", m: 1 }}
                                id="outlined-basic-email"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="outlined" />
                            <TextField
                                sx={{ width: "60%", m: 1 }}
                                id="outlined-password-input"
                                label="Enter Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                autoComplete="current-password" />
                            <TextField
                                sx={{ width: "60%", m: 1 }}
                                id="outlined-password2-input"
                                label="Re-Enter Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                autoComplete="current-password" />

                            <NavLink
                                style={{ textDecoration: "none" }}
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                            <Button type="submit" variant="contained" sx={{ width: "60%", m: 1 }}>Register</Button>
                        </form>}

                        {loading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: "100%" }} src={login} alt="" />
                    </Grid>
                </Grid>
            </Container >
        </>
    );
};

export default Register;