import React from 'react';
import { shallow } from 'enzyme'
import LoadingPage from '../../components/LoadingPage'

test('should test the loading component', () => {
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot();
})