const CREATE_LIST = 'lists/CREATE_LIST';

export const createList = name => async dispatch => {
  const response = await fetch('/api/lists/new', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(name),
  });
  console.log(response);
};
