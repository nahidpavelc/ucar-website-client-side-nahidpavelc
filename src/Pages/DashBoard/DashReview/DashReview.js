import React, { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Chip, IconButton, Tooltip } from '@mui/material';

const DashReview = () => {
    const { user, token, displayName, email } = useAuth();
    const [reviews, setReviews] = useState([])

    // const handleConfirm = () => {
    //     console.info('You clicked the Chip.');
    // };
    const handleDelete = id => {
        fetch(`https://car-shop-server-side-nahidpavelc.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = reviews.filter(order => order._id !== id)
                    setReviews(remaining);
                }
            })
    }

    useEffect(() => {
        const url = `https://car-shop-server-side-nahidpavelc.vercel.app/reviews?email=${user.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data));

    }, [])

    return (
        <div>
            <h2>Your Total Review: {reviews.length}</h2>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> name </TableCell>
                            <TableCell> Email </TableCell>
                            <TableCell> Your Review </TableCell>
                            {/* <TableCell> Confirm </TableCell> */}
                            <TableCell> Delete </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reviews.map((review) => (
                            <TableRow
                                key={review._id}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{user.displayName}</TableCell>
                                <TableCell >{user.email}</TableCell>
                                <TableCell >{review.review}</TableCell>

                                {/* <TableCell >
                                    <Chip label="Confirm" variant="outlined" onClick={handleConfirm} />
                                </TableCell> */}

                                <TableCell ><Tooltip title="Delete">
                                    <Button variant="text" onClick={() => handleDelete(review._id)}><DeleteIcon /></Button>
                                </Tooltip></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DashReview;
