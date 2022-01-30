import { CallEnd } from '@mui/icons-material';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './ReviewCart.css'

const ReviewCart = ({ userReview }) => {
    const { name, review } = userReview;

    const { user, displayName, photoURL } = useAuth();

    return (
        <>
            <Grid className='reviewPosition' item xs={4} sm={4} md={4}>

                <Card sx={{ width: 345, boxShadow: 3 }}>
                    <CardContent>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Avatar
                                alt="Remy Sharp" src={photoURL} />
                        </Box>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {review.slice(0, 50)}
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>
        </>
    );
};

export default ReviewCart;