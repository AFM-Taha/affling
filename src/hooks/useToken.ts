import Cookies from 'js-cookie';

export default function getToken() {
  const userToken = Cookies.get('userToken');
  return userToken;
}
