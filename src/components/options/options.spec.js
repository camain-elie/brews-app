import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Options from './Options';

describe('<Options />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Options />);
    });
});