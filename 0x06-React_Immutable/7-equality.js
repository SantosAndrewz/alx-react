import { is } from 'immutable';

/**
 * Function compares two Immutable.js Maps for equality.
 * @param {Map} map1 - First Immutable Map.
 * @param {Map} map2 - Second Immutable Map.
 * @return {boolean} - True if both Maps are equal, false otherwise.
 */
export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}