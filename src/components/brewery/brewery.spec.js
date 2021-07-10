import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import { BrowserRouter, Route, MemoryRouter } from 'react-router-dom';

import Brewery from './Brewery';

describe('<Brewery />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Brewery />);

    });

    it('works with correct URL parameters', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/brewery/10000"]}>
                <Brewery />
            </MemoryRouter>
        );
        console.log(wrapper.props())
        console.log(wrapper.state)


        const wra = mount(
            <BrowserRouter >
                
                    <Brewery />
              
            </BrowserRouter>
        );


    });

    it('redirects with incorrect URL parameters', () => {
        const wr = mount(
            <BrowserRouter >
                <Route path="/brewery/1000000" >
                    <Brewery />
                </Route>
            </BrowserRouter>
        );
    });
    
    it('', () => {

    });
});
