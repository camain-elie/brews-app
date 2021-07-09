import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SearchBrew from './SearchBrew';
import Search from '../search/Search';
import Options from '../options/Options';

describe('<SearchBrew />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<SearchBrew />);
    });

    it('calls handleSearch and updates the state when a search is submitted', () => {
        const wrapper = shallow(<SearchBrew />);
        const search = wrapper.find(Search).dive();

        expect(wrapper.state().breweryName).to.equal('');

        search.find('input').simulate('change', { target: { value: 'brewery' } });
        search.find('form').simulate('submit');

        expect(wrapper.state().breweryName).to.equal('brewery');
    });

    it('updates breweryType in state when type is changed in Options', () => {
        const wrapper = shallow(<SearchBrew />);
        const options = wrapper.find(Options).dive();

        expect(wrapper.state().breweryType).to.equal("");

        options.find('select').simulate('change', { target: { value: 'micro' } });

        expect(wrapper.state().breweryType).to.equal('micro');
    });
    
    it('updates the location in state when location is changed in Options', () => {
        const wrapper = shallow(<SearchBrew />);
        const options = wrapper.find(Options).dive();

        expect(wrapper.state().location).to.equal('');

        options.find('.options__input input').simulate('change', { target: { value: 'London' } });
        expect(wrapper.state().location).to.equal('London');

        options.find('.options__radio').childAt(2).childAt(0).simulate('change',
            {  
                target:
                    {
                        value: 'New York',
                        checked: true
                    } 
            });
        expect(wrapper.state().location).to.equal('New York');
    });
    
    it('gets user position and updates it in state when click on button', () => {
        const wrapper = shallow(<SearchBrew />);
        const options = wrapper.find(Options).dive();

        expect(wrapper.state().position).to.equal('');
        expect(options.find('.options__position--active')).to.have.lengthOf(0);

        options.find('.options__position').simulate('click');
        expect(wrapper.state().position).to.equal('36,-120');
        expect(wrapper.find(Options).prop('position')).to.equal('36,-120');
        options.setProps({ position: '36,-120' })
        expect(options.find('.options__position--active')).to.have.lengthOf(1);

        options.find('.options__position--active').simulate('click');
        expect(wrapper.state().position).to.equal('');
        options.setProps({ position: '' })
        expect(options.find('.options__position--active')).to.have.lengthOf(0);
    });
    
    it('tests with true user pos func', () => {

        let mockGeolocation = {
            getCurrentPosition: jest.fn()
              .mockImplementationOnce((success) => Promise.resolve(success({
                coords: {
                  latitude: 100,
                  longitude: -100
                }
              })))
          };
          global.navigator.geolocation = mockGeolocation;

        let wrapper = shallow(<SearchBrew />);
        let options = wrapper.find(Options).dive();

        expect(wrapper.state().position).to.equal('');
        expect(options.find('.options__position--active')).to.have.lengthOf(0);

        options.find('.options__position').simulate('click');
        expect(wrapper.state().position).to.equal('100,-100');
    });
});