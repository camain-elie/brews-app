import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { howLongAgo } from './Helpers';

describe('howLongAgo', () => {
    it('works for today', () => {
        let date = new Date();
        expect(howLongAgo(date)).to.equal('Today');
    });

    it('works for past dates', () => {
        let date = new Date();
        
        date.setDate(date.getDate() -1);
        expect(howLongAgo(date)).to.equal('Yesterday');

        date.setDate(date.getDate() - 3);
        expect(howLongAgo(date)).to.equal('4 days ago');

        date.setDate(date.getDate() - 3);
        expect(howLongAgo(date)).to.equal('1 week ago');

        date.setDate(date.getDate() - 14);
        expect(howLongAgo(date)).to.equal('3 weeks ago');

        date.setDate(date.getDate() - 10);
        expect(howLongAgo(date)).to.equal('1 month ago');

        date.setDate(date.getDate() - 210);
        expect(howLongAgo(date)).to.equal('8 months ago');

        date.setDate(date.getDate() - 125);
        expect(howLongAgo(date)).to.equal('1 year ago');

        date.setDate(date.getDate() - 1461);
        expect(howLongAgo(date)).to.equal('5 years ago');

        date.setDate(date.getDate() - 34698);
        expect(howLongAgo(date)).to.equal('100 years ago');
    });

    it('works for dates in the future', () => {
        let date = new Date();
        
        date.setDate(date.getDate() + 1);
        expect(howLongAgo(date)).to.equal('Tomorrow');

        date.setDate(date.getDate() + 3);
        expect(howLongAgo(date)).to.equal('in 4 days');

        date.setDate(date.getDate() + 3);
        expect(howLongAgo(date)).to.equal('in 1 week');

        date.setDate(date.getDate() + 14);
        expect(howLongAgo(date)).to.equal('in 3 weeks');

        date.setDate(date.getDate() + 10);
        expect(howLongAgo(date)).to.equal('in 1 month');

        date.setDate(date.getDate() + 210);
        expect(howLongAgo(date)).to.equal('in 8 months');

        date.setDate(date.getDate() + 125);
        expect(howLongAgo(date)).to.equal('in 1 year');

        date.setDate(date.getDate() + 1461);
        expect(howLongAgo(date)).to.equal('in 5 years');

        date.setDate(date.getDate() + 34698);
        expect(howLongAgo(date)).to.equal('in 100 years');
    });
    
    it('works for invalid dates', () => {
        let date = 'not a date';
        expect(howLongAgo(date)).to.equal('Invalid date');
    });
});