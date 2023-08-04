import NewsCard from '@/components/common/BlogNews/NewsCard';
import NewsCategories from '@/components/common/BlogNews/NewsCategories';
import NewsSearch from '@/components/common/BlogNews/NewsSearch';
import RecentPosts from '@/components/common/BlogNews/RecentPosts';

export default function News() {
  return (
    <div>
      <div className="mb-12 text-center font-bold text-[#313131]">
        <h2 className="mb-6 mt-12 text-3xl">OUR BLOG NEWS</h2>
        <h3 className="text-3xl">We are trying to help people by our blog.</h3>
      </div>
      <div className="gap-6 lg:flex">
        <div>
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <div className="flex flex-col gap-12">
          <NewsSearch />
          <RecentPosts />
          <NewsCategories />
        </div>
      </div>
    </div>
  );
}
