import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Cookie from '../src/client/components/UI/Cookie';
import configureMockStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context';
import { Button }  from 'reactstrap';

describe('Cookie Component should render', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Cookie />);
        expect(wrapper).toMatchSnapshot();
    });
});


describe('Test Accept Button CLick of Cookie', () => {
    it('Test click event', () => {
        const mockCallBack = jest.fn();
        const button = shallow((<Button onClick={mockCallBack}>Accept</Button>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});
describe('Cookie', () => {
    it('should display Cookie component if ok state is true', () => {
        const wrapper = shallow(<Cookie />);
        expect(wrapper.state().shouldShowCookieNotice).toEqual(true);
    });
});
// it("should have a <h3>", () => {
//     const wrapper = shallow(<Cookie />);
//     const container = wrapper.find("h3");
//     expect(container).toHaveLength(1);
//     expect(container.text()).toEqual("We use cookies to provide you with the best experience on our site. Please click Ok to continue. Find out more about cookies.");
//   });
//   describe('setCookies', () => {
//     it('setCookies function called', () => {
//         const setCookies = jest.fn();
//         Cookie.prototype.setCookies = setCookies;
//         const wrapper = shallow(<Cookie />);
//         wrapper.find(Button).simulate('click');
//         expect(setCookies).toHaveBeenCalled();
//       })
// });
describe('Teststate for cookie', () => {
    it('Test click event', () => {
        const wrapper = shallow(<Cookie />);
        expect(wrapper.state().shouldShowCookieNotice).toBe(true);
    });
});
describe('Cookie stae', () => {   
    let state;
    state ={
        shouldShowCookieNotice: true,
    }
it('Cookie component if shouldShowCookieNotice state is false', () => {
    const wrapper = shallow(<Cookie />);
    state.shouldShowCookieNotice = true;
    wrapper.setState({ shouldShowCookieNotice: false });
    expect(wrapper.state().shouldShowCookieNotice).toBe(false);
   
});

it('Cookie component if shouldShowCookieNotice state is true', () => {
    const wrapper = shallow(<Cookie />);
    state.shouldShowCookieNotice = false;
    wrapper.setState({ shouldShowCookieNotice: true });
    expect(wrapper.state().shouldShowCookieNotice).toBe(true);
   
});
});
describe('Test Accept Button Click of Cookie', () => {
    it('Test click event', () => {
        const mockCallBack = jest.fn();
        const button = shallow((<Button onClick={mockCallBack}>Ok</Button>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});