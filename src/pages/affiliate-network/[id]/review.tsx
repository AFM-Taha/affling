import ImageUploader from '@/components/common/Forms/ImageUploader';
import RatingStars from '@/components/common/Rating/RatingStars';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

export interface AffiliateNetworkReviewFormData {
  name: string;
  email: string;
  review: string;
  payment: number;
  user_interface: number;
  offer: number;
  affiliate_support: number;
  recommend: number;
}

export default function Review() {
  const { register, handleSubmit, setValue } =
    useForm<AffiliateNetworkReviewFormData>();

  const onSubmit = (data: AffiliateNetworkReviewFormData) => {
    console.log(data);
  };

  // Define a function to update the ratings in the form data
  const handleRatingChange = (name: string, rating: number) => {
    setValue(name as keyof AffiliateNetworkReviewFormData, rating); // Update the rating in the form data
  };

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
          <h3 className="text-[26px] font-bold">TopClientOffer</h3>
        </div>
        <div>
          <h3 className="mb-5 text-[26px] font-bold">Overall Rating</h3>
          <div>
            <div className="mb-[10px] flex justify-between">
              <div className="text-lg font-bold text-[#313131]">Payment</div>
              <RatingStars onRatingChange={handleRatingChange} name="payment" />
            </div>
            <div className="mb-[10px] flex justify-between">
              <div className="text-lg font-bold text-[#313131]">
                User Interface
              </div>
              <RatingStars
                onRatingChange={handleRatingChange}
                name="user_interface"
              />
            </div>
            <div className="mb-[10px] flex justify-between">
              <div className="text-lg font-bold text-[#313131]">Offer</div>
              <RatingStars onRatingChange={handleRatingChange} name="offer" />
            </div>
            <div className="mb-[10px] flex justify-between">
              <div className="text-lg font-bold text-[#313131]">
                Affiliate Support
              </div>
              <RatingStars
                onRatingChange={handleRatingChange}
                name="affiliate_support"
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
        <ImageUploader />
        <div className="mt-4">
          <label className="text-xl" htmlFor="review">
            Your Review
          </label>
          <textarea
            {...register('review', { required: true })}
            className="min-h-[200px] w-full rounded-lg bg-[#D9D9D9] px-4 py-3"
            id="review"></textarea>
        </div>
        <button
          className="my-7 rounded-lg bg-[#4E93D3] px-7 py-2 text-xl text-white hover:bg-blue-600"
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
