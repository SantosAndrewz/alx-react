import { List, Map } from 'immutable';
/**
 * Script provides 2 functions from Immutable.js that combine lists or arrays immutably.
 */

export const concatElements = (page1, page2) => List(page1).concat(List(page2));

export const mergeElements = (page1, page2) => Map(page1).concat(Map(page2));
