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
import AddCar from '../AddCar/AddCar';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CheckIcon from '@mui/icons-material/Check';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LogoutIcon from '@mui/icons-material/Logout';
import DashReview from '../DashReview/DashReview';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DashOrders from '../DashOrders/DashOrders';

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
                <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/DashOrders`}>
                    <Button variant="text" size="large" startIcon={<CheckIcon />}>My Orders</Button>
                </Link><Divider />
                
                <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/makeAdmin`}>
                    <Button variant="text" size="large" startIcon={<PersonAddIcon />}>Make Admin</Button>
                </Link><Divider />

                <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/DashReview`}>
                    <Button variant="text" size="large" startIcon={<BorderColorIcon />}>Manage Review</Button>
                </Link><Divider />

                <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/manageallorders`}>
                    <Button variant="text" size="large" startIcon={<AddShoppingCartIcon />}>Manage Orders</Button>
                </Link><Divider />

                <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/addcar`}>
                    <Button variant="text" size="large" startIcon={<EventAvailableIcon />}>Manage Product</Button>
                </Link><Divider />


                <Divider />
                <Divider />
                <Divider />
                <Divider />
                <Divider />

                {/* {admin && <Box>
                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/makeAdmin`}>
                        <Button variant="text" size="large" startIcon={<PersonAddIcon />}>Make Admin</Button>
                    </Link><Divider />

                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/DashReview`}>
                        <Button variant="text" size="large" startIcon={<BorderColorIcon />}>Manage Review</Button>
                    </Link><Divider />

                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/manageallorders`}>
                        <Button variant="text" size="large" startIcon={<AddShoppingCartIcon />}>Manage Orders</Button>
                    </Link><Divider />

                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/addcar`}>
                        <Button variant="text" size="large" startIcon={<EventAvailableIcon />}>Manage Product</Button>
                    </Link><Divider />

                </Box>} */}

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
                        <DashOrders />
                    </Route>
                    <Route path={`${path}/DashOrders`}>
                        <DashOrders />
                    </Route>

                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/DashReview`}>
                        <DashReview />
                    </Route>
                    <Route path={`${path}/manageallorders`}>
                        <ManageAllOrders />
                    </Route>
                    <Route path={`${path}/addCar`}>
                        <AddCar />
                    </Route>

                    {/* Admin Route */}
                    {/* <AdminRoute path={`${path}/addCar`}>
                        <AddCar />
                    </AdminRoute> */}

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
