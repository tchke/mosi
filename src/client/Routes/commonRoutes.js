//common file shared between client and server for routing
// used react-router-config thus having array of objects as routes

import LoginPage from '../containers/LoginPage';
import Search from '../containers/Search';
import GPSearch from '../containers/GPSearch/GPList';
import StoreSearch from '../containers/StoreSearch/StoreList';
import OrderSummary from '../containers/OrderSummary';
import Basket from '../containers/Basket';
import OrderConfirmation from '../containers/OrderConfirmation/index';
import ListStub from '../containers/ListStub';

export default [
    {
        ...Search,
        path: '/search',
    },
    {
        ...GPSearch,
        path: '/gpsearch',
    },
    {
        ...StoreSearch,
        path: '/storesearch',
    },
    {
        ...LoginPage,
        path: '/login',
    },
    {
        ...Basket,
        path: '/basket',
    },
    {
        ...OrderConfirmation,
        path: '/order-confirmation',
        exact: true
    },
    {
        ...OrderSummary,
        path: '/order-summary',
        exact: true,
    },
    {
        ...ListStub,
        path: '/ls',
        exact: true,
    },
];