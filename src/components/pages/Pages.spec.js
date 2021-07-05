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

        wrapper = shallow(<Pages totalPages={20} currentPage={20} changeOnePage={onClick} changeToPage={onClick} />);
        expect(wrapper.find('div.pages__number').children()).to.have.lengthOf(3);
        expect(wrapper.find('div.pages').children()).to.have.lengthOf(6);
        expect(wrapper.find('div.pages__number--current p')).to.have.text('20');
        expect(wrapper.find('div.pages__arrow--disabled p')).to.have.text('chevron_right');

        wrapper = shallow(<Pages totalPages={20} currentPage={10} />);
        expect(wrapper.find('div.pages__number').children()).to.have.lengthOf(5);
        expect(wrapper.find('div.pages').children()).to.have.lengthOf(9);
        expect(wrapper.find('div.pages__number--current p')).to.have.text('10');
        expect(wrapper.find('div.pages__arrow--disabled')).to.have.length(0);
    });

    it('change one page with the arrow buttons or multiple pages with the number buttons', () => {
        const onePage = sinon.spy();
        const toPage = sinon.spy();

        const wrapper = shallow(<Pages totalPages={5} currentPage={3} changeOnePage={onePage} changeToPage={toPage} />);
        let button = wrapper.findWhere(node => node.type() === 'p' && node.text() === "chevron_left");
        button.parent().simulate('click');
        expect(onePage).to.have.been.calledWith(-1);

        button = wrapper.findWhere(node => node.type() === 'p' && node.text() === "chevron_right");
        button.parent().simulate('click');
        expect(onePage).to.have.been.calledWith(1);

        button = wrapper.findWhere(node => node.type() === 'p' && node.text() === '5');
        button.parent().simulate('click');
        expect(toPage).to.have.been.called(5);
    });
});