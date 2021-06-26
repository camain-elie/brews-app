import React from 'react';
import ReactDOM from 'react-dom';
import Breweries from './Breweries';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Breweries />, div);
});