import { Map } from 'immutable';

/**
 * Script for deeply merging 2 objects using Map and mergeDeep from Immutable.js
 */

export default function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
}