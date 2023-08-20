import baseURL from '@/assets/baseURL';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useGet<DataType>(urlEndpoint: string) {
  return useQuery<DataType, Error>({
    queryKey: [urlEndpoint],
    queryFn: () =>
      axios.get(`${baseURL}/${urlEndpoint}`).then((res) => res.data),
  });
}
