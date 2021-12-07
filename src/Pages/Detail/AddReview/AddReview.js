import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './Review.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()

    const onSubmit = data => {
        console.log(data);
        axios.post('https://sleepy-ravine-27110.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <Typography variant="h4" gutterBottom component="div">
                Review
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="outlined-size-small"
                    label="Your Name"
                    defaultValue={user.displayName}
                    size="small"
                    {...register("name", { required: true, maxLength: 20 })} placeholder="Email" />
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="outlined-multiline-static"
                    label="Your Review"
                    multiline
                    rows={4}
                    {...register("review")} placeholder="Review" />
                {/* <input {...register("img")} placeholder="Image" /> */}
                <Button sx={{ mb: 15 }} type="submit" variant="contained">Send</Button>

            </form>
        </div>
    );
};

export default AddReview;