import RecentPostCard from './RecentPostCard';

export default function RecentPosts() {
  return (
    <div className="rounded-3xl bg-[#EFF5FF] px-4 py-10 font-bold text-[#313131]">
      <h3 className="mb-7 text-2xl">Recent Post</h3>
      <RecentPostCard />
      <RecentPostCard />
      <RecentPostCard />
    </div>
  );
}
