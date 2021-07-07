import React from 'react';
import { shallow, render, mount } from 'enzyme';
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
        const handleLocationChange = sinon.spy();
        const wrapper =
            shallow(<Options handleLocation={handleLocationChange} />)

        const radioTab = wrapper.find('.options__radio').children();
        radioTab.forEach((div, index) =>{
            const input = div.childAt(0);
            input.simulate('change',
                { target: { checked: !input.prop('checked') }});
            radioTab[index] = input;
        })
        expect(radioTab).to.have.lengthOf(4);
        expect(handleLocationChange).to.have.been.called.exactly(4);
    });
    
    it('retrieve user position when position button is clicked', () => {
        const handlePositionClick = sinon.spy();
        const wrapper = shallow(<Options handlePositionClick={handlePositionClick} position={false} />);

        expect(wrapper.find('options__position--active')).to.have.lengthOf(0);
        wrapper.find('.options__position').simulate('click');
        wrapper.setProps({ position: true });

        expect(handlePositionClick).to.have.been.called();
        expect(wrapper.find('.options__position--active')).to.have.lengthOf(1);
    });
});