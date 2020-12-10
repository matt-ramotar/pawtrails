const CREATE_LIST = 'lists/CREATE_LIST';
const SAVE_TO_LIST = 'lists/SAVE_TO_LIST';

export const createList = ({ userId, listName }) => async dispatch => {
  const response = await fetch('/api/lists', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, listName }),
  });
  console.log(response);
};

export const saveToList = ({ userId, trailId, listName }) => async dispatch => {
  const response = await fetch(`/api/lists/${listName}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, trailId }),
  });
  console.log(response);
};
