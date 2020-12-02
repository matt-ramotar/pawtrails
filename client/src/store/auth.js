import Cookies from 'js-cookie';

const initialState = {
  user: loadUser(),
};

const SET_USER = 'auth/SET_USER';
const REMOVE_USER = 'auth/REMOVE_USER';

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
      dispatch(setUser({ user: { loggedIn: true, ...user } }));
      return true;
    } else {
      console.log(res);
    }
  };
};

export const signup = (firstName, lastName, username, email, password, confirmPassword) => async dispatch => {
  const res = await fetch('/api/auth/signup', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, username, email, password, confirmPassword }),
  });

  console.log(res);

  if (res.ok) {
    const { user } = await res.json();
    dispatch(setUser(user));
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
      return { loggedIn: true, ...data };
    } catch (e) {
      Cookies.remove('token');
    }
  }
  return {};
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case REMOVE_USER:
      return { user: { loggedIn: false } };
    default:
      return state;
  }
}
