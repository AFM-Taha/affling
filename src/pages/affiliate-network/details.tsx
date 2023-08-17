import Image from 'next/image';
import { AiOutlineSkype } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { RiSkypeFill, RiTelegramFill } from 'react-icons/ri';

export default function Details() {
  return (
    <div className="relative mx-auto max-w-[1320px]">
      {/* --- Cover photo --- */}
      <div className="relative mx-auto mt-5 h-[250px] w-[500] lg:h-[250px] lg:w-[1320px]">
        <Image
          className="lg:rounded-3xl"
          objectFit="cover"
          layout="fill"
          src={'/affiliate-network-details-banner.png'}
          alt={'affiliate-network-details-banner.png'}
        />
      </div>
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
        <div className="relative -top-12 rounded-full lg:h-[323px] lg:w-[323px]">
          <Image
            src={'/big-rating-star-container.png'}
            alt="big-rating-star-container."
            width={323}
            height={323}
          />
          <p className="absolute left-[122px] top-[190px] text-5xl font-bold text-[#E7B228]">
            4.9
          </p>
        </div>
      </div>
      <div>
        {/* ---Table --- */}
        <div className="max-w-[872px]">
          <h5 className="text-lg font-bold">Affiliate Network Information</h5>
          <table className="w-full">
            <tbody>
              <tr className="border-b-[20px] border-white bg-[#e4e4e4]">
                <td>Tag</td>
                <td>
                  Gaming, Nature, Entertanment, Dating, Sweeptakes, E-commerce
                </td>
              </tr>
              <tr className="border-b-[20px] border-white bg-[#e4e4e4]">
                <td>Payment Option</td>
                <td>$100/$500</td>
              </tr>
              <tr className="border-b-[20px] border-white bg-[#e4e4e4]">
                <td>Offers</td>
                <td>1000+</td>
              </tr>
              <tr className="border-b-[20px] border-white bg-[#e4e4e4]">
                <td>Payment Cycle</td>
                <td> Daily, Weekly, Bi-Weekly, Net-15, Net-30 </td>
              </tr>
              <tr className="border-b-[20px] border-white bg-[#e4e4e4]">
                <td>Payment Method</td>
                <td> Paypal, Payoneer, Bitcoin, WebMoney Bank Wire </td>
              </tr>
              <tr className="border-b-[20px] border-white bg-[#e4e4e4]">
                <td>Commission System</td>
                <td>CPA,CPL,CPI,CPS,ResShare,SmartLink,more</td>
              </tr>
              <tr className="border-b-[20px] border-white bg-[#e4e4e4]">
                <td>Referral Commission</td>
                <td>5%,2%,10%</td>
              </tr>
              <tr className="border-b-[20px] border-white bg-[#e4e4e4]">
                <td>Affiliate Tracking Software</td>
                <td>Affigate ,HasOffer, OfferLook, Tune,Everflow, OfferIT</td>
              </tr>
              <tr className="border-b-[20px] border-white bg-[#e4e4e4]">
                <td>Affiliate Tracking Link</td>
                <td>https://track.topclientoffer.com/click </td>
              </tr>
              <tr className="border-b-[20px] border-white bg-[#e4e4e4]">
                <td>Affiliate Support Managers</td>
                <td className="row-span-2">
                  <div className="flex gap-4">
                    Olha TopClientOffer
                    <div className="flex gap-2">
                      <RiSkypeFill size={24} />
                      <HiMail size={24} />
                      <RiTelegramFill size={24} />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    Yudina TopClientOffer
                    <div className="flex gap-2">
                      <RiSkypeFill size={24} />
                      <HiMail size={24} />
                      <RiTelegramFill size={24} />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
