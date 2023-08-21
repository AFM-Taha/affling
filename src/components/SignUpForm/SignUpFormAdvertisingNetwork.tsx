import { targetingOptimization } from '@/assets/static-data/inputFormText';
import InputField from '../common/Forms/InputField';
import Registration from '../common/Forms/Registration';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

// form schema for validation
const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  companyEmail: z
    .string()
    .regex(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Enter a valid email'
    ),
  skype: z.string().min(2, 'Skype is required'),
  program_type: z.enum([
    'Affiliate Network',
    'Affiliate Program',
    'Advertising Network',
    'Tracking Software',
    'Marketing Spy Tools',
  ]),
  affiliateNetworkName: z.string().min(2, 'Affiliate netrok name is required'),
});

const SignUpFormAdvertisingNetwork = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form className="my-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <Registration />
        </div>
        <div className="space-y-4">
          {/* name  */}
          <InputField
            label="Name"
            id="name"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />
          {/* Company Email */}
          <InputField
            label="Company Email"
            id="companyEmail"
            placeholder=""
            type="email"
            register={register}
            errors={errors}
          />
          {/* Skype */}
          <InputField
            label="Skype"
            id="skype"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          {/* Choose your program  type*/}

          <div>
            <label
              htmlFor="programType"
              className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
              Choose your program type
            </label>
            <select
              value={'Advertisement Network'}
              className="h-[37.07px] w-[760px] bg-stone-100 text-center text-xl font-normal text-zinc-800"
              {...register('programType')}>
              <option value="Advertisement Network" className="">
                Advertisement Network
              </option>
              <option value="Affiliate Network" className="">
                Affiliate Network
              </option>
              <option value="Affiliate Program" className="">
                Affiliate Program
              </option>
              <option value="Tracking Software" className="">
                Tracking Software
              </option>
              <option value="Marketing Spy Tools" className="">
                Marketing Spy Tools
              </option>
            </select>
          </div>

          <InputField
            label="Advertising Network Name"
            id="networkName"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Network URL"
            id="networkURL"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Social Page (Facebook, LinkedIn, Twitter)"
            id="socialPage"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          {/* Network Description  */}

          <div>
            <label
              htmlFor="networkDescription"
              className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
              Network Description
            </label>
            <textarea
              id="networkDescription"
              className="w-full bg-stone-100 pl-2 pt-1"
              {...register('networkDescription')}
              rows={10}
              cols={1}></textarea>
          </div>

          <InputField
            label="Tags (Ad Network, Ad Server, Ad Exchange, DSP, SSP, RTB, more)"
            id="tags"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Commission Type (CPM, CPC, CPA, RevShare, more)"
            id="commissionType"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Minimum Payment ($50, $100, more)"
            id="minimumPayment"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Payment Frequency (Net-30, Net-15, Weekly, Upon Request, more)"
            id="paymentFrequency"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />
          <InputField
            label="Minimum Payment ($50, $100, more)"
            id="minimumPayment2"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />
          <InputField
            label="Payment Method (Check, PayPal, Wire, more)"
            id="paymentMethod"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Referral Commission (2%, 5%, None, more)"
            id="referralCommissionPublishers"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          {/* Publishers Contact */}
          <div className="">
            <div className="my-5 flex items-center gap-x-20 ">
              <div>
                <label
                  htmlFor="publishersContact1"
                  className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
                  Publishers Contact (optional)
                </label>
              </div>
              <div className="mb-[-10px] border border-dashed border-blue-500 p-[10.30px]">
                <div className="text-xl font-normal text-zinc-800">+Add</div>
              </div>
            </div>
            <div className="mb-5 flex flex-wrap items-center gap-6">
              <input
                id="publishersContact1"
                type="text"
                placeholder="Name"
                className="h-[37.07px] w-[236.86px] bg-stone-100 pl-2"
                {...register('PublishersContactName1')}
              />
              <input
                id="PublishersContact2"
                type="text"
                placeholder="ex: Email,Skype"
                className="h-[37.07px] w-[453.12px]  bg-stone-100 pl-2"
                {...register('publishersContactInfo1')}
              />
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <input
                id="PublishersContact3"
                type="text"
                placeholder="Name"
                className="h-[37.07px] w-[236.86px] bg-stone-100 pl-2"
                {...register('publishersContactName2')}
              />
              <input
                id="PublishersContact4"
                type="text"
                placeholder="ex: Email,Skype"
                className="h-[37.07px] w-[453.12px]  bg-stone-100 pl-2"
                {...register('publishersContactInfo2')}
              />
            </div>
          </div>

          <div className="py-5">
            <div className="relative">
              <h3 className="absolute left-12 top-[-18px] rounded-[10.30px] bg-blue-500 px-[10.30px] py-[4.12px]  text-xl font-normal text-white">
                For advertiser
              </h3>
              <div className=" min-w-[630.24px] border border-neutral-800 border-opacity-30"></div>
            </div>
          </div>

          <InputField
            label="Ad Format"
            id="adFormat"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Cost Model"
            id="costModel"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Minimum Deposit"
            id="minimumDeposit"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Payment Method (Check, PayPal, Wire, more)"
            id="paymentMethod"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Referral Commission (2%, 5%, None, more)"
            id="referralCommissionAdvertisers"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Daily Impression (100 million, 1 billion, more)"
            id="dailyImpression"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Top GEO (US, RU, UK, CA, IN, BR, WorldWide, more)"
            id="topGeo"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Top Vertical (Dating, Sweepstakes, Mobile App, Health/Nutra, Forex, more)"
            id="topVertical"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Referral Commission (2%, 5%, None, more)"
            id="refCommission"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          {/*Advertisers Contact  */}
          <div>
            <div className="my-5 flex items-center gap-x-20 ">
              <div>
                <label
                  htmlFor="publishersContact1"
                  className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
                  Advertisers Contact (optional)
                </label>
              </div>
              <div className="mb-[-10px] border border-dashed border-blue-500 p-[10.30px]">
                <div className="text-xl font-normal text-zinc-800">+Add</div>
              </div>
            </div>
            <div className="mb-5 flex flex-wrap items-center gap-6">
              <input
                id="advertisersContact1"
                type="text"
                placeholder="Name"
                className="h-[37.07px] w-[236.86px] bg-stone-100 pl-2"
                {...register('advertisersContactName1')}
              />
              <input
                id="advertisersContact2"
                type="text"
                placeholder="ex: Email,Skype"
                className="h-[37.07px] w-[453.12px]  bg-stone-100 pl-2"
                {...register('advertisersContactInfo1')}
              />
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <input
                id="advertisersContact3"
                type="text"
                placeholder="Name"
                className="h-[37.07px] w-[236.86px] bg-stone-100 pl-2"
                {...register('advertisersContactName2')}
              />
              <input
                id="advertisersContact4"
                type="text"
                placeholder="ex: Email,Skype"
                className="h-[37.07px] w-[453.12px]  bg-stone-100 pl-2"
                {...register('advertisersContactInfo2')}
              />
            </div>
          </div>
          {/* Targeting & Optimization */}
          <div>
            <div className="mb-7">
              <label
                htmlFor="targetingOptimization"
                className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
                Targeting & Optimization:
              </label>
            </div>
            <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 ">
              {targetingOptimization?.map((field) => {
                return (
                  <>
                    <div className="flex  items-center  justify-between">
                      <label
                        htmlFor={field?.id}
                        className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
                        {field?.label}
                      </label>
                      <input
                        key={field.id}
                        type="checkbox"
                        value={field.name}
                        {...register(field.name)}
                        className=" border border-zinc-800"
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="networkDescription"
              className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
              Please let us know if you have any other questions (optional)
            </label>
            <textarea
              id="faq"
              placeholder=""
              {...register('faq')}
              className="w-full bg-stone-100 pl-2 pt-1"
              rows={6}
              cols={1}></textarea>
          </div>
        </div>

        <button className="mt-5 inline-flex h-[45.60px] w-[89.60px] items-start justify-start bg-blue-500 p-[10.30px] text-xl font-normal text-white">
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUpFormAdvertisingNetwork;
