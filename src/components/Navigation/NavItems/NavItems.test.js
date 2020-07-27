import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavItems from '../NavItems/NavItems';
import React from 'react';
import NavItem from '../NavItems/NavItem';

configure({
    adapter: new Adapter()
});

describe('<NavItems />', () => {
    it('should render two nav elements if not authenticated', () => {
        const wrapper = shallow(<NavItems />);
        expect(wrapper.find(NavItem)).toHaveLength(2);
    });
} );