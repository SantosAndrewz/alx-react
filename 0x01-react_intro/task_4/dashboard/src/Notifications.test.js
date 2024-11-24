import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications rendering Tests', () => {
    test('Notifications renders without crashing', () => {
        const Notifications_wrapper = shallow(<Notifications />);
        expect(Notifications_wrapper.exists()).toBe(true);
    });

    test('Notifications renders three list items', () => {
        const Notifications_wrapper = shallow(<Notifications />);
        expect(Notifications_wrapper.find('li')).toHaveLength(3);
    });

    test('Notifications renders the text "Here is the list of notifications"', () => {
        const Notifications_wrapper = shallow(<Notifications />);
        expect(Notifications_wrapper.text()).toContain('Here is the list of notifications');
    });

});