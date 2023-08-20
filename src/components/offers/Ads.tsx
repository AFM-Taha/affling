import { customAds } from '@/assets/static-data/offers';
import Image from 'next/image';

const Ads = () => {
  return (
    <div className="bg-[#E9F3F2] pt-4 pb-6 px-6">
      {customAds.map((item, index) => (
        <div key={index}>
          <Image src={item.image} alt="ads" width={262} height={245} />
        </div>
      ))}
    </div>
  );
};

export default Ads;
