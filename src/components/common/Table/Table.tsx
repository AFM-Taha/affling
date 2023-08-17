import { HiMail } from 'react-icons/hi';
import { RiSkypeFill, RiTelegramFill } from 'react-icons/ri';

export default function Table() {
  return (
    <table className="w-full">
      <tbody>
        <tr className="border-b-[20px] border-white bg-[#e4e4e4]">
          <td>Tag</td>
          <td>Gaming, Nature, Entertanment, Dating, Sweeptakes, E-commerce</td>
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
  );
}
