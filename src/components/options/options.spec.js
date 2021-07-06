import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Options from './Options';

describe('<Options />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Options />);
    });

    it('changes brewery type when selected a type option', () => {
        const handleTypeChange = sinon.spy();
        const wrapper = 
            shallow(<Options handleTypeChange={handleTypeChange} />);

        wrapper
            .find('select')
            .simulate('change', { target: { value: 'micro' } });
        expect(handleTypeChange).to.have.been.called();
        expect(wrapper.state().breweryType).to.equal('micro');
    });
    
    it('changes location with input', () => {
        const handleLocationChange = sinon.spy();
        const wrapper = 
            shallow(<Options handleLocation={handleLocationChange} />);

        wrapper
            .find('input[type="text"]')
            .simulate('change', { target: { value: 'Los Angeles' } });

        expect(handleLocationChange).to.have.been.called();
        expect(wrapper.state().location).to.equal('Los Angeles');
        expect(wrapper.findWhere( node => 
            node.prop('name') === "location"
            && node.prop('value') === "Los Angeles"
        ).prop('checked')).to.be.true();
    });
    
    it('changes location with radio button', () => {

    });
    
    it('retrieve user position when position button is clicked', () => {

    });
});