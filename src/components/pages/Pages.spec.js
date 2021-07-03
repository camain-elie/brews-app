import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Pages from './Pages';

describe('<Pages />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Pages />);
    });

    it('renders nothing when there is no need for multiple pages', () => {
        let wrapper = shallow(<Pages totalPages={0} />);
        expect(wrapper.type()).to.equal(null);

        wrapper = shallow(<Pages totalPages={1} />);
        expect(wrapper.type()).to.equal(null);
    })


    it('works with uncoherent parameters', () => {
        //let wrapper = shallow(<Pages totalPages={5} currentPage={8} />);
        //wrapper = shallow(<Pages totalPages={5} currentPage={-8} />);
    })

    it('works with coherent parameters', () => {

    });
});