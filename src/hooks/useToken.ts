import { parseCookies } from 'nookies';

export default function useToken() {
  const { fromClient } = parseCookies();
  return fromClient;
}
