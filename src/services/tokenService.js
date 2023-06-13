import jwt_decode from 'jwt-decode'

function setToken(token) {
  localStorage.setItem('token', token)
}

function getToken() {
  let token = localStorage.getItem('token');
  // console.log('Token:', token);
  if (token) {
    try {
      const payload = jwt_decode(token);
      if (payload.exp < Date.now() / 1000) {
        removeToken();
        token = null;
      }
    } catch (error) {
      console.log('Error decoding token:', error);
      removeToken();
      token = null;
    }
  } else {
    removeToken();
  }
  return token;
}

function getUserFromToken() {
  const token = getToken()
  return token ? jwt_decode(token).user : null
}

function removeToken() {
  localStorage.removeItem('token')
}

export { setToken, getToken, getUserFromToken, removeToken }