import { Progress } from '@/components/ui/progress';

export default function RatingDistribution() {
  return (
    <div className="ml-7 min-w-[424px]">
      <h5 className="mb-6 text-lg font-bold">Rating Distribution</h5>
      <div className="flex items-center  gap-2">
        <p className="">5 star</p>
        <Progress
          className="h-3 w-[326px] border border-[#4E93D3] bg-[#EBEDED]"
          value={68}
        />
        <p className="">68%</p>
      </div>
      <div className="flex items-center  gap-2">
        <p className="">4 star</p>
        <Progress
          className="h-3 w-[326px] border border-[#4E93D3] bg-[#EBEDED]"
          value={20}
        />
        <p className="">20%</p>
      </div>
      <div className="flex items-center  gap-2">
        <p className="">3 star</p>
        <Progress
          className="h-3 w-[326px] border border-[#4E93D3] bg-[#EBEDED]"
          value={10}
        />
        <p className="">10%</p>
      </div>
      <div className="flex items-center  gap-2">
        <p className="">2 star</p>
        <Progress
          className="h-3 w-[326px] border border-[#4E93D3] bg-[#EBEDED]"
          value={2}
        />
        <p className="">2%</p>
      </div>
      <div className="flex items-center  gap-2">
        <p className="">1 star</p>
        <Progress
          className="h-3 w-[326px] border border-[#4E93D3] bg-[#EBEDED]"
          value={0}
        />
        <p className="">0%</p>
      </div>
    </div>
  );
}
