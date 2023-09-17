// useAffiliateData.ts
import { useEffect, useState } from 'react';
import getToken from '@/hooks/useToken';
import { AffiliateDataType } from '@/assets/static-data/dashboard/fakedata';

const useCustomerData = (endpoint: string) => {
  const [data, setData] = useState<AffiliateDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const authorizationToken = getToken();
      console.log('authorizationToken', authorizationToken);

      if (!authorizationToken) {
        console.error('Unauthorized access. Please check your token.');
        return;
      }

      const headers: HeadersInit = {
        Authorization: authorizationToken,
        'Content-Type': 'application/json',
      };

      try {
        const res = await fetch(endpoint, {
          method: 'GET',
          headers,
        });

        if (res.status === 401) {
          console.error('Unauthorized access. Please check your token.');
          return;
        }

        const data = await res.json();
        console.log(data);

        setData(data.offers || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data };
};

export default useCustomerData;
