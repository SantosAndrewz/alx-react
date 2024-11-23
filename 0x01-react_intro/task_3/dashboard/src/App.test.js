import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App rendering Tests', () => {
    test('App renders without crashing', () => {
        const app_wrapper = shallow(<App />);
        expect(app_wrapper.exists()).toBe(true);
    });

    test('App renders a div with class App-header', () => {
        const app_wrapper = shallow(<App />);
        expect(app_wrapper.find('.App-header').length).toBe(1);
    });

    test('App renders a div with class App-body', () => {
        const app_wrapper = shallow(<App />);
        expect(app_wrapper.find('.App-body').length).toBe(1);
    });

    test('App renders a div with class App-footer', () => {
        const app_wrapper = shallow(<App />);
        expect(app_wrapper.find('.App-footer').length).toBe(1);
    });
});