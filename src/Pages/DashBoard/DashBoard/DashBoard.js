import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddCar from '../AddCar/AddCar';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CheckIcon from '@mui/icons-material/Check';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LogoutIcon from '@mui/icons-material/Logout';
import DashReview from '../DashReview/DashReview';
import PaymentIcon from '@mui/icons-material/Payment';
import Payment from '../Payment/Payment';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const drawerWidth = 220;

function DashBoard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List align="left">
                <Link style={{ textDecoration: "none", color: 'white' }} to="/allcars">
                    <Button variant="text" size="large" startIcon={<BookmarkAddedIcon />}>New Booking</Button>
                </Link><Divider />
                <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}`}>
                    <Button variant="text" size="large" startIcon={<CheckIcon />}>My Order</Button>
                </Link><Divider />
                <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/DashReview`}>
                    <Button variant="text" size="large" startIcon={<BorderColorIcon />}>Review</Button>
                </Link><Divider />
                <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/payment`}>
                    <Button variant="text" size="large" startIcon={<PaymentIcon />}>Payment</Button>
                </Link><Divider />
                <Divider />
                <Divider />
                <Divider />
                <Divider />

                {admin && <Box>
                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/makeAdmin`}>
                        <Button variant="text" size="large" startIcon={<PersonAddIcon />}>Make Admin</Button>
                    </Link><Divider />
                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/manageallorders`}>
                        <Button variant="text" size="large" startIcon={<EventAvailableIcon />}>Manage Orders</Button>
                    </Link><Divider />
                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/addcar`}>
                        <Button variant="text" size="large" startIcon={<AddShoppingCartIcon />}>Add Product</Button>
                    </Link><Divider />
                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/manageproducts`}>
                        <Button variant="text" size="large" startIcon={<ShoppingCartIcon />}>Manage Products</Button>
                    </Link><Divider />
                </Box>}

                <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/home`}>
                    <Button onClick={logout} variant="text" size="large" startIcon={<LogoutIcon />}>Logout</Button>
                </Link><Divider />


            </List>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={`${path}`}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/DashReview`}>
                        <DashReview></DashReview>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>

                    {/* Admin Route */}
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageallorders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addCar`}>
                        <AddCar></AddCar>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>



            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;
