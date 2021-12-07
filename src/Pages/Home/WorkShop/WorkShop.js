import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CardMedia, Container, Typography } from '@mui/material';
import work1 from '../../../Images/workshop.jpg'

const WorkShop = () => {
    return (
        <Container sx={{ pt: 5 }}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                <Grid item xs={12} sm={6} md={6}>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={work1}
                        alt="green iguana"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography sx={{ m: 2 }} variant="p" gutterBottom component="div">
                        <Typography variant="h3" gutterBottom component="div" sx={{ color: 'primary.main', mt: 5 }}>
                            Our Workshop
                        </Typography>
                        We also import original car parts. Currently we’re one of the largest reconditioned car Importer in Bangladesh. Now we’re planning to setup a hybrid car service center in Bangladesh which will be the first ever hybrid car service center in Bangladesh. We already sold more than 600 units of cars and processing more than 50 orders now. Please come and visit tus at Baridhara branch.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default WorkShop;