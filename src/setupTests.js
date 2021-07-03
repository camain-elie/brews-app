import chai from 'chai';
import createChaiEnzyme from 'chai-enzyme';
import dirtyChai from 'dirty-chai';
import createChaiJestDiff from 'chai-jest-diff';
import { configure  as configureEnzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';

chai
    .use(dirtyChai)
    .use(createChaiJestDiff())
    .use(createChaiEnzyme())
    .use(sinonChai);

configureEnzyme({ adapter: new Adapter() });