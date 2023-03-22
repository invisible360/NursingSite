import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../shared/NavigationBar';

const Main = () => {

    return (
        <div>
            <NavigationBar/>
            <Outlet/>
        </div>
    );
};

export default Main;