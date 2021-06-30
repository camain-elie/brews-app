import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SearchBrew from './SearchBrew';

describe('<SearchBrew />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<SearchBrew />);
    });
})