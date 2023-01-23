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

const ManageAllOrders = () => {
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([])

  // const handleConfirm = () => {
  //     console.info('You clicked the Chip.');
  // };
  const handleDelete = id => {
    fetch(`https://car-shop-server-side-nahidpavelc.vercel.app/bookings/${id}`, {
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
    fetch(`https://car-shop-server-side-nahidpavelc.vercel.app/bookings`, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
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

export default ManageAllOrders;
