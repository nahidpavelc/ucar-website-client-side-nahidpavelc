import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Container, Typography } from '@mui/material';
import Product from '../Product/Product';


const Products = () => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://sleepy-ravine-27110.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])

    return (
        <Container>
            <Typography variant="h3" gutterBottom component="div" sx={{ color: 'primary.main', mt: 5 }}>
                Latest Cars
            </Typography>
            <Typography variant="h6" gutterBottom component="div">

            </Typography>
            {bookingSuccess && <Alert severity="success">Order Confirmed</Alert>}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            setBookingSuccess={setBookingSuccess}
                        ></Product>)
                    }
                </Grid>
            </Box>
        </Container >
    );
};

export default Products;