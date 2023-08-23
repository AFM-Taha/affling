import React from 'react';
import { BiSolidStar } from 'react-icons/bi';
import { IoMdAddCircle } from 'react-icons/io';

interface Props {
  name: string;
  domain: string;
  type:
    | 'Tracking Software'
    | 'Marketing Spy Tools'
    | 'Affiliate Program'
    | 'Advertising Network'
    | 'Affiliate Network';
}

const ProfileInfo = ({ domain, name, type }: Props) => {
  return (
    <div className="mt-5 font-bold text-[#313131]">
      <h3 className=" text-[26px] text-black">{name}</h3>
      <p className="my-1">{domain}</p>
      <p>{type}</p>
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
        <button className="flex items-center gap-1 rounded-md bg-[#4E93D3] px-4 py-1 font-normal hover:bg-[#2466a3]">
          <BiSolidStar color="#FFAB2D" />
          Add Review
        </button>
        <button className="flex items-center gap-1 rounded-md bg-[#4E93D3] px-4 py-1 font-normal hover:bg-[#2466a3]">
          <IoMdAddCircle /> Join Now
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
