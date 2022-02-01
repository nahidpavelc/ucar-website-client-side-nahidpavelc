import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './Review.css';

const AddReview = () => {
    const { user } = useAuth();
    const [review, setReview] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', user.displayName);
        formData.append('review', review);

        fetch('https://sleepy-ravine-27110.herokuapp.com/reviews', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Added Successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        document.getElementById("reviewForm").reset()

    }

    return (
        <div className="add-review" >
            <h2 className="m-5">REVIEW</h2>

            <form onSubmit={handleSubmit} id='reviewForm'>
                <TextField
                    label="Name"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: '50%', m: 1 }}
                    defaultValue={user.displayName}
                    placeholder="Name" />
                <TextField
                    required
                    multiline
                    rows={4}
                    label="Your Review"
                    id="outlined-size-large"
                    sx={{ width: '50%', m: 1 }}
                    onChange={e => setReview(e.target.value)}
                    placeholder="Review" />

                <Button sx={{ mb: 15 }} type="submit" variant="contained">Send</Button>
            </form>

        </div>
    );
};

export default AddReview;