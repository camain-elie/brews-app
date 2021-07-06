import React from 'react';
//import reactDOM from 'react-dom';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Breweries from './Breweries';

describe('<Breweries />', () => {
    it('renders without crashing', () => {
        //const div = document.createElement('div');
        //reactDOM.render(<Breweries />, div);

        const wrapper = shallow(<Breweries />);
        const wrapper2 = render(<Breweries />);
        const wrapper3 = mount(<Breweries />);

        //expect(wrapper.state().breweryList).to.have.lengthOf(50);
    });

    it('get results with a name prop', () => {
        const wrapper = shallow(<Breweries name={'beer'} />)

        
    });

    it('get results with a location or position prop', () => {
        const wrapper = shallow(<Breweries location='new york' />)
    });

    it('get results with multiples parameters', () => {
        const wrapper = shallow(<Breweries location='new york' name='beer' type='micro' />);
    });

    it('display a message if no results are found', () => {

    });

    it('changes the results displayed when the page is manually changed', () => {

    });

    it('changes the results when props are changed', () => {
        const wrapper = render(<Breweries name={'beer'} />);

        //expect(wrapper.state().breweryName).to.equal('beer');
        //expect(wrapper.state().breweryList).to.have.lengthOf(0);

        //wrapper.setProps({ name: 'brewery' }, () => {
            
        //});
        //expect(wrapper.state().breweryName).to.equal('brewery');
        //expect(wrapper.state().breweryList).to.have.lengthOf(0);
    });
});

describe('getBrews', () => {

});