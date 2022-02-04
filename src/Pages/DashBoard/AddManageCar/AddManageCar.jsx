import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Loader from '../../Shared/Loader/Loader';

const AddManageCar = () => {
    const [cars, setCars] = useState([]);
    const { loading } = useAuth();

    const handleDelete = id => {
        fetch(`https://sleepy-ravine-27110.herokuapp.com/cars/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Car Deleted Successfully')
                    const remaining = cars.filter(car => car._id !== id)
                    setCars(remaining);
                }
            })
    }

    useEffect(() => {
        fetch(`https://sleepy-ravine-27110.herokuapp.com/cars`)
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    return (
        <div>
            {cars.length === 0 ? (
                <Loader />
            ) : (
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            cars.map(car =>
                                <Grid className='cardPosition' item xs={9} sm={4} md={3}>
                                    <Card sx={{ maxWidth: 300, boxShadow: 3 }}>
                                        <CardMedia
                                            component="img"
                                            height="170"
                                            image={`data:image/jpeg;base64,${car.img}`}
                                            alt="Our Car"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {car.name}
                                            </Typography>
                                            {/* <Typography variant="body2" color="text.secondary">
                            {detail.slice(0, 55)}
                        </Typography> */}
                                        </CardContent>

                                        <CardActions>
                                            <Button onClick={() => handleDelete(car._id)} variant="contained">Delete</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        }
                    </Grid>
                </Box>
            )}

        </div>
    );
};

export default AddManageCar;