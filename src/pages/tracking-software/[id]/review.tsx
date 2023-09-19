import NetworkDetailReviewForm from '@/components/common/Forms/NetworkDetailReviewForm';
import Image from 'next/image';
import { BiSolidStar } from 'react-icons/bi';

export default function Review() {
  return (
    <div className="max-w-[648px] pl-[49px] pt-[49px]">
      <div className="mb-12 flex items-center gap-2">
        <Image
          src="/topclientofffer.png"
          alt="topclientofffer"
          height={42}
          width={42}
        />
        <h3 className="text-[26px] font-bold">TopClientOffer</h3>
      </div>
      <div>
        <h3 className="mb-5 text-[26px] font-bold">Overall Rating</h3>
        <div>
          <div className="mb-[10px] flex justify-between">
            <div className="text-lg font-bold text-[#313131]">Payment</div>
            <div className="flex items-center gap-2">
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
            </div>
          </div>
          <div className="mb-[10px] flex justify-between">
            <div className="text-lg font-bold text-[#313131]">
              User Interface
            </div>
            <div className="flex items-center gap-2">
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
            </div>
          </div>
          <div className="mb-[10px] flex justify-between">
            <div className="text-lg font-bold text-[#313131]">Offer</div>
            <div className="flex items-center gap-2">
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
            </div>
          </div>
          <div className="mb-[10px] flex justify-between">
            <div className="text-lg font-bold text-[#313131]">
              Affiliate Support
            </div>
            <div className="flex items-center gap-2">
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
            </div>
          </div>
          <div className="mb-[10px] flex justify-between">
            <div className="text-lg font-bold text-[#313131]">Recommend</div>
            <div className="flex items-center gap-2">
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
              <BiSolidStar color="#FFAB2D" size={25} />
            </div>
          </div>
        </div>
      </div>

      <NetworkDetailReviewForm />
    </div>
  );
}
