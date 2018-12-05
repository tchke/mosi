import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
//import Cookie from './components/UI/Cookie';
//import { fetchCurrentUser } from './actions';


const App = ({ route }) => {
    
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
            <Footer />
        </div>
    );
    
};


export default{
    component: App,
    loadData: ({ dispatch }) => {
        console.log('load data...');
    }
};