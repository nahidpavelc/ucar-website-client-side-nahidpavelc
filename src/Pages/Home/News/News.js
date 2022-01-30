import { Container, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import new1 from '../../../Images/news (2).jpg';
import new2 from '../../../Images/news (3).jpg';
import new3 from '../../../Images/news (4).jpg';
import './News.css'

const News = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom component="div" sx={{ color: 'primary.main', mt: 5 }}>
                Blog
            </Typography>
            <Grid container spacing={2}>
                <Grid className='newsPosition' item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={new1}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                NEW BMW 5 Series (2022)
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                BMW 5 Series drive along the road on a sunny day. The BMW 5 Series is the embodiment of the modern business saloon.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Read...</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid className='newsPosition' item xs={12} sm={6} md={4} >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={new2}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                NEW BMW 7 Series (2022)
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                BMW 7 Series drive along the road on a sunny day. The BMW 7 Series is the embodiment of the modern business saloon.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Read...</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid className='newsPosition' item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={new3}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                NEW BMW 8 Series (2022)
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                BMW 8 Series drive along the road on a sunny day. The BMW 8 Series is the embodiment of the modern business saloon.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Read...</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default News;