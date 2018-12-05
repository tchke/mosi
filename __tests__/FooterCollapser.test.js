import React from 'react';
import FooterCollapser from '../src/client/components/common/Footer/FooterCollapser';
import { shallow } from 'enzyme';

describe('FooterCollapser tests', () => {
    it('Should render', () => {
        const props = {
            route: {
                title: 'Company',
                items: [
                    {
                        title: 'Partners',
                        path: '/partners'
                    }
                ]
            }
        }
        const wrapper = shallow(<FooterCollapser {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Should handle click', () => {
        let toBeUpdated = false;
        
        const props = {
            route: {
                title: 'Company',
                items: [
                    {
                        title: 'Partners',
                        path: '/partners'
                    }
                ]
            },
            onClick: () => { toBeUpdated = true }
        }
        const wrapper = shallow(<FooterCollapser {...props}/>);
        wrapper.find('.collapseTrigger').simulate('click')
        expect(toBeUpdated).toBeTruthy();
    });

    it('Should contain at least one item', () => {
        let toBeUpdated = false;
        
        const props = {
            route: {
                title: 'Company',
                items: [
                    {
                        title: 'Partners',
                        path: '/partners'
                    }
                ]
            }
        }
        const wrapper = shallow(<FooterCollapser {...props}/>);
        const length = wrapper.find('.nav-item .nav-link').length;
        expect(length).toBeGreaterThan(0);
    });

    it('Should handle item click', () => {
        let toBeUpdated = false;
        
        const props = {
            route: {
                title: 'Company',
                items: [
                    {
                        title: 'Partners',
                        path: '/partners'
                    }
                ]
            },
            onItemClick: () => { toBeUpdated = true }
        }
        const wrapper = shallow(<FooterCollapser {...props}/>);
        const linkWrapper = wrapper.find('.nav-item .nav-link').first();
        expect(linkWrapper).not.toBeNull();
        linkWrapper.simulate('click');
        expect(toBeUpdated).toBeTruthy();
    });
})