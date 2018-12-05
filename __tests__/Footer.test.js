import React from 'react';
import Footer from '../src/client/components/common/Footer';
import { shallow } from 'enzyme';

describe('Footer tests', () => {
    it('Should render', () => {
        const wrapper = shallow(<Footer/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Should have collapse state set null', () => {
        const wrapper = shallow(<Footer/>);
        const collapseState = wrapper.state('collapse');
        expect(collapseState).toBeUndefined();
    });

    it('Should update collapse state accordingly toggle argument', () => {
        const wrapper = shallow(<Footer/>);
        const instance = wrapper.instance();
        instance.toggle(0);
        const collapseState = wrapper.state('collapse');
        expect(collapseState).toEqual(0);
    });

    it('Should update collapse state to null if toggle argument is equal to collapse state', () => {
        const wrapper = shallow(<Footer/>);
        const instance = wrapper.instance();
        instance.setState({ collapse: 0 })
        instance.toggle(0);
        const collapseState = wrapper.state('collapse');
        expect(collapseState).toBeNull();
    });

    it('Should set collapse state to null if callapse has been invoked', () => {
        const wrapper = shallow(<Footer/>);
        const instance = wrapper.instance();
        instance.setState({ collapse: 0 })
        instance.collapse();
        const collapseState = wrapper.state('collapse');
        expect(collapseState).toBeNull();
    })
})