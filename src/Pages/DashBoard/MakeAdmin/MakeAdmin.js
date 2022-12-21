import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Alert, Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };

        fetch('https://ucar-api-test.onrender.com/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }

    return (
        <div>
            <h2>Make Admin </h2>
            <form onSubmit={handleAdminSubmit} variant="standard" sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                    sx={{ width: "40%", m: 1 }}
                    type="email"
                    onBlur={handleOnBlur}
                    label="Add Admin Email"
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successful.</Alert>}
        </div>
    );
};

export default MakeAdmin;