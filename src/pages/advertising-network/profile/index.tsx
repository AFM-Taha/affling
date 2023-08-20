
import useGet from '@/hooks/useGet';


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