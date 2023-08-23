import useGet from '@/hooks/useGet';
import { RiSkypeFill, RiTelegramFill } from 'react-icons/ri';
import ProfilePhoto from '@/components/companyProfile/ProfilePhoto';
import CompanyCoverPhoto from '@/components/companyProfile/CompanyCoverPhoto';
import ProfileInfo from '@/components/companyProfile/ProfileInfo';
import Description from '@/components/companyProfile/Description';
import BigRatingStar from '@/components/common/Rating/BigRatingStar';
import RatingDistribution from '@/components/common/Rating/RatingDistribution';
import TableItems from '@/components/companyProfile/TableItems';
import { HiMail } from 'react-icons/hi';
import TargetingOptimization from '@/components/companyProfile/TargetingOptimization';
import ReviewCard from '@/components/companyProfile/ReviewCard';

interface FetchedNetworkDetails {
  name: string;
}

function AdvertisingNetworkProfile() {
  const { data } = useGet<FetchedNetworkDetails>(
    'top-it?filter=Advertising%20Network'
  );

  console.log(data);

  const affiliate_advertiser_contacts = [
    {
      name: 'Alex Johnson',
      contact: 'alex@advertisepro.com',
    },
    {
      name: 'Max-well',
      contact: 'max@advertisepro.com',
    },
  ];
  const advertiser_commission_contacts = [
    {
      name: 'Olha TopClientOffer',
      contact: 'alex@advertisepro.com',
    },
    {
      name: 'Yudina TopClientOffer',
      contact: 'max@advertisepro.com',
    },
  ];

  return (
    <div className=" mx-auto min-h-screen px-5 lg:px-[140px]">
      {/* company profile  */}

      <div className="relative mt-10 h-[500px] lg:h-[450px]">
        <CompanyCoverPhoto
          bannerImageUrl="/advertising-network-banner-picture.png"
          bannerImageAlt="advertising-network-banner-picture"
        />

        <div className=" absolute flex  flex-col items-center gap-x-12 lg:left-[57px] lg:top-[210px] lg:flex-row">
          <ProfilePhoto
            bannerImageUrl="/advertising-network-profile-picture.png"
            bannerImageAlt="advertising-network-profile-picture"
          />

          <ProfileInfo
            domain="www.propellerads.com"
            name="PropellerAds"
            type="Advertising Network"
          />
        </div>
      </div>

      {/* 2nd part */}
      <div className="mt-4 grid  grid-cols-1 gap-x-20 gap-y-20 lg:mt-8 lg:grid-cols-2">
        <div className="space-y-12">
          <Description />
          {/* For Affiliate */}
          <div className="">
            <h5 className="mb-8 text-lg font-bold">For Affiliate</h5>
            <div className="max-w-[872px]">
              <TableItems item="Payment Option" value="$100/$500" />
              <TableItems
                item="Payment Cycle"
                value=" Daily, Weekly, Bi-Weekly, Net-15, Net-30 "
              />
              <TableItems
                item="Payment Method"
                value=" Paypal, Payoneer, Bitcoin, WebMoney Bank Wire "
              />
              <TableItems
                item="Comission System"
                value="CPA, CPL, CPI, CPS, ResShare, SmartLink, more"
              />
              <TableItems item="Referral Commission " value="5%,2%,10%" />
              <TableItems
                item="Tracking Software"
                value="Affigate ,HasOffer, OfferLook, Tune,Everflow, OfferIT"
              />
              <div className="mb-5 flex items-center gap-x-3 bg-neutral-200 text-sm font-normal leading-relaxed text-black">
                <p className="w-72">Affiliate Support Managers</p>
                <div>
                  {affiliate_advertiser_contacts.map((item) => {
                    return (
                      <div key={item?.name} className="flex  justify-between">
                        <p>{item?.name}</p>
                        <div className="flex items-center gap-2">
                          <a href="https://www.skype.com" target="_blank">
                            <RiSkypeFill size={24} className="text-sky-500" />
                          </a>
                          <a href={item?.contact} target="_blank">
                            {' '}
                            <HiMail size={24} className="text-[#4cc6ff]" />
                          </a>
                          <a href="https://www.telegram.com" target="_blank">
                            {' '}
                            <RiTelegramFill
                              size={24}
                              className="text-[#34AADF]"
                            />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* For Affiliate end  */}

          {/* for advertise Start */}

          <div className="">
            <h5 className="mb-8 text-lg font-bold">For Advertiser</h5>
            <div className="max-w-[872px]">
              <TableItems
                item="Ad Categories"
                value="Push, Popunder, Native, Banner, Display, Interstitial, In-Page Push, Video, more"
              />
              <TableItems
                item="Cost of Model"
                value="CPM, CPC, Smart bidding models "
              />
              <TableItems
                item="Payment Method"
                value=" Paypal, Payoneer, Bitcoin, WebMoney Bank Wire "
              />
              <TableItems
                item="Payment Cycle"
                value=" Daily, Weekly, Bi-Weekly, Net-15, Net-30 "
              />
              <TableItems
                item="Payment Method"
                value=" Paypal, Payoneer, Bitcoin, WebMoney Bank Wire "
              />
              <TableItems
                item="Minimum Deposit"
                value="$50, $100, $500, $1000"
              />
              <TableItems
                item="Commission System"
                value="CPA, CPL, CPI, CPS, ResShare, SmartLink, more"
              />
              <TableItems item="Referral Commission " value="5%, 2%, 10%" />
              <TableItems
                item="Daily Traffic Impression "
                value="1billion, 2billion, 3billion, 4billion, 5billion"
              />
              <TableItems item="Top Country" value="US, CA, AU, UK,DE, RU" />
              <TableItems
                item="Top Verticals"
                value="Adult, Gaming,Nutra, E-commerce, Dating, Sweeptakes, more"
              />
              <div className="mb-5 flex items-center gap-x-3 bg-neutral-200 text-sm font-normal leading-relaxed text-black">
                <p className="w-72">Advertiser Communication Managers </p>
                <div>
                  {advertiser_commission_contacts.map((item) => {
                    return (
                      <div key={item?.name} className="flex  justify-between">
                        <p>{item?.name}</p>
                        <div className="flex items-center gap-2">
                          <a href="https://www.skype.com" target="_blank">
                            <RiSkypeFill size={24} className="text-sky-500" />
                          </a>
                          <a href={item?.contact} target="_blank">
                            {' '}
                            <HiMail size={24} className="text-[#4cc6ff]" />
                          </a>
                          <a href="https://www.telegram.com" target="_blank">
                            {' '}
                            <RiTelegramFill
                              size={24}
                              className="text-[#34AADF]"
                            />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* for advertise End */}

          {/* Targeting & Optimization start  */}
          <div>
            <h5 className="mb-8 text-lg font-bold">Targeting & Optimization</h5>

            <div>
              <TargetingOptimization />
            </div>
          </div>

          {/* Targeting & Optimization End  */}
        </div>
        {/* rating  */}
        <div className="">
          <BigRatingStar />
          <RatingDistribution />
        </div>
      </div>

      {/* reviews  */}

      <div className="mt-12">
        <h5 className="text-lg font-bold">All Reviews</h5>

        <ReviewCard />
      </div>
    </div>
  );
}

export default AdvertisingNetworkProfile;
