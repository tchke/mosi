import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import closeUrl from '../../../icons/close.svg';
import menuUrl from '../../../icons/menu.svg';
import logoUrl from '../../../icons/Logo.svg';

import icons from '../../../icons';

export default class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    render() {
        const { isOpen, items } = this.props;
        const togglerUrl = isOpen ? closeUrl : menuUrl
        const navbarClass = classnames('navbar-collapse collapse', { show: isOpen })
        return (
            <nav className="navbar navbar-expand-lg">
                <div>
                    <button className="navbar-toggler collapsed"
                        type="button" 
                        data-toggle="collapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={this.handleClick}>
                        <img src={togglerUrl} alt="" />
                    </button>
                    <a className='navbar-brand'>
                        <img src={logoUrl} alt="star" />
                    </a>
                </div>
                <div className={navbarClass} id="navbarCollapse">
                    <ul className="navbar-nav justify-content-end">
                        {
                            items.map((r) => {
                                return (
                                    <li className="nav-item" key={r.title}>
                                        <img src={r.icon} />
                                        <Link className="nav-link" 
                                            to={r.path}
                                            onClick={this.handleItemClick}>{r.title}</Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <button id={"headerMenuLoginButton"}>Login</button>
            </nav>
        );
    }

    handleClick(e) {
        this.props.onTogglerClick && this.props.onTogglerClick(e);
    }

    handleItemClick(e) {
        this.props.onItemClick && this.props.onItemClick(e);
    }
}