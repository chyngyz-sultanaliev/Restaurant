import React from 'react';
import Delicious from './delicious';
import AboutUs from './aboutUs';
import BestSellers from './bestSellers';
import MainMenu from './mainMenu';
import VisitRestaurant from './visitRestaurant';
import ModernInterior from './modernInterior';

const MainPage = () => {
    return (
        <>
        <Delicious/>
        <AboutUs/>
        <BestSellers/>
        <MainMenu/>
        <ModernInterior/>
        <VisitRestaurant/>
        </>
    );
};

export default MainPage;