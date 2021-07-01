import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Loading from './Loading';

describe('<Loading />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Loading />);
    });
});