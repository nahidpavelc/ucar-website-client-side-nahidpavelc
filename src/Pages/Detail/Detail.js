import { Button, Container, Grid, MenuItem, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AddReview from './AddReview/AddReview';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const colors = [
    {
        value: 'WHITE',
        label: 'WHITE',
    },
    {
        value: 'SILVER',
        label: 'SILVER',
    },
    {
        value: 'RED',
        label: 'RED',
    },
];


const Detail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [color, setColor] = React.useState('Color');

    const { user } = useAuth();

    const initialInfo = { color: '', name: user.displayName, email: user.email, phone: '', nid: '', passport: '', bankacc: '', }
    const [booking, setBooking] = useState(initialInfo);

    useEffect(() => {
        fetch(`https://sleepy-ravine-27110.herokuapp.com/cars/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const { img, name, price, detail } = product;


    const handleChange = (event) => {
        setColor(event.target.value);
    };
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...booking };
        newInfo[field] = value;
        // console.log(newInfo);
        setBooking(newInfo);
    }
    const handleBookSubmit = e => {
        alert('Confirmed Order');
        //collect data
        const allBooking = {
            ...booking,
            model: name
        }

        //SEnd to the Server
        fetch('https://sleepy-ravine-27110.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // setBookingSuccess(true);
                    // handleClose();
                }
            })
        e.preventDefault();
    }


    return (
        <>
            <Header></Header>
            <Container sx={{ mt: 5, mb: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Paper sx={{ maxWidth: "100%" }}>
                            <Paper>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image={img}
                                    alt="Car Model"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {detail}
                                    </Typography>
                                </CardContent>
                            </Paper>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography variant="h5" gutterBottom component="div">
                            Booking Now
                        </Typography>
                        <form onSubmit={handleBookSubmit}>
                            <TextField
                                id="outlined-select-color"
                                select
                                sx={{ width: '90%', m: 1 }}
                                label="Color"
                                value={color}
                                onChange={handleChange}
                                name="color"
                                onBlur={handleOnBlur}
                            >
                                {colors.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                // label="Size"
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={user.displayName}
                                size="small"
                                name="name"
                                label="Name"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                // label="Size"
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={user.email}
                                size="small"
                                name="email"
                                label="E-mail"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                // label="Size"
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                size="large"
                                name="email"
                                label="Address"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                // label="Size"
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                label="Mobile No"
                                size="small"
                                name="phone"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                // label="Size"
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                label="National Id"
                                size="small"
                                name="nid"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                // label="Size"
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                label="Passport No"
                                size="small"
                                name="passport"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                // label="Size"
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                label="Account No"
                                size="small"
                                name="bankacc"
                                onBlur={handleOnBlur}
                            />
                            <Button type="submit" variant="contained">Confirm Booking</Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>

            <AddReview></AddReview>

        </>

    );
};

export default Detail;