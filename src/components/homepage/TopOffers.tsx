import { TopTenNetworkData } from '@/assets/static-data/homepage/TopTenNetwork';

const TopOffers = () => {
  return (
    <div>
      <div className="my-16 bg-[#E9F3F2] px-3 py-3">
        <h3 className="pb-3 pl-3 font-bold">Top 10 Rated Networks</h3>
        <div>
          {TopTenNetworkData.map((el, index) => (
            <div
              key={index}
              className="customShadow mb-3 flex items-center justify-between px-3 py-2">
              <div className="flex space-x-2">
                <p className="bg-[#4E93D3] px-2 font-bold text-white">
                  {index + 1}
                </p>
                <p className="font-bold">{el.name}</p>
              </div>
              <div className="flex space-x-3">
                <button className="rounded-lg bg-[#4E93D3] px-2 text-sm text-white">
                  Offers {el.Offers}
                </button>
                <p className="text-[#FFAB2D] font-bold">{el.ratings}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopOffers;
