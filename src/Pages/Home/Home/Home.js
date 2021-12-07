import React from 'react';
import Allcars from '../../Allcars/Allcars/Allcars';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import News from '../News/News';
import Products from '../Products/Products';
import Review from '../Review/Review';
import WorkShop from '../WorkShop/WorkShop';

const Home = () => {
    return (
        <div>
            <Header></Header>

            <div>
                <Banner></Banner>
                <Products></Products>
                <WorkShop></WorkShop>
                {/* <Brand></Brand> */}
                <News></News>
                <Review></Review>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;