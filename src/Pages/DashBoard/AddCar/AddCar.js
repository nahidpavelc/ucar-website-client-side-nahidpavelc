import { Button, Input, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import AddManageCar from '../AddManageCar/AddManageCar';
import './AddCar.css';

const AddCar = () => {
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('detail', detail);
        formData.append('price', price);
        formData.append('image', image);

        fetch('https://sleepy-ravine-27110.herokuapp.com/cars', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Car Added Successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        document.getElementById("form").reset()

    }

    return (
        <>
            <Typography
                variant="h3"
                gutterBottom component="div"
                sx={{ color: 'primary.main', mt: 5 }}
                className="Add-car-Typo">
                Add New Model
            </Typography>

            <div id="add-car">
                <form onSubmit={handleSubmit} id='form'>
                    <TextField
                        required
                        label="Name"
                        id="outlined-size-small"
                        size="small"
                        sx={{ width: '90%', m: 1 }}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name" />
                    <TextField
                        required
                        multiline
                        rows={4}
                        label="Detail"
                        id="outlined-size-large"
                        size="large"
                        sx={{ width: '90%', m: 1 }}
                        onChange={e => setDetail(e.target.value)}
                        placeholder="Detail" />
                    <TextField
                        required
                        label="Price"
                        id="outlined-size-small"
                        size="small"
                        sx={{ width: '90%', m: 1 }}
                        onChange={e => setPrice(e.target.value)}
                        type="number"
                        placeholder="Price" />
                    <Input
                        required
                        label="Image URL"
                        accept="image/*"
                        onChange={e => setImage(e.target.files[0])}
                        type="file"
                        sx={{ width: '90%', m: 1 }}
                        placeholder="Image URL" />


                    <Button type="submit" variant="contained">Confirm</Button>
                </form>
            </div>
            <div>
                <AddManageCar className="addCart"></AddManageCar>
            </div>

        </>
    );
};

export default AddCar;