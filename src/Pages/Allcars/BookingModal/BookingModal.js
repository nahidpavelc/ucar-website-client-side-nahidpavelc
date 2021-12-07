import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardMedia } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import useAuth from '../../../hooks/useAuth';

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


const BookingModal = ({ open, handleClose, product, setBookingSuccess }) => {
    const { name, detail, img } = product;
    const { user } = useAuth();

    const initialInfo = { color: '', name: user.displayName, email: user.email, phone: '', nid: '', passport: '', bankacc: '', }

    const [booking, setBooking] = useState(initialInfo);
    const [color, setColor] = React.useState('Color');

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
                    setBookingSuccess(true);
                    handleClose();
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Card sx={{ width: '100%', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={img}
                                alt="green iguana"
                            />
                        </Card>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
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

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;