import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';

export const setUser = user => {
  return {
    type: SET_USER,
    user,
  };
};

export const login = (username, password) => {
  return async dispatch => {
    const res = await fetch('/api/session', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        // anything other than get method needs XSRF-TOKEN header
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
      },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      const data = await res.json();
      dispatch(setUser(data.user));
    }
    return res;
  };
};

function loadUser() {
  const authToken = Cookies.get('token');
  if (authToken) {
    try {
      const payload = authToken.split('.')[1];
      const decodedPayload = atob(payload);
      const payloadObj = JSON.parse(decodedPayload);
      const { data } = payloadObj;
      return data;
    } catch (e) {
      Cookies.remove('token');
    }
  }
  return {};
}

window.login = login;

export default function authReducer(state = loadUser(), action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
