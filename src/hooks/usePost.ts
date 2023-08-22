import baseURL from '@/assets/baseURL';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function usePost(urlEndpoint: string) {
  return useMutation({
    mutationFn: (data) => axios.post(`${baseURL}/${urlEndpoint}`, data),
  });
}
