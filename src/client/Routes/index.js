import App from '../App';
//import headerRoutes from './headerRoutes'
//import commonRoutes from './commonRoutes';
//import footerRoutes from './footerRoutes';
//import NotFound from '../containers/NotFound';
import Home from '../containers/Home';

export default [
    {
        ...App,
        routes: [
            //...headerRoutes,
            //...commonRoutes,
            //...footerRoutes,
            ...[
                {
                    ...Home
                }
            ]
        ]
    }
];
