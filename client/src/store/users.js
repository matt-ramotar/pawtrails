const GET_USER = 'users/GET_USER';

export const getUser = async userId => {
  const res = await fetch(`/api/users/user/${userId}`);

  if (res.ok) {
    const user = await res.json();
    return user;
  }
};
