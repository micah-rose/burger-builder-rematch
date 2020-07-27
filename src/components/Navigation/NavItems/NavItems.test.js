import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavItems from '../NavItems/NavItems';
import React from 'react';
import NavItem from '../NavItems/NavItem';

configure({
    adapter: new Adapter()
});

describe('<NavItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavItems />);
    })

    it('should render two nav elements if not authenticated', () => {
        wrapper = shallow(<NavItems />);
        expect(wrapper.find(NavItem)).toHaveLength(2);
    });

    it('should render two nav elements if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavItem)).toHaveLength(3);
    });
} );