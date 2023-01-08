import { Alert, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Header/Navigation';
import Loader from '../../Shared/Loader/Loader';
import Abanner from '../Abanner/Abanner';
import Allcar from '../Allcar/Allcar';

const Allcars = () => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [products, setProducts] = useState([])
    // const { loading } = useAuth();

    useEffect(() => {
        fetch('https://ucar-api-test.onrender.com/cars')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            {/* <Header></Header> */}
            <Navigation />
            <Abanner></Abanner>
            <Container>
                <Typography variant="h3" gutterBottom component="div" sx={{ color: 'primary.main', mt: 5 }}>
                    All Models
                </Typography>

                {bookingSuccess && <Alert severity="success">Order Confirmed</Alert>}

                {/* {products.length === 0 ? (
                    <Loader />
                ) : ( */
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                products.map(product => <Allcar
                                    key={product.id}
                                    product={product}
                                    setBookingSuccess={setBookingSuccess}
                                ></Allcar>)
                            }
                        </Grid>
                    </Box>
                }

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Allcars;