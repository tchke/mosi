import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

const Home = () => {
    return (
        <div className="contentStyle">
            <h3>Welcome</h3>
            <div>
        <       Link to="/gpsearch">GP Search</Link>{" "}
            </div>
            <div>
                <Link to="/storesearch">Store Search</Link>
            </div>
            <div>
                <Link to="/basket">Example Basket</Link>
            </div>
        </div>
    );
};

export default { 
    component: Home
};