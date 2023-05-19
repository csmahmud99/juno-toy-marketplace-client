import React from 'react';
import NavigationBar from '../../Pages/Shared/Header/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;