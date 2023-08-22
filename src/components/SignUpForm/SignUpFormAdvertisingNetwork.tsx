import { targetingOptimization } from '@/assets/static-data/inputFormText';
import InputField from '../common/Forms/InputField';
import Registration from '../common/Forms/Registration';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

// ⚠️⚠️⚠️ WARNING: THIS FILE WILL BE UPDATED BASED ON THE BACKEND. DO NOT REMOVE ANY COMMENTS ⚠️⚠️⚠️
// BECAUSE THE CLIENT DIDN'T CLARIFY THE FORM STRUCTURE AND THE BACKEND DEV HAVEN'T SET UP THE DATABASE FULLY YET.

// ______________________
// ❓❓❓ I have soooo many questions regarding many form fields
// and how will it be stored in the DB
//________________________________

// form schema for validation
const schema = z.object({
  title: z.string().min(2, 'Name must be at least 2 characters'),
  company_email: z
    .string()
    .regex(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Enter a valid email'
    ),
  skype: z.string().min(2, 'Skype is required'),
  // program_type: z.enum([
  //   'Affiliate Network',
  //   'Affiliate Program',
  //   'Advertising Network',
  //   'Tracking Software',
  //   'Marketing Spy Tools',
  // ]),
  network_name: z.string().min(2, 'Advertising network name is required'),
  network_url: z
    .string()
    .regex(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
      'Enter a valid URL'
    ),
  social_page: z
    .string()
    .regex(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
      'Enter a valid URL'
    ),
  network_description: z
    .string()
    .min(10, 'Description must be at least 10 characters'),
  minimum_payment: z
    .number({ invalid_type_error: 'Enter a number' })
    .positive({ message: 'Must be greater than 0' }),

  // ❓❓❓ Why isn't this 👇 a dropdown?

  payment_frequency: z.enum(
    ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Annually'],
    {
      errorMap: (_issue, _ctx) => ({
        message:
          'Must be one of the following: Daily, Weekly, Monthly, Quarterly, Annually',
      }),
    }
  ),

  // ❓❓❓ Why is payment method mentioned multiple times?

  payment_method: z.string().min(2, 'Payment method is required'),

  // ❓❓❓ Why is referral commission mentioned multiple times?

  referral_commission: z
    .number({ invalid_type_error: 'Enter a number' })
    .positive({ message: 'Must be greater than 0' }),

  // ⚠️ ❓❓❓ This field doesn't exist in the design

  // tracking_software: z.string().min(2, 'Tracking software is required'),

  // TODO: Uncomment this later

  affiliate_advertiser_contacts: z
    .array(
      z.object({
        name: z.string(),
        contact: z.string(),
      })
    )
    .optional(),
  question_aria: z.string().optional(),
  // ⚠️ ❓❓❓ This field doesn't exist in the design

  // program_category: z.string().min(2, 'Program category is required'),

  // ⚠️ ❓❓❓ This field doesn't exist in the design

  // base_commission: z
  //   .number({ invalid_type_error: 'Enter a number' })
  //   .positive({ message: 'Must be greater than 0' }),

  tag: z.string().min(2, 'Tag is required'),
  add_format: z.string().min(2, 'Ad format is required'),
  cost_model: z.string().min(2, 'Cost model is required'),
  minimum_deposit: z
    .number({ invalid_type_error: 'Enter a number' })
    .positive({ message: 'Must be greater than 0' }),

  /* 🚫🚫🚫 Uncomment targeting optimization later */

  targeting_optimization: z
    .array(z.union([z.string(), z.boolean()]))
    .optional(),
  daily_Impression: z
    .number({ invalid_type_error: 'Enter a number' })
    .min(2, 'Daily Impression is required'),
  // top: z.string().min(2, 'Top is required'),

  /* 🚫🚫🚫 Uncomment publisher's contact later */

  publishers_contact: z
    .array(
      z.object({
        name: z.string(),
        contact: z.string(),
      })
    )
    .optional(),

  // ❓❓❓ All these doesn't exist on the design
  // features: z.string().min(2, 'Features must be at least 2 characters'),

  // unlimited_offers: z.enum(['Yes', 'No'], {
  //   required_error: 'Must be Yes or No',
  //   invalid_type_error: 'Must be Yes or No',
  // }),

  // select_device: z.string().min(2, 'Must be at least 2 characters'),
  // select_users: z.string().min(2, 'Must be at least 2 characters'),

  // setup_fees: z
  //   .number({ invalid_type_error: 'Enter a number' })
  //   .positive({ message: 'Must be greater than 0' }),

  // startup_pricing: z
  //   .number({ invalid_type_error: 'Enter a number' })
  //   .positive({ message: 'Must be greater than 0' }),
});

// Make a type for FormData
export type AdvertisingFormData = z.infer<typeof schema>;

const SignUpFormAdvertisingNetwork = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AdvertisingFormData>({ resolver: zodResolver(schema) });

  // field array for publisher contacts

  const {
    fields: publishersContactFields,
    append: publishersContactAppend,
    remove: publishersContactRemove,
  } = useFieldArray({
    control,
    name: 'publishers_contact',
  });

  // field array for advertiser contacts
  const {
    fields: affiliateAdvertiserContactFields,
    append: affiliateAdvertiserContactAppend,
    remove: affiliateAdvertiserContactRemove,
  } = useFieldArray({
    control,
    name: 'affiliate_advertiser_contacts',
  } as never);

  const onSubmit = (data: AdvertisingFormData) => {
    console.log(data);
  };

  return (
    <>
      <form className="my-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <Registration />
        </div>
        <div className="space-y-4">
          {/* -------- name ---------  */}
          <InputField
            label="Name"
            id="title"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />
          {/* -------- Company Email  -------------*/}
          <InputField
            label="Company Email"
            id="company_email"
            placeholder=""
            type="email"
            register={register}
            errors={errors}
          />
          {/* ------------- 📱 📽️ Skype ---------- */}
          <InputField
            label="Skype"
            id="skype"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          {/* ---------- Choose your program  type ------ */}

          <div>
            <label
              htmlFor="programType"
              className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
              Choose your program type
            </label>
            <select
              // Force the value to be Advertisement Network and make it readonly
              disabled
              defaultValue={'Advertising Network'}
              className="h-[37.07px] w-[760px] bg-stone-100 text-center text-xl font-normal text-zinc-800">
              <option value="Advertising Network" className="">
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
            id="network_name"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Network URL"
            id="network_url"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Social Page (Facebook, LinkedIn, Twitter)"
            id="social_page"
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
              id="network_description"
              className="w-full bg-stone-100 pl-2 pt-1"
              {...register('network_description')}
              rows={10}
              cols={1}></textarea>
          </div>
          <div className="text-red-500">
            {errors.network_description?.message}
          </div>

          <InputField
            label="Tags (Ad Network, Ad Server, Ad Exchange, DSP, SSP, RTB, more)"
            id="tag"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />
          {/* ________________________________________________________ */}
          {/* --- CONFUSION: commission type doesn't exit in the backend ---- */}
          {/* ________________________________________________________ */}

          {/* <InputField
            label="Commission Type (CPM, CPC, CPA, RevShare, more)"
            id="base_commission"
            placeholder=""
            type="number"
            register={register}
            errors={errors}
          /> */}

          <InputField
            label="Minimum Payment ($50, $100, more)"
            id="minimum_payment"
            placeholder=""
            type="number"
            register={register}
            errors={errors}
          />

          <InputField
            label="Payment Frequency (Net-30, Net-15, Weekly, Upon Request, more)"
            id="payment_frequency"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />
          {/* <InputField
            label="Minimum Payment ($50, $100, more)"
            id="minimum_payment"
            placeholder=""
            type="number"
            register={register}
            errors={errors}
          /> */}
          <InputField
            label="Payment Method (Check, PayPal, Wire, more)"
            id="payment_method"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          {/* ___________________________________________________________________________ */}
          {/* ------- CONFUSION: Why Referral Commission is included 3 times? -------  */}
          <InputField
            label="Referral Commission (2%, 5%, None, more)"
            id="referral_commission"
            placeholder=""
            type="number"
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
              <div className="mb-[-10px] border border-dashed border-blue-500 ">
                <button
                  onClick={() =>
                    publishersContactAppend({ name: '', contact: '' })
                  }
                  type="button"
                  className="p-[10.30px] text-xl font-normal text-zinc-800 hover:bg-blue-300">
                  +Add
                </button>
              </div>
            </div>
            {/* --- Contact list --- */}
            {publishersContactFields.map((field, index) => {
              return (
                <div
                  className="mb-5 flex flex-wrap items-center gap-6"
                  key={field.id}>
                  <input
                    id="publishersContact1"
                    type="text"
                    placeholder="Name"
                    className="h-[37.07px] w-[236.86px] bg-stone-100 pl-2"
                    {...register(`publishers_contact.${index}.name`)} // This should be name
                  />
                  <input
                    id="PublishersContact2"
                    type="text"
                    placeholder="ex: Email,Skype"
                    className="h-[37.07px] w-[453.12px]  bg-stone-100 pl-2"
                    {...register(`publishers_contact.${index}.contact`)} // This should be contact
                  />
                  {index > 0 && (
                    <button
                      onClick={() => publishersContactRemove(index)}
                      type="button"
                      className="text-xl font-bold">
                      -
                    </button>
                  )}
                </div>
              );
            })}
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
            label="Ad Format (Native, Push, Popunder, Popup, Video, more)"
            id="add_format"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Cost Model (CPM, CPC, more)"
            id="cost_model"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Minimum Deposit ($50, $100 more)"
            id="minimum_deposit"
            placeholder=""
            type="number"
            register={register}
            errors={errors}
          />

          {/* <InputField
            label="Payment Method (Check, PayPal, Wire, more)"
            id="payment_method"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          /> */}

          {/* <InputField
            label="Referral Commission (2%, 5%, None, more)"
            id="referral_commission"
            placeholder=""
            type="number"
            register={register}
            errors={errors}
          /> */}

          <InputField
            label="Daily Impression (100 million, 1 billion, more)"
            id="daily_Impression"
            placeholder=""
            type="number"
            register={register}
            errors={errors}
          />

          {/* ⚠️ ❓❓❓ Backend only has 'top' */}

          {/* <InputField
            label="Top GEO (US, RU, UK, CA, IN, BR, WorldWide, more)"
            id="top"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          />

          <InputField
            label="Top Vertical (Dating, Sweepstakes, Mobile App, Health/Nutra, Forex, more)"
            id="top"
            placeholder=""
            type="text"
            register={register}
            errors={errors}
          /> */}

          {/* <InputField
            label="Referral Commission (2%, 5%, None, more)"
            id="referral_commission"
            placeholder=""
            type="number"
            register={register}
            errors={errors}
          /> */}

          {/* 🚫🚫🚫 Uncomment advertise contact later */}

          {/*Advertisers Contact  */}
          <div className="">
            <div className="my-5 flex items-center gap-x-20 ">
              <div>
                <label
                  htmlFor="publishersContact1"
                  className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
                  Advertisers Contact (optional)
                </label>
              </div>
              <div className="mb-[-10px] border border-dashed border-blue-500 ">
                <button
                  onClick={() =>
                    affiliateAdvertiserContactAppend({ name: '', contact: '' })
                  }
                  type="button"
                  className="p-[10.30px] text-xl font-normal text-zinc-800 hover:bg-blue-300">
                  +Add
                </button>
              </div>
            </div>
            {/* --- Contact list --- */}
            {affiliateAdvertiserContactFields.map((field, index) => {
              return (
                <div
                  className="mb-5 flex flex-wrap items-center gap-6"
                  key={field.id}>
                  <input
                    id="publishersContact1"
                    type="text"
                    placeholder="Name"
                    className="h-[37.07px] w-[236.86px] bg-stone-100 pl-2"
                    {...register(`affiliate_advertiser_contacts.${index}.name`)} // This should be name
                  />
                  <input
                    id="PublishersContact2"
                    type="text"
                    placeholder="ex: Email,Skype"
                    className="h-[37.07px] w-[453.12px]  bg-stone-100 pl-2"
                    {...register(
                      `affiliate_advertiser_contacts.${index}.contact`
                    )} // This should be contact
                  />
                  {index > 0 && (
                    <button
                      onClick={() => affiliateAdvertiserContactRemove(index)}
                      type="button"
                      className="text-xl font-bold">
                      -
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Targeting & Optimization */}
          <div>
            <div className="mb-2 mt-16">
              <label
                htmlFor="targetingOptimization"
                className="mt-4 block text-xl font-extrabold leading-relaxed text-zinc-800">
                Targeting & Optimization:
              </label>
            </div>
            <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 ">
              {targetingOptimization?.map((field, index) => {
                return (
                  <div
                    key={field.id}
                    className="flex  items-center  justify-between">
                    <label
                      htmlFor={field?.id}
                      className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
                      {field?.label}
                    </label>
                    <input
                      id={field.id}
                      type="checkbox"
                      value={field.label}
                      {...register(`targeting_optimization.${index}`)}
                      className=" border border-zinc-800"
                    />
                  </div>
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
              {...register('question_aria')}
              className="w-full bg-stone-100 pl-2 pt-1"
              rows={6}
              cols={1}></textarea>
          </div>
          {errors.question_aria && (
            <div className="text-red-500">{errors.question_aria.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="mt-5 inline-flex h-[45.60px] w-[89.60px] items-start justify-start bg-blue-500 p-[10.30px] text-xl font-normal text-white active:bg-blue-950">
          Submit
        </button>
      </form>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default SignUpFormAdvertisingNetwork;
