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
import ReviewCard from '@/components/companyProfile/ReviewCard';
import { useRouter } from 'next/router';
import Spinner from '@/components/ui/spinner';

export interface FetchedAffiliateProgram {
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
  question_aria: string;
  base_commission: string;
  tag: string;
  targeting_optimization: any[];
  publishers_contact: PublishersContact[];
  affiliate_advertiser_contacts: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  reviews: any[];
  status: string;
}

export interface PublishersContact {
  name: string;
  contact: string;
  _id: string;
}

function AffiliateProgramProfile() {
  const { query } = useRouter();
  const { data, isLoading, isError, error } = useGet<FetchedAffiliateProgram>(
    `top-it/${query.id}`
  );

  console.log(data);

  if (isLoading) return <Spinner />;

  if (isError)
    return <p className="text-center text-3xl text-red-500">{error.message}</p>;

  return (
    <div className=" mx-auto min-h-screen px-5 lg:px-[140px]">
      {/* company profile  */}

      <div className="relative mb-64 mt-10 h-[500px] lg:mb-16 lg:h-[450px]">
        <CompanyCoverPhoto
          bannerImageUrl="/affiliate-program-cover.png"
          bannerImageAlt="affiliate-program-cover.png"
        />

        <div className=" absolute flex  flex-col items-center gap-x-12 lg:left-[57px] lg:top-[210px] lg:flex-row">
          <ProfilePhoto
            bannerImageUrl="/affiliate-program-profile.png"
            bannerImageAlt="affiliate-program-profile-picture"
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
            <h5 className="mb-8 text-lg font-bold">
              Affiliate Program Information
            </h5>
            <div className="max-w-[872px]">
              <TableItems
                item="Startup Comission"
                value={data.data.base_commission}
              />
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
                item="Referral Commission"
                value={data.data.referral_commission}
              />
              <TableItems item="Referral Commission " value="5%,2%,10%" />
              <TableItems
                item="Affiliate Tracking Software"
                value={data.data.tag}
              />
              <TableItems item="Cookies" value={data.data.tag} />
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

export default AffiliateProgramProfile;
