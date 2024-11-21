import { fromJS } from "immutable";

/**
 * Script converts an object into an immutable Map.
 * @param {object} object - The object to be converted.
 * @return {Immutable.Map} - The immutable Map formed.
 */

export default function getImmutableObject(object) {
    return fromJS(object);
}