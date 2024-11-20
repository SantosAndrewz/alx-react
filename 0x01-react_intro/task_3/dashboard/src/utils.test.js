// imports functions for testing
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('Tests for utility functions', () => {
    test('getFullYear returns the currect year', () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });

    test('getFooterCopy returns "Holberton School" when isIndex is true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('getFooterCopy returns "Holberton School main dashboard" when isIndex is false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    test('getLatestNotification returns the latest notification', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});