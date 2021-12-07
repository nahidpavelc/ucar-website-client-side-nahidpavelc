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

const Product = ({ product, setBookingSuccess }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { _id, name, detail, img } = product;

    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {detail.slice(0, 30)}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Button onClick={handleOpen}>Open modal</Button> */}
                        <Link to={`/Detail/${_id}`}>
                            <Button size="small">Order Now</Button>
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
        </>
    );
};

export default Product;