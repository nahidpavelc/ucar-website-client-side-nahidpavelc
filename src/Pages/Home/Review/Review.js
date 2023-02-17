import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import ReviewCart from '../ReviewCart/ReviewCart';
import Loader from '../../Shared/Loader/Loader';

const Review = () => {
  const [userReviews, setUserReviews] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://car-shop-server-side-nahidpavelc.vercel.app/reviews`)
      .then(res => res.json())
      .then(data => setUserReviews(data))
  }, [])


  return (
    <Container>
      <Typography variant="h3" gutterBottom component="div" sx={{ color: 'primary.main', mt: 5 }}>
        User Reviews
      </Typography>

      {userReviews.length === 0 ? (
        <Loader />
      ) : (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            userReviews.map(userReview => <ReviewCart
              key={userReview._id}
              userReview={userReview}
            ></ReviewCart>
            )
          }
        </Grid>
      )}

    </Container>
  );
};

export default Review;
