import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Brewery from './Brewery';

describe('<Brewery />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Brewery />);
    });
});