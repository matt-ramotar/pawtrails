import createListLookup from '../helpers/createListLookup';

const SET_LISTS = 'lists/SET_LISTS';
const SET_LIST_LOOKUP = 'lists/SET_LIST_LOOKUP';
const CREATE_LIST = 'lists/CREATE_LIST';
const ADD_TO_LIST = 'lists/ADD_TO_LIST';

export const setLists = lists => ({ type: SET_LISTS, lists });
export const setListLookup = lookup => ({ type: SET_LIST_LOOKUP, lookup });

export const createList = ({ userId, name, icon }) => async dispatch => {
  const res = await fetch('/api/lists', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, name, icon }),
  });

  if (res.ok) {
    const lists = await res.json();
    dispatch(setLists(lists));
    dispatch(setListLookup(createListLookup(lists)));
  }
};

export const addToList = (userId, trailId, listId) => async dispatch => {
  const res = await fetch(`/api/lists/${listId}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, trailId }),
  });

  if (res.ok) {
    const lists = await res.json();
    dispatch(setLists(lists));
    dispatch(setListLookup(createListLookup(lists)));
  }
};

export const removeFromList = (userId, trailId, listId) => async dispatch => {
  const res = await fetch(`/api/lists/${listId}/${trailId}`, {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId }),
  });
  if (res.ok) {
    const lists = await res.json();
    dispatch(setLists(lists));
    dispatch(setListLookup(createListLookup(lists)));
  }
};

export const loadLists = userId => async dispatch => {
  const res = await fetch(`/api/users/${userId}/lists`);
  if (res.ok) {
    const lists = await res.json();
    dispatch(setLists(lists));
    dispatch(setListLookup(createListLookup(lists)));
  }
};

export default function listsReducer(state = {}, action) {
  switch (action.type) {
    case SET_LISTS:
      return { ...state, lists: action.lists };
    case SET_LIST_LOOKUP:
      return { ...state, lookup: action.lookup };
    default:
      return state;
  }
}
