import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Admin() {
  const { push } = useRouter();

  useEffect(() => {
    push('/admin/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
