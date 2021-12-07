import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddCar.css';

const AddCar = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)

        axios.post('https://sleepy-ravine-27110.herokuapp.com/cars', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data Added Successfully')
                    reset();
                }
            })
    };

    return (
        <div className="add-service">
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Name"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: '90%', m: 1 }}
                    {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <TextField
                    label="Detail"
                    id="outlined-size-large"
                    size="large"
                    sx={{ width: '90%', m: 1 }} {...register("detail")} placeholder="Detail" />
                <TextField
                    label="Price"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: '90%', m: 1 }}
                    type="number" {...register("price")}
                    placeholder="Price" />
                <TextField
                    label="Image URL"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: '90%', m: 1 }} {...register("img")} placeholder="Image URL" />

                <Button type="submit" variant="contained">Confirm</Button>
            </form>
        </div>
    );
};

export default AddCar;