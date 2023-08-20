import { customAds } from '@/assets/static-data/offers';
import Image from 'next/image';

const Ads = () => {
  return (
    <div>
      {customAds.map((item, index) => (
        <div key={index}>
          <Image src={item.image} alt="ads" width={262} height={245} />
        </div>
      ))}
    </div>
  );
};

export default Ads;
