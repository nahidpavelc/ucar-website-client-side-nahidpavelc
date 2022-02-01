import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import BookingModal from '../../Allcars/BookingModal/BookingModal';

const Allcar = ({ product, setBookingSuccess }) => {
    const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { _id, name, detail, img, price } = product;

    return (
        <>
            <Grid className='cardPosition' item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                    <CardMedia
                        component="img"
                        height="170"
                        image={`data:image/jpeg;base64,${img}`}
                        alt="Our Car"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {detail.slice(0, 55)}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            Price: $ {price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Button onClick={handleOpen}>Open modal</Button> */}

                        <Link to={`/Detail/${_id}`}>
                            <Button size="small" >Order now</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>

            <BookingModal
                product={product}
                open={open}
                handleClose={handleClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
            {/* <Buy product={product}></Buy> */}
        </>


    );
};

export default Allcar;