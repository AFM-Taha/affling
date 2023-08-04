import RecentPostCard from './RecentPostCard';

export default function NewsCategories() {
  return (
    <div className="rounded-3xl bg-[#EFF5FF] px-4 py-10 font-bold text-[#313131]">
      <h3 className="mb-7 text-2xl">Categories</h3>
      <RecentPostCard
        title="Affiliate Network"
        description="PrivateCPA is a new generation performance"
        date="25 Aug, 2022"
      />
      <RecentPostCard
        title="Affiliate Programme"
        description="PrivateCPA is a new generation performance"
        date="25 Aug, 2022"
      />
      <RecentPostCard
        title="Advertising Networks"
        description="PrivateCPA is a new generation performance"
        date="25 Aug, 2022"
      />
      <RecentPostCard
        title="Tracking Software"
        description="PrivateCPA is a new generation performance"
        date="25 Aug, 2022"
      />
      <RecentPostCard
        title="Market Spy Tools"
        description="PrivateCPA is a new generation performance"
        date="25 Aug, 2022"
      />
    </div>
  );
}
