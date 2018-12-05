//common file shared between client and server for routing
// used react-router-config thus having array of objects as routes

import React from 'react';
import App from './App';
import Home from './containers/Home';
import UsersList from './containers/UsersList';
import AdminsList from './containers/adminsList';
import NotFound from './containers/NotFound';
import PrescriptionList from './containers/PrescriptionList';
import HealthServices from './containers/HealthServices';
import BookAppointment from './containers/BookAppointment';
import LoginPage from './containers/LoginPage';
import Corporateresponsibility from './containers/corporateresponsibility';
import Deliveryandreturns from './containers/deliveryandreturns';
import Faq from './containers/faq';
import Partners from './containers/partners';
import Pharmacylocator from './containers/pharmacylocator';
import Productrecall from './containers/productrecall';
import Sitemap from './containers/sitemap';
import Termsandconditions from './containers/termsandconditions';
import Testimonials from './containers/testimonials';
import Bootsdotcom from './containers/bootsdotcom';
import Accessibility from './containers/accessibility';
import Careers from './containers/careers';
import ContactUs from './containers/contactus';
import Cookiesandprivacypolicy from './containers/cookiesandpp';
import Search from './containers/Search';
import GPSearch from './containers/GPSearch/GPList';
import ListStub from './containers/ListStub';

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...ListStub,
                path: '/liststub',
                exact: true
            },
            {
                ...UsersList,
                path: '/users',
            },
            {
                ...Search,
                path: '/search',
            },
            {
                ...GPSearch,
                path: '/gpsearch',
            },
            {
                ...AdminsList,
                path: '/admins',
            },
            {
                ...PrescriptionList,
                path: '/prescription',
            },
            {
                ...HealthServices,
                path: '/healthservices',
            },
            {
                ...BookAppointment,
                path: '/bookappointment',
            },
            {
                ...LoginPage,
                path: '/login',
            },
            {
                ...Faq,
                path: '/faq',
                exact: true
            },
            {
                ...Accessibility,
                path: '/accessibility',
                exact: true
            },
            {
                ...Careers,
                path: '/careers',
                exact: true
            },
            {
                ...ContactUs,
                path: '/contactus',
                exact: true
            },
            {
                ...Cookiesandprivacypolicy,
                path: '/cookiesandprivacypolicy',
                exact: true
            },
            {
                ...Corporateresponsibility,
                path: '/corporateresponsibility',
                exact: true
            },
            {
                ...Deliveryandreturns,
                path: '/deliveryandreturns',
                exact: true
            },
            {
                ...Partners,
                path: '/partners',
                exact: true
            },
            {
                ...Pharmacylocator,
                path: '/pharmacylocator',
                exact: true
            },
            {
                ...Productrecall,
                path: '/productrecall',
                exact: true
            },
            {
                ...Sitemap,
                path: '/sitemap',
                exact: true
            },
            {
                ...Termsandconditions,
                path: '/termsandconditions',
                exact: true
            },
            {
                ...Testimonials,
                path: '/testimonials',
                exact: true
            },
            {
                ...Bootsdotcom,
                path: '/bootsdotcom',
                exact: true
            },
            {
                ...NotFound
            }
        ]
    }
];