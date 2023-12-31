import React from 'react';
import NavigationBar from '../../Pages/Shared/Header/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="bg-black pt-8">
            <NavigationBar />
            <div className="max-w-7xl mx-auto py-8">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;