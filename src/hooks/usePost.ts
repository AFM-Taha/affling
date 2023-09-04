import baseURL from '@/assets/baseURL';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function usePost<T>(urlEndpoint: string) {
  return useMutation<unknown, Error, T>({
    mutationFn: (data) => axios.post<T>(`${baseURL}/${urlEndpoint}`, data),
    onSuccess: () => toast.success('Successfully registered!'),
    onError: (error) => toast.error(error.message || 'Something went wrong!'),
  });
}
