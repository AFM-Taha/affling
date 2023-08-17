import CoverPhoto from '@/components/common/Cover/CoverPhoto';
import BigRatingStar from '@/components/common/Rating/BigRatingStar';
import RatingDistribution from '@/components/common/Rating/RatingDistribution';
import Table from '@/components/common/Table/Table';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

export default function Details() {
  return (
    <div className="relative mx-auto max-w-[1320px]">
      {/* --- Cover photo --- */}
      <CoverPhoto />
      {/* --- Profile picture and name container --- */}
      <div className="relative -top-8 z-50 mx-auto  flex flex-col items-center lg:ml-44 lg:flex-row">
        {/* --- Profile picture --- */}
        <div className="relative mr-8 h-[252px] w-[252px] rounded-full shadow-xl">
          <Image
            className="rounded-[10000px] bg-white p-3"
            src={'/affiliate-network-profile-picture.png'}
            alt="affiliate-network-profile-picture.png"
            // height={300}
            // width={351}
            layout="fill"
          />
        </div>
        {/* --- Name container ---  */}
        <div className="mt-5 font-bold text-[#313131]">
          <h3 className=" text-[26px] text-black">ADVIDI.COM</h3>
          <p className="my-1">www.website.com</p>
          <p>Affiliate Network</p>
          <div className="mb-8 flex">
            <p>⭐⭐⭐⭐⭐</p>
            <p>4.98 (117) Reviews</p>
          </div>
          <div className="mt-2 flex gap-6 text-white">
            <button className="rounded-md bg-[#4E93D3] px-4 font-normal">
              ⭐ Add Review
            </button>
            <button className="rounded-md bg-[#4E93D3] px-4 font-normal">
              (+) Join Now
            </button>
          </div>
        </div>
      </div>
      {/* --- Description container --- */}
      <div className="my-12 flex flex-col lg:flex-row">
        <p className="max-w-[872px] leading-[25.8px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          tortor tincidunt ultrices volutpat lacus. Egestas sit
          <br /> leo pharetra id risus ac mauris neque. Neque a amet, arcu
          pulvinar eu. Aliquet nibh leo vel diam feugiat.
          <br /> Ullamcorper suspendisse sit accumsan sollicitudin porta mattis.
          Orci pretium vulputate donec purus nibh odio non
          <br /> et sit.
          <br /> Id sed urna, amet ut egestas id. Id mauris elit integer cras
          cras a. Tempus, molestie penatibus fermentum egestas
          <br />
          purus ornare urna diam. Sit condimentum in leo nulla massa adipiscing
          faucibus facilisis enim. Neque habitasse sit
          <br /> amet, commodo.
          <br /> Sagittis curabitur arcu, ac dui in fermentum, at. Dignissim et
          lobortis egestas tincidunt adipiscing ultrices. Penatibus
          <br /> id mi est vel rutrum sed auctor. Eu erat facilisis eu nisi
          scelerisque sed nunc.
        </p>

        {/* ---- Big rating star container --- */}
        <BigRatingStar />
      </div>
      <div>
        <div className="flex flex-col lg:flex-row">
          {/* ---Table --- */}
          <div className="max-w-[872px]">
            <h5 className="text-lg font-bold">Affiliate Network Information</h5>
            <Table />
          </div>
          {/* --- Rating Distribution ---  */}
          <RatingDistribution />
        </div>
        {/* --- All Reviews --- */}
        <div>
          <h5 className="text-lg font-bold">All Reviews</h5>
        </div>
      </div>
    </div>
  );
}
