import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SearchBrew from './SearchBrew';
import Search from '../search/Search';
import Options from '../options/Options';

describe('<SearchBrew />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<SearchBrew />);
    });

    it('updates breweryName in state when a search is submitted', () => {
        const wrapper = shallow(<SearchBrew />);
        const search = wrapper.find(Search).dive();
        //const spy = jest.spyOn(wrapper.instance(), 'handleSearch');

        expect(wrapper.state().name).to.be.undefined()

        const spy = sinon.spy(wrapper.instance(), 'handleSearch');

        search.find('input').simulate('change', { target: { value: 'brewery' } });
        search.find('form').simulate('submit');

        wrapper.instance().handleSearch();

        expect(search.find('input').prop('value')).to.equal('brewery');

        //expect(spy).to.have.been.called();


        wrapper.instance().handleSearch.restore()

        /*const instance = wrapper.instance();
        sinon.spy(instance, 'handleSearch');
        //instance.handleSearch({}, 'brewery')

        //const handleSearch = sinon.spy(wrapper.instance(), "handleSearch");
        //instance.handleSearch({}, 'brewery')
        wrapper.update();
        expect(instance.handleSearch).to.have.been.called();
        wrapper.update();
        instance.handleSearch.restore();

        search.find('input').simulate('change', { target: { value: 'brewery' } });
        search.find('form').simulate('submit');
        expect(wrapper.state().name).to.equal('brewery');*/
    });

    it('updates breweryType in state when type is changed in Options', () => {
        const wrapper = shallow(<SearchBrew />);
        const options = wrapper.find(Options).dive();

        
    });
    
    it('updates the location in state when location is changed in Options', () => {

    });
    
    it('get user position and updates it in state when click on button', () => {

    });
    
    it('', () => {

    });
    
    it('', () => {

    });
});