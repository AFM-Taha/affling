import ImageUploader from '@/components/common/Forms/ImageUploader';
import RatingStars from '@/components/common/Rating/RatingStars';
import useGet from '@/hooks/useGet';
import usePut from '@/hooks/usePut';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { FetchedMarketingSpyTools } from './profile';

export interface MarketingSpyToolsReviewFormData {
  name: string;
  email: string;
  image: any;
  review: string;
  payment: number;
  features: number;
  customer_support: number;
  ads_scraping: number;
  scraping_campaigns: number;
  recommend: number;
}

export default function Review() {
  const { query } = useRouter();

  const { data: fetchedData } = useGet<FetchedMarketingSpyTools>(
    `top-it/${query.id}`
  );

  const {
    mutate,
    isLoading,
    isError,
    data: response,
  } = usePut(`top-it/review/${query.id}`);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<MarketingSpyToolsReviewFormData>();

  const onSubmit = async (data: MarketingSpyToolsReviewFormData) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('review', data.review);
    formData.append('payment', String(data.payment));
    formData.append('features', String(data.features));
    formData.append('customer_support', String(data.customer_support));
    formData.append('ads_scraping', String(data.ads_scraping));
    formData.append('scraping_campaigns', String(data.scraping_campaigns));
    formData.append('recommend', String(data.recommend));
    formData.append('image', data.image[0]);

    console.log(formData, 'formData');

    mutate(formData);

    console.log(response);
  };

  // Define a function to update the ratings in the form data
  const handleRatingChange = (name: string, rating: number) => {
    setValue(name as keyof MarketingSpyToolsReviewFormData, rating); // Update the rating in the form data
  };

  console.error(errors);

  return (
    <div className="max-w-[648px] pl-[49px] pt-[49px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-12 flex items-center gap-2">
          <Image
            src="/topclientofffer.png"
            alt="topclientofffer"
            height={42}
            width={42}
          />
          <h3 className="text-[26px] font-bold">{fetchedData?.data.title}</h3>
        </div>
        <div>
          <h3 className="mb-5 text-[26px] font-bold">Overall Rating</h3>
          <div>
            <div className="mb-[10px] flex justify-between">
              <div className="text-lg font-bold text-[#313131]">Payment</div>
              <RatingStars onRatingChange={handleRatingChange} name="payment" />
            </div>
            <div className="mb-[10px] flex justify-between">
              <div className="text-lg font-bold text-[#313131]">Features</div>
              <RatingStars
                onRatingChange={handleRatingChange}
                name="features"
              />
            </div>

            <div className="mb-[10px] flex justify-between">
              <div className="text-lg font-bold text-[#313131]">
                Customer Support
              </div>
              <RatingStars
                onRatingChange={handleRatingChange}
                name="customer_support"
              />
            </div>
            <div className="mb-[10px] flex justify-between">
              <div className="text-lg font-bold text-[#313131]">
                Ads Scraping
              </div>
              <RatingStars
                onRatingChange={handleRatingChange}
                name="ads_scraping"
              />
            </div>
            <div className="mb-[10px] flex justify-between">
              <div className="text-lg font-bold text-[#313131]">
                Scraping Campaigns
              </div>
              <RatingStars
                onRatingChange={handleRatingChange}
                name="scraping_campaigns"
              />
            </div>
            <div className="mb-[10px] flex justify-between">
              <div className="text-lg font-bold text-[#313131]">Recommend</div>
              <RatingStars
                onRatingChange={handleRatingChange}
                name="recommend"
              />
            </div>
          </div>
        </div>

        <label className="text-xl" htmlFor="name">
          Name
        </label>
        <input
          {...register('name', { required: true })}
          className="mb-4 mt-1 h-[45px] w-full rounded-lg bg-[#D9D9D9] px-4 py-1"
          type="text"
          id="name"
        />
        <label className="text-xl" htmlFor="email">
          Email
        </label>
        <input
          {...register('email', { required: true })}
          className="mt-1 h-[45px] w-full rounded-lg bg-[#D9D9D9] px-4 py-1"
          type="text"
          id="email"
        />
        <h3 className="mb-2 mt-10 text-[26px] font-bold">
          Upload Your Affiliate Payment Screenshot
        </h3>
        <ImageUploader register={register} />
        <div className="mt-4">
          <label className="text-xl" htmlFor="review">
            Your Review
          </label>
          <textarea
            {...register('review', { required: true })}
            className="min-h-[200px] w-full rounded-lg bg-[#D9D9D9] px-4 py-3"
            id="review"></textarea>
        </div>
        {isError && <p className="text-red-500">Failed!</p>}
        <button
          disabled={isLoading}
          className="my-7 rounded-lg bg-[#4E93D3] px-7 py-2 text-xl text-white hover:bg-blue-600 disabled:opacity-30"
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
