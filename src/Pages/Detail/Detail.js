import { Button, Container, Grid, MenuItem, OutlinedInput, Paper, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AddReview from './AddReview/AddReview';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Header/Navigation';


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
        fetch('https://car-shop-server-side-nahidpavelc.vercel.app/cars/${productId}')
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
        if (document.getElementById("color").value == '') {
            e.preventDefault();
            alert("Input color")
            return false;
        }
        if (document.getElementById("address").value.length == 0) {
            e.preventDefault();
            alert("Input Address")
            return false;
        }
        if (document.getElementById("phone").value.length == 0) {
            e.preventDefault();
            alert("Input Mobile No")
            return false;
        }
        if (document.getElementById("nid").value.length == 0) {
            e.preventDefault();
            alert("Input NID No")
            return false;
        }
        if (document.getElementById("passport").value.length == 0) {
            e.preventDefault();
            alert("Input Passport No")
            return false;
        }
        if (document.getElementById("bankacc").value.length == 0) {
            e.preventDefault();
            alert("Input Address")
            return false;
        }

        alert('Confirmed Order');
        //collect data
        const allBooking = {
            ...booking,
            model: name
        }

        //SEnd to the Server
        fetch('https://car-shop-server-side-nahidpavelc.vercel.app/bookings', {
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
        document.getElementById("form").reset()
        e.preventDefault();

    }


    return (
        <>
            <Navigation></Navigation>
            <Container sx={{ mt: 5, mb: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Paper sx={{ maxWidth: "100%", boxShadow: 'none' }}>
                            <Paper sx={{ boxShadow: 'none' }}>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image={`data:image/jpeg;base64,${img}`}
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
                        <Typography variant="h5" gutterBottom component="div" sx={{ color: '#1976D2' }}>
                            Booking Now
                        </Typography>
                        <form id='form' onSubmit={handleBookSubmit}>

                            <TextField
                                // label="Size"
                                sx={{ width: '90%', m: 1, color: 'darkblue' }}
                                id="color"
                                label="Color"
                                // size="small"
                                value={color}
                                name="color"
                                onBlur={handleOnBlur}
                                select
                                onChange={handleChange}
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
                                id="name"
                                defaultValue={user.displayName}
                                size="small"
                                name="name"
                                label="Name"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                // label="Size"
                                sx={{ width: '90%', m: 1 }}
                                id="email"
                                defaultValue={user.email}
                                size="small"
                                name="email"
                                label="E-mail"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                // label="Size"
                                sx={{ width: '90%', m: 1 }}
                                id="address"
                                size="large"
                                name="address"
                                label="Address"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                // label="Size"
                                sx={{ width: '90%', m: 1 }}
                                id="phone"
                                label="Mobile No"
                                size="small"
                                name="phone"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                // label="Size"
                                sx={{ width: '90%', m: 1 }}
                                id="nid"
                                label="National Id"
                                size="small"
                                name="nid"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                // label="Size"
                                sx={{ width: '90%', m: 1 }}
                                id="passport"
                                label="Passport No"
                                size="small"
                                name="passport"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                // label="Size"
                                sx={{ width: '90%', m: 1 }}
                                id="bankacc"
                                label="Account No"
                                size="small"
                                name="bankacc"
                                onBlur={handleOnBlur}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                onProgress={() => this.setState({ name: 'random' })}
                            >Confirm Booking</Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>

            <AddReview></AddReview>

        </>

    );
};

export default Detail;
