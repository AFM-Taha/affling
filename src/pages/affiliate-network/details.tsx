import CoverPhoto from '@/components/common/Cover/CoverPhoto';
import BigRatingStar from '@/components/common/Rating/BigRatingStar';
import RatingDistribution from '@/components/common/Rating/RatingDistribution';
import Table from '@/components/common/Table/Table';
import Image from 'next/image';
import { BiSolidStar } from 'react-icons/bi';
import { IoMdAddCircle } from 'react-icons/io';
import useGet from '@/hooks/useGet';

interface FetchedNetworkDetails {
  name: string;
}

export default function Details() {
  const { data } = useGet<FetchedNetworkDetails>(
    'top-it?filter=Affiliate%20Program'
  );

  console.log(data);

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
          <div className="mb-8 flex items-center gap-2">
            {/* Review stars */}
            <div className="flex gap-1">
              <BiSolidStar color="#FFAB2D" />
              <BiSolidStar color="#FFAB2D" />
              <BiSolidStar color="#FFAB2D" />
              <BiSolidStar color="#FFAB2D" />
              <BiSolidStar color="#FFAB2D" />
            </div>
            <p>4.98 (117) Reviews</p>
          </div>
          <div className="mt-2 flex gap-6 text-white">
            <button className="flex items-center gap-1 rounded-md bg-[#4E93D3] px-4 font-normal">
              <BiSolidStar color="#FFAB2D" />
              Add Review
            </button>
            <button className="flex items-center gap-1 rounded-md bg-[#4E93D3] px-4 font-normal">
              <IoMdAddCircle /> Join Now
            </button>
          </div>
        </div>
      </div>
      {/* --- Description and rating container --- */}
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

        {/* ---- Big rating star Rating Distribution container --- */}
        <div>
          <BigRatingStar />
          <RatingDistribution />
        </div>
      </div>
      <div className="-mt-32">
        <div className="">
          {/* ---Table --- */}
          <div className="max-w-[872px]">
            <h5 className="text-lg font-bold">Affiliate Network Information</h5>
            <Table />
          </div>
        </div>
        {/* --- All Reviews --- */}
        <div>
          <h5 className="text-lg font-bold">All Reviews</h5>
          {/* --- Review Card --- */}
          <div className="my-8 h-[753px] w-[872px] bg-white pb-[46px] pl-[58px] pr-[87px] pt-[14px] shadow-xl">
            <div>
              {/* Avatar, name and date container */}
              <div className="flex items-center gap-2">
                <div className="relative h-[56px] w-[56px]">
                  <Image
                    className="rounded-full object-cover"
                    objectPosition="top"
                    src={'/man-profile-pic.webp'}
                    alt="man-profile-pic.webp"
                    layout="fill"
                  />
                </div>
                <div>
                  <div className="font-bold">John Doe</div>
                  <div>Aug 18, 2022</div>
                </div>
              </div>
              {/* --- Review text container --- */}
              <p className="mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                elit bibendum eget quis dictum euismod massa interdum. Donec
                libero, habitant pulvinar eget felis. Ac neque orci faucibus est
                lacus, libero quisque. Neque aenean cras amet sapien, morbi
                imperdiet imperdiet tincidunt tortor. Turpis elementum felis,
                mus cras. Mi, non porttitor platea nullam tellus vel, id enim
                nulla. Sagittis nibh scelerisque massa enim volutpat tellus at
                ligula non.
              </p>
              {/* --- Review screenshots --- */}
              <div className="relative mb-7 mt-5 h-[154px] w-[311px] shadow-lg">
                <Image
                  src="/review-ss.png"
                  alt="review-ss.png"
                  layout="fill"
                  objectFit="center"
                />
              </div>
              {/* categorized reviews */}
              <div className="flex flex-col gap-2">
                <div className="flex max-w-[420px] items-center justify-between">
                  <div className="text-[26px] font-bold text-[#313131]">
                    Payment
                  </div>
                  <div className="flex">
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                  </div>
                </div>
                <div className="flex max-w-[420px] items-center justify-between">
                  <div className="text-[26px] font-bold text-[#313131]">
                    User Interface
                  </div>
                  <div className="flex">
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                  </div>
                </div>
                <div className="flex max-w-[420px] items-center justify-between">
                  <div className="text-[26px] font-bold text-[#313131]">
                    Offers
                  </div>
                  <div className="flex">
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                  </div>
                </div>
                <div className="flex max-w-[420px] items-center justify-between">
                  <div className="text-[26px] font-bold text-[#313131]">
                    Affiliate Support
                  </div>
                  <div className="flex">
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                  </div>
                </div>
                <div className="flex max-w-[420px] items-center justify-between">
                  <div className="text-[26px] font-bold text-[#313131]">
                    Recommend
                  </div>
                  <div className="flex">
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-8 h-[753px] w-[872px] bg-white pb-[46px] pl-[58px] pr-[87px] pt-[14px] shadow-xl">
            <div>
              {/* Avatar, name and date container */}
              <div className="flex items-center gap-2">
                <div className="relative h-[56px] w-[56px]">
                  <Image
                    className="rounded-full object-cover"
                    objectPosition="top"
                    src={'/man-profile-pic.webp'}
                    alt="man-profile-pic.webp"
                    layout="fill"
                  />
                </div>
                <div>
                  <div className="font-bold">John Doe</div>
                  <div>Aug 18, 2022</div>
                </div>
              </div>
              {/* --- Review text container --- */}
              <p className="mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                elit bibendum eget quis dictum euismod massa interdum. Donec
                libero, habitant pulvinar eget felis. Ac neque orci faucibus est
                lacus, libero quisque. Neque aenean cras amet sapien, morbi
                imperdiet imperdiet tincidunt tortor. Turpis elementum felis,
                mus cras. Mi, non porttitor platea nullam tellus vel, id enim
                nulla. Sagittis nibh scelerisque massa enim volutpat tellus at
                ligula non.
              </p>
              {/* --- Review screenshots --- */}
              <div className="relative mb-7 mt-5 h-[154px] w-[311px] shadow-lg">
                <Image
                  src="/review-ss.png"
                  alt="review-ss.png"
                  layout="fill"
                  objectFit="center"
                />
              </div>
              {/* categorized reviews */}
              <div className="flex flex-col gap-2">
                <div className="flex max-w-[420px] items-center justify-between">
                  <div className="text-[26px] font-bold text-[#313131]">
                    Payment
                  </div>
                  <div className="flex">
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                  </div>
                </div>
                <div className="flex max-w-[420px] items-center justify-between">
                  <div className="text-[26px] font-bold text-[#313131]">
                    User Interface
                  </div>
                  <div className="flex">
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                  </div>
                </div>
                <div className="flex max-w-[420px] items-center justify-between">
                  <div className="text-[26px] font-bold text-[#313131]">
                    Offers
                  </div>
                  <div className="flex">
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                  </div>
                </div>
                <div className="flex max-w-[420px] items-center justify-between">
                  <div className="text-[26px] font-bold text-[#313131]">
                    Affiliate Support
                  </div>
                  <div className="flex">
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                  </div>
                </div>
                <div className="flex max-w-[420px] items-center justify-between">
                  <div className="text-[26px] font-bold text-[#313131]">
                    Recommend
                  </div>
                  <div className="flex">
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                    <BiSolidStar size={25} color="#FFAB2D" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
