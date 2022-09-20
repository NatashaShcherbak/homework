import { v4 } from "uuid";

import { setItem, editItem, setSearch } from "./slice";

export const handleAdd = (description) => (dispatch, getState) => {
    if(description !== '') {
        const items = getState().todo.items;
        const newItem = [{id: v4(), description: description, checked: false}, ...items];
        dispatch(setItem(newItem));
        localStorage.setItem('items', JSON.stringify(newItem));
    }
};

export const handleUpdate = (id, description, checked) => (dispatch, getState) => {
    const items = getState().todo.items;
    const updateItems = items.map(item => {
        if (item.id === id) {
            return { ...item, description, checked };
        }
        return item;
    });
    dispatch(setItem(updateItems));
    localStorage.setItem('items', JSON.stringify(updateItems));
    dispatch(editItem(null));
};

export const handleEdit = (id) => (dispatch) => dispatch(editItem(id));

export const handleCancel = (id, description) => (dispatch, getState) => {
    const items = getState().todo.items;
    const cancelUpdateItems = items.map(item => {
        if (item.id === id) {
            return { ...item, description };
        }
        return item;
    });
    dispatch(setItem(cancelUpdateItems));
    localStorage.setItem('items', JSON.stringify(cancelUpdateItems));
    dispatch(editItem(null));
};

export const handleDelete = (id) => (dispatch, getState) => {
    const items = getState().todo.items;
    const deleteItem = items.filter(item => item.id !== id);
    dispatch(setItem(deleteItem));
    localStorage.setItem('items', JSON.stringify(deleteItem));
};

export const handleAllDelete = (array) => (dispatch, getState) => {
    const items = getState().todo.items;
    const newItems = items.filter(item => !array.includes(item));
    dispatch(setItem(newItems));
    localStorage.setItem('items', JSON.stringify(newItems));
    dispatch(setSearch(undefined));
};

