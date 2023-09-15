import { parseCookies } from 'nookies';

export default function useToken() {
  const { userToken } = parseCookies();
  return userToken;
}
