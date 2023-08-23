import { customAds } from "@/assets/static-data/offers";
import Image from "next/image";

const HomeAds = () => {
  return (
    <div>
      <div className="bg-[#E9F3F2] px-6 pb-6 pt-4">
        {customAds.map((item, index) => (
          <div key={index}>
            <Image src={item.image} alt="ads" width={300} height={280} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeAds