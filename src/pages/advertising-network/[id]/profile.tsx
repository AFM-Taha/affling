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
import { useRouter } from 'next/router';

export interface FetchedAdvertisingNetwork {
  success: boolean;
  data: Data;
}

export interface Data {
  _id: string;
  title: string;
  company_email: string;
  skype: string;
  program_type:
    | 'Tracking Software'
    | 'Marketing Spy Tools'
    | 'Affiliate Program'
    | 'Advertising Network'
    | 'Affiliate Network';
  network_name: string;
  network_url: string;
  social_page: string;
  network_description: string;
  minimum_payment: number;
  payment_frequency: string;
  payment_method: string;
  referral_commission: number;
  affiliate_advertiser_contacts: any[];
  question_aria: string;
  tag: string;
  add_format: string;
  cost_model: string;
  minimum_deposit: number;
  targeting_optimization: string[];
  daily_Impression: string;
  publishers_contact: PublishersContact[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  avatar_img_urt: string;
  reviews: Review[];
  status: string;
}

export interface PublishersContact {
  name: string;
  contact: string;
  _id: string;
}

export interface Review {
  payment: number;
  user_interface: number;
  traffic: number;
  volume: number;
  affiliate_support: number;
  recommend?: string;
  name: string;
  email: string;
  image: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

function AdvertisingNetworkProfile() {
  const { query } = useRouter();
  const { data, isLoading, isError, error } = useGet<FetchedAdvertisingNetwork>(
    `top-it/${query.id}`
  );

  console.log(data);

  if (isLoading)
    return <p className="text-center text-3xl font-bold">Loading...</p>;

  if (isError)
    return <p className="text-center text-3xl text-red-500">{error.message}</p>;

  if (data)
    return (
      <div className=" mx-auto min-h-screen px-5 lg:px-[140px]">
        {/* company profile  */}

        <div className="relative mb-64 mt-10 h-[500px] lg:mb-16 lg:h-[450px]">
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
              domain={data.data.network_url}
              name={data.data.title}
              type={data.data.program_type}
            />
          </div>
        </div>

        {/* 2nd part */}
        <div className="mt-4 grid  grid-cols-1 gap-x-20 gap-y-20 lg:mt-8 lg:grid-cols-2">
          <div className="space-y-12">
            <Description text={data.data.network_description} />
            {/* For Affiliate */}
            <div className="">
              <h5 className="mb-8 text-lg font-bold">For Affiliate</h5>
              <div className="max-w-[872px]">
                <TableItems
                  item="Payment Option"
                  value={data.data.minimum_payment}
                />
                <TableItems
                  item="Payment Cycle"
                  value={data.data.payment_frequency}
                />
                <TableItems
                  item="Payment Method"
                  value={data.data.payment_method}
                />
                <TableItems
                  item="Comission System"
                  value={data.data.cost_model}
                />
                <TableItems
                  item="Referral Commission "
                  value={data.data.referral_commission}
                />
                <TableItems item="Tracking Software" value={data.data.tag} />
                <div className="mb-5 flex items-center gap-x-3 bg-neutral-200 text-sm font-normal leading-relaxed text-black">
                  <p className="w-72">Affiliate Support Managers</p>
                  <div>
                    {data.data.affiliate_advertiser_contacts.map((item) => {
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
                <TableItems item="Ad Categories" value={data.data.add_format} />
                <TableItems item="Cost of Model" value={data.data.cost_model} />
                <TableItems
                  item="Payment Method"
                  value={data.data.payment_method}
                />
                <TableItems
                  item="Payment Cycle"
                  value={data.data.payment_frequency}
                />
                <TableItems
                  item="Payment Method"
                  value={data.data.payment_method}
                />
                <TableItems
                  item="Minimum Deposit"
                  value={data.data.minimum_deposit}
                />
                <TableItems
                  item="Commission System"
                  value={data.data.cost_model}
                />
                <TableItems
                  item="Referral Commission "
                  value={data.data.referral_commission}
                />
                <TableItems
                  item="Daily Traffic Impression "
                  value={data.data.daily_Impression}
                />
                <TableItems item="Top Country" value={data.data.tag} />
                <TableItems item="Top Verticals" value={data.data.tag} />
                <div className="mb-5 flex items-center gap-x-3 bg-neutral-200 text-sm font-normal leading-relaxed text-black">
                  <p className="w-72">Advertiser Communication Managers </p>
                  <div>
                    {data.data.affiliate_advertiser_contacts.map((item) => {
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
              <h5 className="mb-8 text-lg font-bold">
                Targeting & Optimization
              </h5>

              <div>
                <TargetingOptimization
                  targets={data.data.targeting_optimization}
                />
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
  return (
    <p className="text-center text-3xl font-bold">
      Something went wrong, please try again.
    </p>
  );
}

export default AdvertisingNetworkProfile;
