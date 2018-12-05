import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from '../src/client/components/common/Header';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router'
import Home from '../src/client/containers/Home';
import { Button ,NavItem,Link,NavbarToggler,Collapse} from 'reactstrap';
import { MemoryRouter } from 'react-router';


describe('Header', () => {
    it('should render', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Should have isOpen state set to undefined', () => {
        const wrapper = shallow(<Header/>);
        const openState = wrapper.state('isOpen');
        expect(openState).toBeUndefined();
    });

    it('Should have opposite value once toggled', () => {
        const wrapper = shallow(<Header/>);
        const before = wrapper.state('isOpen');
        const instance = wrapper.instance();
        instance.toggle();
        const after = wrapper.state('isOpen');
        expect(after).toBe(!before);
    });
});


// describe('Test Login Button Click of Header', () => {
//     it('Test click event', () => {
//         const mockCallBack = jest.fn();
//         const button = shallow((<Button onClick={mockCallBack}>Login/Register</Button>));
//         button.find('button').simulate('click');
//         expect(mockCallBack.mock.calls.length).toEqual(1);
//     });
// });

// describe('Test NavToggler Button Click of Header', () => {
//     it('Test click event', () => {
//         const mockCallBack = jest.fn();
//         const button = shallow(<NavbarToggler onClick={mockCallBack}/>)
//         button.find('button').simulate('click');
//         expect(mockCallBack.mock.calls.length).toEqual(1);
//     });
// });


// describe('Test Login Button Click of Header', () => {
//     it('Test click event', () => {
//         const mockCallBack = jest.fn();
//         const button = shallow((<Button onClick={mockCallBack}>Login/Register</Button>));
//         button.find('button').simulate('click');
//         expect(mockCallBack.mock.calls.length).toEqual(1);
//     });
// });

// describe('Toggle function is called', () => {
// it('We can check if the toggle function is called', () => {
//     const mockPlaySoundFile = jest.fn();
//     jest.mock('../src/client/components/common/Header', () => {
//       return jest.fn().mockImplementation(() => {
//         return {toggle: mockPlaySoundFile};
//       });
//     });
//   });
// });

// describe('GetNavLinks function is called', () => {
//     it('We can check if the toggle function is called', () => {
//         const mockPlaySoundFile = jest.fn();
//         jest.mock('../src/client/components/common/Header', () => {
//           return jest.fn().mockImplementation(() => {
//             return {togetNavLinks: mockPlaySoundFile};
//           });
//         });
//       });
//     });
//     describe('HandleLoginClick function is called', () => {
//         it('We can check if the toggle function is called', () => {
//             const mockPlaySoundFile = jest.fn();
//             jest.mock('../src/client/components/common/Header', () => {
//               return jest.fn().mockImplementation(() => {
//                 return {handleLoginClick: mockPlaySoundFile};
//               });
//             });
//           });
//         });
          
  
// describe('Nav Link Header', () => {   
//     let state;
//     state ={
//         isOpen: true,
//     }
// it('should display Navlinks in the Header component if isOpen state is true', () => {
//     const wrapper = shallow(<Header />);
//     state.isOpen = true;
//     wrapper.setState({ isOpen: false });
//     expect(wrapper.state().isOpen).toBe(false);
   
// });

// it('should display Navlinks in the Header component if isOpen state is false', () => {
//     const wrapper = shallow(<Header />);
//     state.isOpen = false;
//     wrapper.setState({ isOpen: true });
//     expect(wrapper.state().isOpen).toBe(true);
   
// });
// });
// describe('Nav Link Header', () => {
//     it('5 links', () => {
//         const wrapper = shallow(<Header />);
//         expect(wrapper.find('Link').length).toEqual(4);
       
//     });
//     });
//     describe('Get nav link', () => {
//     it('getNavLink function called', () => {
//         const getNavLinks = jest.fn();
//         Header.prototype.getNavLinks = getNavLinks;
//         const wrapper = shallow(<Header />);
//         //wrapper.find(Button).simulate('click');
//         expect(getNavLinks).toHaveBeenCalled();
//       })
//     });
//     describe('handle login link', () => {
//       it('handleLoginClick function called', () => {
//         const handleLoginClick = jest.fn();
//         Header.prototype.handleLoginClick = handleLoginClick;
//         const wrapper = shallow(<Header />);
//         wrapper.find(Button).simulate('click');
//         expect(handleLoginClick).toHaveBeenCalled();
//       })
//     });
//     describe('Test NavToggler Button Click of Header', () => {
//         it('Test click event', () => {
//             const handleLoginClick = jest.fn();
//             Header.prototype.handleLoginClick = handleLoginClick;
//             const wrapper = shallow(<Header />);
//             wrapper.find(Button).simulate('click');
//         expect(wrapper.state('isOpen')).toBe(false);
//         });
//     });

//     describe('NavItem onClicking', () => {
//         it('Test click event', () => {
//             const mockCallBack = jest.fn();
//             const button = shallow(<NavItem onClick={mockCallBack}/>);
//             expect(mockCallBack.mock.calls.length).toEqual(0);
//         });
//     });
    

//     describe('Images of hamburger', () => {
//         it('img', () => {
//             const wrapper = shallow(<Header />);
//             expect(wrapper.find('img')).toHaveLength(2);
           
//         });
//     });
//     describe('NavItem classes', () => {
//         it('Test click event', () => { 
//             const header = shallow(<Header/>)     
//             const wrapper = shallow(<NavbarToggler/>);
//             wrapper.find('button').simulate('click');
//             expect(header.state().isOpen).toEqual(false);
//             expect(header.find('NavItems')).toHaveLength(0);
//             expect(header.find('img')).toHaveLength(2);
//         });
//     });
  
//      describe('Array push', () => {
//             it('getNavLink function called', () => {
//                 const getNavLinks = jest.fn();
//                 Header.prototype.getNavLinks = getNavLinks;
//                 const wrapper = shallow(<Header />);
//                 //wrapper.find(Button).simulate('click');
//                 expect(getNavLinks).toHaveBeenCalled();
//                 expect(getNavLinks).toHaveLength(0);
//               })
//     });


 
    

    