import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Pages from './Pages';

describe('<Pages />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Pages />);
    });
});