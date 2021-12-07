import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../Images/Error.jpg';

const NotFound = () => {
    return (
        <div>

            <img style={{ width: '100%' }} src={error} alt="" />
            <Button variant="contained">
                <Link to="/home">Home</Link>
            </Button>

        </div>
    );
};

export default NotFound;