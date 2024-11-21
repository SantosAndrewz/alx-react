import { Map } from "immutable";

/**
 * Script converts an object into an immutable Map.
 * @param {object} object - The object to be converted.
 * @return {Map} - The immutable Map formed.
 */

export default function getImmutableObject(object) {
    return Map(object);
}