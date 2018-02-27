import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Enzyme from 'enzyme';
import Header from '../../components/header/header'
import Ionicon from 'react-ionicons'

Enzyme.configure({ adapter: new Adapter() });

chai.use(chaiEnzyme())

describe('<Header />', () => {

})
