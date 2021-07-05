import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Search from './Search';

describe('<Search />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Search />);
    });

    it('changes its state and display the search content', () => {
        const wrapper = shallow(<Search />);

        wrapper.find('input').simulate('change', { target: { value: 'test change' } });
        expect(wrapper.find('input').props().value).to.equal('test change');
    });

    it('call the function given through props with the input state', () => {
        const search = sinon.spy();
        const wrapper = shallow(<Search handleSearch={search} />);
        
        wrapper.find('input').simulate('change', { target: { value: 'test search' } });
        wrapper.find('form').simulate('submit');
        expect(search).to.have.been.called();
    });
});