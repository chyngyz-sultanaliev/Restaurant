import React from 'react';
import Delicious from './delicious';
import AboutUs from './aboutUs';
import BestSellers from './bestSellers';
import MainMenu from './mainMenu';
import VisitRestaurant from './visitRestaurant';

const MainPage = () => {
    return (
        <>
        <Delicious/>
        <AboutUs/>
        <BestSellers/>
        <MainMenu/>
        <VisitRestaurant/>
        </>
    );
};

export default MainPage;