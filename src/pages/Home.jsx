// eslint-disable-next-line no-unused-vars
import React from 'react';
import BannerHome from './Shared/BannerHone/BannerHome';
import Chefs from './Shared/Chefs/Chefs';
import Categories from './Shared/Categories/Categories';
import BannerBook from './Shared/BannerHone/BannerBook';
import TodaysPick from './Shared/TodaysPick/TodaysPick';

const Home = () => {
    return (
        <div>
            <BannerHome />
            <TodaysPick />
            <Categories />
            <Chefs />
            <BannerBook />
            <p className='container section thanks-for-visiting'>Thanks for Visiting</p>
        </div>
    );
};

export default Home;