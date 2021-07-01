import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Search from './Search';

describe('<Search />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Search />);
    });
});