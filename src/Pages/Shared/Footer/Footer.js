import { Button, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import './Footer.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Footer = () => {
    return (
        <>
            <footer class="w-100 py-4 flex-shrink-0">
                <div class="container py-4">
                    <div class="row gy-4 gx-5">
                        <div class="col-lg-4 col-md-6">
                            <h5 class="h1 text-dark">U CAR</h5>
                            <p class="small text-muted">We Imports brand new & reconditioned cars from Japan, Germany & UK. We also import original car parts. Currently we’re one of the largest reconditioned car Importer in Bangladesh.</p>
                            <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">Nahid@Pavel.com</a></p>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <h5 class="text-dark mb-3">Quick links</h5>
                            <ul class="list-unstyled text-muted">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Get started</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <h5 class="text-dark mb-3">STAY WITH US</h5>
                            <ul class="list-unstyled text-muted">
                                <li><a href="#"><FacebookIcon /></a></li>
                                <li><a href="#"><InstagramIcon /></a></li>
                                <li><a href="#"><YouTubeIcon /></a></li>

                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <h5 class="text-white mb-3">Newsletter</h5>
                            <p class="small text-muted">We Imports brand new & reconditioned cars from Japan, Germany & UK.</p>
                            <form action="#">
                                <div class="input-group mb-3">
                                    <input class="form-control" type="text" placeholder="Recipient's Email" aria-label="Recipient's username" aria-describedby="button-addon2" />

                                </div>
                                <Button class="btn btn-primary" id="button-addon2" type="button">Send</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;