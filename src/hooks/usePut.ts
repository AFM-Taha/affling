import baseURL from '@/assets/baseURL';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function usePut<T>(urlEndpoint: string) {
  return useMutation<any, any, T>({
    mutationFn: (data) =>
      axios.put<T>(`${baseURL}/${urlEndpoint}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    onSuccess: () => toast.success('Successfully registered!'),
    onError: (error) =>
      toast.error(
        error.response.data.message || error.message || 'Something went wrong!'
      ),
  });
}
