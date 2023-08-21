import React from 'react';
import Image from 'next/image';
import { BiSolidStar } from 'react-icons/bi';

const reviewCards = [
  {
    avatar: '/man-profile-pic.webp',
    name: 'John Doe',
    date: 'Aug 18, 2022',
    reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit bibendum eget quis dictum euismod massa interdum. Doneclibero, habitant pulvinar eget felis. Ac neque orci faucibus estlacus, libero quisque. Neque aenean cras amet sapien, morbi imperdiet imperdiet tincidunt tortor. Turpis elementum felis, mus cras. Mi, non porttitor platea nullam tellus vel, id enimnulla. Sagittis nibh scelerisque massa enim volutpat tellus at ligula non.",

    screenshot: '/review-ss.png',
    categories: [
      { label: 'Payment', stars: 5 },
      { label: 'User Interface', stars: 5 },
      { label: 'Offers', stars: 5 },
      { label: 'Affiliate Support', stars: 5 },
      { label: 'Recommend', stars: 5 },
    ],
  },
  {
    avatar: '/man-profile-pic.webp',
    name: 'Jane Smith',
    date: 'Sep 10, 2022',
    reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit bibendum eget quis dictum euismod massa interdum. Doneclibero, habitant pulvinar eget felis. Ac neque orci faucibus estlacus, libero quisque. Neque aenean cras amet sapien, morbi imperdiet imperdiet tincidunt tortor. Turpis elementum felis, mus cras. Mi, non porttitor platea nullam tellus vel, id enimnulla. Sagittis nibh scelerisque massa enim volutpat tellus at ligula non.",
    screenshot: '/review-ss.png',
    categories: [
      { label: 'Payment', stars: 4 },
      { label: 'User Interface', stars: 3 },
      { label: 'Offers', stars: 5 },
      { label: 'Affiliate Support', stars: 4 },
      { label: 'Recommend', stars: 4 },
    ],
  },
];

const ReviewCard = () => {
  return (
    <div className="my-10  ">
      {reviewCards?.map((review, index) => (
        <div key={index} className='mt-20 bg-white pb-[46px] pl-[58px] pr-[87px] pt-[14px] shadow-xl'>
          <div className="flex items-center gap-2">
            <div className="relative h-[56px] w-[56px]">
              <Image
                className="rounded-full object-cover"
                objectPosition="top"
                src={review.avatar}
                alt={`user-avatar-${index}`}
                layout="fill"
              />
            </div>
            <div>
              <div className="font-bold">{review.name}</div>
              <div>{review.date}</div>
            </div>
          </div>
          {/* ... Other parts of the review card ... */}
          <p className="mt-6">{review.reviewText}</p>
          <div className="relative mb-7 mt-5 h-[154px] w-[311px] shadow-lg">
            <Image
              src={review.screenshot}
              alt={`review-screenshot-${index}`}
              layout="fill"
              objectFit="center"
            />
          </div>
          <div className="flex flex-col gap-2">
            {review.categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="flex max-w-[420px] items-center justify-between"
              >
                <div className="text-[26px] font-bold text-[#313131]">
                  {category.label}
                </div>
                <div className="flex">
                  {Array.from({ length: category.stars }).map((_, starIndex) => (
                    <BiSolidStar key={starIndex} size={25} color="#FFAB2D" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
