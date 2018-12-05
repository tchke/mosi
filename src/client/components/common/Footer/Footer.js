import React from 'react';
import FOOTER_CONFIG from '../../../appConfig/footerConfig';
import { Link } from 'react-router-dom';
import logoUrl from '../../../icons/Logo.svg';
import facebookUrl from '../../../icons/facebook.svg';
import twitterUrl from '../../../icons/twitter.svg';
import youtubeUrl from '../../../icons/youtube.svg';
import instagramUrl from '../../../icons/instagram.svg';
import bootscardUrl from '../../../icons/bootscard.svg';
import FooterCollapser from './FooterCollapser';

export default class Footer extends React.Component {
  constructor() {
    super();
    this.renderColumn = this.renderColumn.bind(this);
    this.toggle = this.toggle.bind(this);
    this.collapse = this.collapse.bind(this);
    this.state = { };
  }
  
  toggle(i) {
    const { collapse } = this.state;
    this.setState({ collapse: i === collapse ? null : i });
  };

  collapse() {
    this.setState(() => {
      return { collapse: null };
    });
  }
  
  render() {
    return (
      <div className='footer'>
        <div className='d-flex flex-column justify-content-center'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <div className='logo'>
                  <img src={logoUrl} width='150px' height='31px' alt='Boots pharmacy'></img>
                </div>
              </div>
            </div>
            <div className='row d-flex flex-row justify-content-left'>
              <div className='col-lg mb-5'>
                <div className='row'>
                  {FOOTER_CONFIG.sections.map(this.renderColumn)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  renderColumn(r, i) {
    return (
      <div className='col-md footerColumn' key={r.title}>
        {this.renderCollapser(r, i)}
      </div>
    );
  }

  renderCollapser(r, i) {
    return (
      <FooterCollapser 
          route={r} 
          index={i} 
          collapse={this.state.collapse === i} 
          onClick={this.toggle}
          onItemClick={this.collapse}/>
    );
  }
}