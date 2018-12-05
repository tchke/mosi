import React from 'react';
//import data from "../../../data/navLinkData.js";
//import _ from "lodash";
//import headerRoutes from '../../../Routes/headerRoutes';
import HeaderMenu from './HeaderMenu';
import HEADER_CONFIG from '../../../appConfig/headerConfig';
import icons from '../../../icons';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {};
  }

  toggle() {
    this.setState((state) => {
      return { isOpen: !state.isOpen }
    });
  }

  render() {
    const { isOpen } = this.state;
    //const routes = _.values(data);

    return (
      <header>
        <HeaderMenu 
          isOpen={isOpen} 
          items={this.prepareItems(HEADER_CONFIG.items)} 
          onTogglerClick={this.toggle}
          onItemClick={this.toggle}>
        </HeaderMenu>
      </header>
    );
  }

  prepareItems(items) {
    return items.map((i) => {
      i.icon = icons[i.iconSrcKey]
      return i;
    });
  }
}
