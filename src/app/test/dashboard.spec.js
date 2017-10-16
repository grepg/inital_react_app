import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../containers/Dashboard.jsx';

describe('Dashboard', () => {
  it('should be instance of Dashboard', () => {
    const wrapper = shallow(<Dashboard />);
    const inst = wrapper.instance();
    expect(inst).to.be.instanceOf(Dashboard);
  });
});
