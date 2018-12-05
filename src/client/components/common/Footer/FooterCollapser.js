import React from 'react';
import classnames from 'classnames';
import chevronDownUrl from '../../../icons/chevron-down.svg';
import { Link } from 'react-router-dom';

export default class FooterCollapser extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    render() {
        const collapserClass = classnames('collapse', { show: this.props.collapse })

        return (
            <div className="footerCollapser">
                <a className="collapseTrigger" onClick={this.handleClick}>
                    <span>{this.props.route.title}</span>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMTIgMTMuNTg2TDYuNzA3IDguMjkzYTEgMSAwIDAgMC0xLjQxNCAxLjQxNGw2IDZhMSAxIDAgMCAwIDEuNDE0IDBsNi02YTEgMSAwIDEgMC0xLjQxNC0xLjQxNEwxMiAxMy41ODZ6Ii8+DQogICAgPC9kZWZzPg0KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4NCiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4NCiAgICAgICAgPC9tYXNrPg0KICAgICAgICA8dXNlIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2EiLz4NCiAgICAgICAgPGcgZmlsbD0iI2ZmZiIgbWFzaz0idXJsKCNiKSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6Ii8+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4NCg==" alt="" />
                </a>
                <div className={collapserClass}>
                    <div className="border-0 card">
                        <div className="px-0 card-body">
                            <ul className="nav flex-column">
                                {
                                    this.props.route.items.map((item) => {
                                        return (
                                            <li className="nav-item" key={item.title}>
                                                <Link className="nav-link" 
                                                    to={item.path}
                                                    onClick={this.handleItemClick}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleClick(e) {
        this.props.onClick && this.props.onClick(this.props.index);
    }

    handleItemClick(e) {
        this.props.onItemClick && this.props.onItemClick(e);
    }
}