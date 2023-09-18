import { AffiliateNetworkReviewFormData } from '@/pages/affiliate-network/[id]/review';
import { useState } from 'react';
import { BiSolidStar } from 'react-icons/bi';

interface Props {
  onRatingChange: (
    name: keyof AffiliateNetworkReviewFormData,
    rating: number
  ) => void;
  name: keyof AffiliateNetworkReviewFormData;
}

const RatingStars = ({ onRatingChange, name }: Props) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    onRatingChange(name, newRating); // Update the parent component's state
  };

  return (
    <div className="flex gap-2">
      {[...Array(5)].map((_star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? '!text-[#FFAB2D]' : '!text-gray-400'}
            onClick={() => handleRatingChange(index)}>
            <BiSolidStar size={25} />
          </button>
        );
      })}
      <input
        type="number"
        value={rating}
        className="hidden"
        readOnly
        name={name} // Important: Include the name attribute for proper form data binding
      />
    </div>
  );
};

export default RatingStars;
