import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_ITEM, CLEAR_SERVICE_FIELD, CANCEL_EDIT_STATE, BEGIN_EDIT } from './actionTypes';

export function addService(id, name, price) {
  return {type: ADD_SERVICE, payload: {id, name, price}};
}

export function removeService(itemId) {
  return {type: REMOVE_SERVICE, payload: {itemId}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function editService(itemName, itemPrice) {
    return {type: EDIT_ITEM, payload: {itemName, itemPrice}};
}

export function clearForm () {
  return {type: CLEAR_SERVICE_FIELD};
}

export function cancelEditing () {
  return {type: CANCEL_EDIT_STATE};
}

export function beginEdit (id) {
  return {type: BEGIN_EDIT, payload: id};
}
