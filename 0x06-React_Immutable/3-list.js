import { List } from 'immutable';
/**
 * Scripts converts an array into an Immutable List.
 * @param {Array} array - The array to be converted into an Immutable List.
 * @return {List} - The Immutable list formed.
 */
export function getListObject(array) {
    return List(array);
}

/**
 * Function adds a string Element to an existing Immutable list.
 * @param {List} list - The immutable list to which the element is to be added.
 * @param {string} element - The string element to be added to the list.
 * @return {List} - New Immutable list formed.
 */
export function addElementToList(list, element) {
    return list.push(element);
}