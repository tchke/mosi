import React from 'react';
import { shallow, mount, render } from 'enzyme';
import HeaderMenu from '../src/client/components/common/Header/HeaderMenu';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router'
import Home from '../src/client/containers/Home';
import { Button ,NavItem,Link,NavbarToggler,Collapse} from 'reactstrap';
import { MemoryRouter } from 'react-router';
import _ from "lodash";
import { link } from 'fs';

const CONFIG = {
    "items": [
        {
            "title": "Home",
            "path": "/",
            "iconSrcKey": "Home"
        },
        {
            "title": "Prescriptions",
            "path": "/prescription",
            "iconSrcKey": "Prescription"
        },
        {
            "title": "Health services",
            "path": "/healthservices",
            "iconSrcKey": "healthservices"
        },
        {
            "title": "Book an appoinment",
            "path": "/bookappointment",
            "iconSrcKey": "bookappoinment"
        }
    ]
}

describe('HeaderMenu', () => {
    it('should render if isOpen is not set', () => {
        const props = {
            items: CONFIG.items
        }
        const wrapper = shallow(<HeaderMenu {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render if isOpen is set to true', () => {
        const props = {
            items: CONFIG.items,
            isOpen: true
        }
        const wrapper = shallow(<HeaderMenu {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Should handle click', () => {
        let toBeUpdated = false;
        const props = {
            items: CONFIG.items,
            isOpen: true,
            onTogglerClick: () => { toBeUpdated = true }
        }

        const wrapper = shallow(<HeaderMenu {...props}/>);
        wrapper.find('.navbar-toggler').simulate('click')
        expect(toBeUpdated).toBeTruthy();
    });

    it('Should contain at least one item', () => {
        let toBeUpdated = false;
        const props = {
            items: CONFIG.items
        }

        const wrapper = shallow(<HeaderMenu {...props}/>);
        const length = wrapper.find('.nav-item .nav-link').length;
        expect(length).toBeGreaterThan(0);
    });

    it('Should handle item click', () => {
        let toBeUpdated = false;
        const props = {
            items: CONFIG.items,
            isOpen: true,
            onItemClick: () => { toBeUpdated = true }
        }

        const wrapper = shallow(<HeaderMenu {...props}/>);
        const linkWrapper = wrapper.find('.nav-item .nav-link').first();
        expect(linkWrapper).not.toBeNull();
        linkWrapper.simulate('click');
        expect(toBeUpdated).toBeTruthy();
    });
});
