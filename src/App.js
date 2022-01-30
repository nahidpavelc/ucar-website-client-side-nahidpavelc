import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Allcars from './Pages/Allcars/Allcars/Allcars';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AllcarsBanner from './Pages/Allcars/Abanner/Abanner';
import Detail from './Pages/Detail/Detail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/Authprovider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRouter/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import BookingModal from './Pages/Allcars/BookingModal/BookingModal';
import About from './Pages/About/About';
import Loader from './Pages/Shared/Loader/Loader';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/Allcars">
              <Allcars />
            </Route>
            <Route path="/loader">
              <Loader />
            </Route>

            {/* Dynamic Route  */}
            <PrivateRoute path="/detail/:productId">
              <Detail></Detail>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <DashBoard />
            </PrivateRoute>
            <PrivateRoute path="/bookingmodal">
              <BookingModal />
            </PrivateRoute>

            <Route path="/AllcarsBanner">
              <AllcarsBanner></AllcarsBanner>
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>

            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
