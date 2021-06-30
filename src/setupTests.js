import chai from 'chai';
import createChaiEnzyme from 'chai-enzyme';
import dirtyChai from 'dirty-chai';
import createChaiJestDiff from 'chai-jest-diff';
import { configure  as configureEnzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

chai
    .use(dirtyChai)
    .use(createChaiJestDiff())
    .use(createChaiEnzyme());

configureEnzyme({ adapter: new Adapter() });