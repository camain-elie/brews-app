import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Breweries from './Breweries';

describe('<Breweries />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Breweries />);
    });
});