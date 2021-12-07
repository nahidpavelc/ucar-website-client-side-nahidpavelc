import { Button, TableCell, TableRow, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const AppointTable = ({ order }) => {
    const { _id, name, color, email } = order;
    const { user, token } = useAuth();
    const [orders, setOrders] = useState([])



    return (
        <TableRow
            key={order._id}
        // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">{order.model}</TableCell>
            <TableCell >{order.color}</TableCell>
            <TableCell >{order.name}</TableCell>
            <TableCell >{order.email}</TableCell>
            <TableCell >{order._id}</TableCell>

            {/* <TableCell >
                                    <Chip label="Confirm" variant="outlined" onClick={handleConfirm} />
                                </TableCell> */}

            <TableCell ><Tooltip title="Delete">
                <Button variant="text" onClick={handleDelete}><DeleteIcon /></Button>
            </Tooltip></TableCell>

        </TableRow>
    );
};

export default AppointTable;