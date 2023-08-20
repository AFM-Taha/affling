import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table';
import { HiMail } from 'react-icons/hi';
import { RiSkypeFill, RiTelegramFill } from 'react-icons/ri';

export default function TableComponent() {
  return (
    <Table className="">
      <TableBody>
        <TableRow className="border-b-[10px] border-b-white bg-[#E4E4E4]">
          <TableCell>Tag</TableCell>
          <TableCell>
            Gaming, Nature, Entertanment, Dating, Sweeptakes, E-commerce
          </TableCell>
        </TableRow>
        <TableRow className="border-b-[10px] border-b-white bg-[#E4E4E4]">
          <TableCell>Payment Option</TableCell>
          <TableCell>$100/$500</TableCell>
        </TableRow>
        <TableRow className="border-b-[10px] border-b-white bg-[#E4E4E4]">
          <TableCell>Offers</TableCell>
          <TableCell>1000+</TableCell>
        </TableRow>
        <TableRow className="border-b-[10px] border-b-white bg-[#E4E4E4]">
          <TableCell>Payment Cycle</TableCell>
          <TableCell> Daily, Weekly, Bi-Weekly, Net-15, Net-30 </TableCell>
        </TableRow>
        <TableRow className="border-b-[10px] border-b-white bg-[#E4E4E4]">
          <TableCell>Payment Method</TableCell>
          <TableCell> Paypal, Payoneer, Bitcoin, WebMoney Bank Wire </TableCell>
        </TableRow>
        <TableRow className="border-b-[10px] border-b-white bg-[#E4E4E4]">
          <TableCell>Commission System</TableCell>
          <TableCell>CPA,CPL,CPI,CPS,ResShare,SmartLink,more</TableCell>
        </TableRow>
        <TableRow className="border-b-[10px] border-b-white bg-[#E4E4E4]">
          <TableCell>Referral Commission</TableCell>
          <TableCell>5%,2%,10%</TableCell>
        </TableRow>
        <TableRow className="border-b-[10px] border-b-white bg-[#E4E4E4]">
          <TableCell>Affiliate Tracking Software</TableCell>
          <TableCell>
            Affigate ,HasOffer, OfferLook, Tune,Everflow, OfferIT
          </TableCell>
        </TableRow>
        <TableRow className="border-b-[10px] border-b-white bg-[#E4E4E4]">
          <TableCell>Affiliate Tracking Link</TableCell>
          <TableCell>https://track.topclientoffer.com/click </TableCell>
        </TableRow>
        <TableRow className="border-b-[10px] border-b-white bg-[#E4E4E4]">
          <TableCell className="pr-4">Affiliate Support Managers</TableCell>
          <TableCell className="row-span-2">
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
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
