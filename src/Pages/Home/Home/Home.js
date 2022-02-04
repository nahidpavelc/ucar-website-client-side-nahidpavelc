import React from 'react';
import Footer from '../../Shared/Footer/Footer';
// import Header from '../../Shared/Header/Header';
// import Brand from '../Brand/Brand';
import Navigation from '../../Shared/Header/Navigation';
import Banner from '../Banner/Banner';
import News from '../News/News';
import Products from '../Products/Products';
import Review from '../Review/Review';
import WorkShop from '../WorkShop/WorkShop';

const Home = () => {
    return (
        <>
            {/* <Header></Header> */}
            <Navigation />
            <Banner></Banner>
            <Products></Products>
            <WorkShop></WorkShop>
            {/* <Brand></Brand> */}
            <News></News>
            <Review></Review>
            <Footer></Footer>
        </>
    );
};

export default Home;