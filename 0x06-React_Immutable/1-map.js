import { Map } from "immutable";

/**
 * Script converts an object into an immutable Map.
 * @param {object} object - The object to be converted.
 * @return {Map} - The immutable Map formed.
 */

export default function getImmutableObject(object) {
    if (typeof object !== 'object' || object === null) {
        throw new TypeError('Input must be a non-null object');
    }
    return Map(object);
}