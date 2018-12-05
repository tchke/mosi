import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MedicineSpecModal from '../../../../src/client/modules/medicineSearch/components/MedicineSpecModal';

describe('Medicine details modal', () => {
    it('should render', () => {
        const props = { }
        const wrapper = shallow(<MedicineSpecModal {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
})