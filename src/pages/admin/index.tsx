import useToken from '@/hooks/useToken';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Admin() {
  const { push } = useRouter();
  const token = useToken();

  useEffect(() => {
    if (token) push('/admin/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
