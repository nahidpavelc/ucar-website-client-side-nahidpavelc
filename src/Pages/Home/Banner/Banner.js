import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {


    return (
        <div>
            <div id="header1">
                <h1 id="h1"> <spam id="span">Explore Our latest Collection</spam></h1>
                <Link to="/allcars" id="banner-btn"><Button variant="contained">Latest Cars</Button></Link>
            </div>

        </div>
    );
};

export default Banner;