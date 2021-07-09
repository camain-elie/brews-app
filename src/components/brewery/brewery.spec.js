import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import { BrowserRouter } from 'react-router-dom';

import Brewery from './Brewery';

describe('<Brewery />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Brewery />);

    });

    it('renders without crashing', () => {
        const wr = mount(
            <BrowserRouter >
                <Brewery />
            </BrowserRouter>);

        const wrap = render(
            <BrowserRouter history='/'>
                <Brewery />
            </BrowserRouter>);

    });

    it('', () => {

    });

    it('', () => {

    });
    
    it('', () => {

    });
    
    it('', () => {

    });
});
