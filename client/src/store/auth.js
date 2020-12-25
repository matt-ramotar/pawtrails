import Cookies from 'js-cookie';

const initialState = {
  user: loadUser(),
  isLoggedIn: Boolean(loadUser().id),
  hasAccount: true,
};

const SET_USER = 'auth/SET_USER';
const REMOVE_USER = 'auth/REMOVE_USER';
const SET_ACCOUNT_BOOLEAN = 'auth/SET_ACCOUNT_BOOLEAN';

export const setUser = user => {
  return {
    type: SET_USER,
    user,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const setAccountBoolean = boolean => {
  return {
    type: SET_ACCOUNT_BOOLEAN,
    boolean,
  };
};

export const logout = () => async dispatch => {
  console.log('store');
  const res = await fetch('/api/session', {
    method: 'delete',
  });
  if (res.ok) {
    dispatch(removeUser());
    return true;
  }
  console.log(res);
};

export const login = (username, password) => {
  return async dispatch => {
    const res = await fetch('/api/auth/login', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      const { user } = await res.json();
      dispatch(setUser({ user, isLoggedIn: true, hasAccount: true }));
      return true;
    } else {
      console.log(res);
    }
  };
};

export const signup = (firstName, lastName, email, password, confirmPassword) => async dispatch => {
  console.log(firstName, lastName, email, password, confirmPassword);
  const res = await fetch('/api/auth/signup', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, username: email, email, password, confirmPassword }),
  });

  console.log(res);

  if (res.ok) {
    const { user } = await res.json();
    dispatch(setUser({ user, isLoggedIn: true, hasAccount: true }));
  }
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

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACCOUNT_BOOLEAN:
      return { user: {}, isLoggedIn: false, hasAccount: action.boolean };
    case SET_USER:
      return action.user;
    case REMOVE_USER:
      return { user: {}, isLoggedIn: false, hasAccount: true };
    default:
      return state;
  }
}
