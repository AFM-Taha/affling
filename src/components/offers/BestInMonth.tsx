import { BestInMonthData } from '@/assets/static-data/offers';
import { BsArrowRightCircle } from 'react-icons/bs';

const BestInMonth = () => {
  return (
    <div className="">
      <div className="flex space-x-5 py-6">
        <h2 className="text-lg font-bold lg:text-xl">
          Best Network in this month
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none">
          <path
            d="M14.1115 14.0426C13.4371 14.7168 12.5225 15.0956 11.5688 15.0956C10.6151 15.0956 9.70048 14.7168 9.02603 14.0426M8.87138 9.70154H8.88037M14.2662 9.70154H14.2752M19.661 11.4998C19.661 12.5625 19.4517 13.6148 19.045 14.5966C18.6383 15.5784 18.0423 16.4704 17.2908 17.2219C16.5394 17.9733 15.6473 18.5694 14.6655 18.976C13.6837 19.3827 12.6315 19.592 11.5688 19.592C10.5061 19.592 9.45382 19.3827 8.47202 18.976C7.49023 18.5694 6.59815 17.9733 5.84672 17.2219C5.09529 16.4704 4.49922 15.5784 4.09255 14.5966C3.68587 13.6148 3.47656 12.5625 3.47656 11.4998C3.47656 9.35362 4.32913 7.29533 5.84672 5.77775C7.3643 4.26016 9.42259 3.40759 11.5688 3.40759C13.715 3.40759 15.7733 4.26016 17.2908 5.77775C18.8084 7.29533 19.661 9.35362 19.661 11.4998Z"
            stroke="black"
            stroke-width="1.79827"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className='
      shadow-md px-3 '>
        {BestInMonthData.map((el, index) => (
          <div key={index} className=' border-b '>
            <div className="flex space-x-4 pt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="45"
                viewBox="0 0 44 45"
                fill="none">
                <circle cx="21.9738" cy="22.5534" r="21.5793" fill="#D9D9D9" />
              </svg>
              <div className='flex justify-between space-x-4 items-center'>
                <h3 className="font-bold ">{el.title}</h3>
                <button className="flex items-center space-x-1 rounded-md bg-[#4E93D3] px-2 text-[#fff]">
                  <span className="text-sm">Join</span>
                  <BsArrowRightCircle className="text-lg" />
                </button>
              </div>
            </div>
            <div className="pb-3.5 pt-5 lg:ml-2.5">
              {el.tag.map((item, index) => (
                <button
                  key={index}
                  className="border-1 mr-2 rounded-[10px] border bg-[#4E93D3] px-1.5 text-xs text-white">
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestInMonth;
