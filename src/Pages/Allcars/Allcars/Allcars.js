import { Alert, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Abanner from '../Abanner/Abanner';
import Allcar from '../Allcar/Allcar';

const Allcars = () => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://sleepy-ravine-27110.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <Header></Header>
            <Abanner></Abanner>
            <Container>
                <Typography variant="h3" gutterBottom component="div" sx={{ color: 'primary.main', mt: 5 }}>
                    All Models
                </Typography>

                {bookingSuccess && <Alert severity="success">Order Confirmed</Alert>}

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
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Allcars;