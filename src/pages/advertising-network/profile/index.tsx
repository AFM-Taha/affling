import CoverPhoto from '@/components/common/Cover/CoverPhoto';
import BigRatingStar from '@/components/common/Rating/BigRatingStar';
import RatingDistribution from '@/components/common/Rating/RatingDistribution';
import Table from '@/components/common/Table/Table';
import Image from 'next/image';
import { BiSolidStar } from 'react-icons/bi';
import { IoMdAddCircle } from 'react-icons/io';
import useGet from '@/hooks/useGet';
import Details from '@/pages/affiliate-network/details';

interface FetchedNetworkDetails {
  name: string;
}


function AdvertisingNetworkProfile() {

  const { data } = useGet<FetchedNetworkDetails>(
    'top-it?filter=Advertising%20Network'
  );

  console.log(data);

  return (
    <div>
    
    </div>
  )
}

export default AdvertisingNetworkProfile