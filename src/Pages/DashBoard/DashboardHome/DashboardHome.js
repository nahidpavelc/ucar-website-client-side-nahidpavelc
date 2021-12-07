import React from 'react';
import Appointments from '../Appointment/Appointments';
import { Grid } from '@mui/material';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Appointments />
            </Grid>
        </Grid>
    );
};

export default DashboardHome;