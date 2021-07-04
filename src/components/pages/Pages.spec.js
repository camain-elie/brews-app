import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Pages from './Pages';

describe('<Pages />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Pages />);
    });

    it('renders nothing when there is no need for multiple pages', () => {
        let wrapper = shallow(<Pages totalPages={0} />);
        expect(wrapper.type()).to.equal(null);

        wrapper = shallow(<Pages totalPages={1} />);
        expect(wrapper.type()).to.equal(null);
    })


    it('works with uncoherent parameters', () => {
        let wrapper = shallow(<Pages totalPages={5} currentPage={8} />);
        expect(wrapper.find('div.pages__number--current p')).to.have.text('5');

        wrapper = shallow(<Pages totalPages={5} currentPage={-8} />);
        expect(wrapper.find('div.pages__number--current')).to.have.text('1');

        wrapper = shallow(<Pages totalPages={-5} currentPage={-8} />);
        expect(wrapper.type()).to.be.null();
    })

    it('works with coherent parameters', () => {
        const onClick = sinon.spy();

        let wrapper = shallow(<Pages totalPages={5} currentPage={1} changeOnePage={onClick} changeToPage={onClick} />);
        expect(wrapper.find('div.pages__number').children()).to.have.lengthOf(3);
        expect(wrapper.find('div.pages').children()).to.have.lengthOf(6);
        expect(wrapper.find('div.pages__number--current p')).to.have.text('1');
        expect(wrapper.find('div.pages__arrow--disabled p')).to.have.text('chevron_left');
        //expect((wrapper.find('div.pages').children())[1]).to.have.className('pages__number--current')

        wrapper = shallow(<Pages totalPages={20} currentPage={20} changeOnePage={onClick} changeToPage={onClick} />);
        expect(wrapper.find('div.pages__number').children()).to.have.lengthOf(3);
        expect(wrapper.find('div.pages').children()).to.have.lengthOf(6);
        expect(wrapper.find('div.pages__number--current p')).to.have.text('20');
        expect(wrapper.find('div.pages__arrow--disabled p')).to.have.text('chevron_right');
        const action = wrapper.findWhere( node => {
            return (node.type() === 'p' && node.text() === "chevron_left");
        });
        action.simulate('click');
        expect(onClick).to.have.property('callCount', 1)

        wrapper = shallow(<Pages totalPages={20} currentPage={10} />);
        expect(wrapper.find('div.pages__number').children()).to.have.lengthOf(5);
        expect(wrapper.find('div.pages').children()).to.have.lengthOf(9);
        expect(wrapper.find('div.pages__number--current p')).to.have.text('10');
        expect(wrapper.find('div.pages__arrow--disabled')).to.have.length(0);
    });
});