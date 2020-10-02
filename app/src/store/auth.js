import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';
const REMOVE_USER = 'pokedex/authentication/REMOVE_USER';

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
      dispatch(setUser(user));
    } else {
      console.log(res);
    }
    return res;
  };
};

export const signup = (
  firstName,
  lastName,
  username,
  email,
  password,
  confirmPassword
) => async dispatch => {
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
      // const { data } = payloadObj;
      return payloadObj;
    } catch (e) {
      Cookies.remove('token');
    }
  }
  return {};
}

export default function authReducer(state = loadUser(), action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
}
