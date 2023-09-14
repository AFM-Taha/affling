import baseURL from '@/assets/baseURL';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function usePost<T>(urlEndpoint: string) {
  return useMutation<unknown, any, T>({
    mutationFn: (data) => axios.post<T>(`${baseURL}/${urlEndpoint}`, data),
    onSuccess: () => toast.success('Successfully registered!'),
    onError: (error) => {
      if (urlEndpoint === 'admin/login')
        return toast.error(error.response.data.message);
      return toast.error(error.message || 'Something went wrong!');
    },
  });
}
