import baseURL from '@/assets/baseURL';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function usePost<T>(urlEndpoint: string) {
  return useMutation<unknown, Error, T>({
    mutationFn: (data) => axios.post<T>(`${baseURL}/${urlEndpoint}`, data),
  });
}
