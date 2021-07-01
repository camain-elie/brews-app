import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NotFound from './NotFound';

describe('<NotFound />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<NotFound />);
    });
});