import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const DashOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    const history = useHistory();

    const handleDelete = id => {
        fetch(`https://sleepy-ravine-27110.herokuapp.com/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining);
                }
            })
    }
    useEffect(() => {
        fetch(`https://sleepy-ravine-27110.herokuapp.com/bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));

    }, [])

    return (
        <div>
            <h2>Your Total Order: {orders.length}</h2>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> Car Model </TableCell>
                            <TableCell> Color </TableCell>
                            <TableCell> Client </TableCell>
                            <TableCell> Email </TableCell>
                            <TableCell> Phone </TableCell>
                            {/* <TableCell> Confirm </TableCell> */}
                            <TableCell> Delete </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                key={order._id}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{order.model}</TableCell>
                                <TableCell >{order.color}</TableCell>
                                <TableCell >{order.name}</TableCell>
                                <TableCell >{order.email}</TableCell>
                                <TableCell >{order.phone}</TableCell>

                                {/* <TableCell >
                        <Chip label="Confirm" variant="outlined" onClick={handleConfirm} />
                    </TableCell> */}

                                <TableCell ><Tooltip title="Delete">
                                    <Button variant="text" onClick={() => handleDelete(order._id)}><DeleteIcon /></Button>
                                </Tooltip></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DashOrders;