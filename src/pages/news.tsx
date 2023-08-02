import NewsCard from '@/components/common/BlogNews/NewsCard';
import NewsCategories from '@/components/common/BlogNews/NewsCategories';
import NewsSearch from '@/components/common/BlogNews/NewsSearch';
import RecentPost from '@/components/common/BlogNews/RecentPost';

export default function News() {
  return (
    <div>
      <div className="mb-12 text-center font-bold text-[#313131]">
        <h2 className="mb-6 mt-12 text-3xl">OUR BLOG NEWS</h2>
        <h3 className="text-3xl">We are trying to help people by our blog.</h3>
      </div>
      <div className="lg:flex">
        <div>
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <div>
          <NewsSearch />
          <RecentPost />
          <NewsCategories />
        </div>
      </div>
    </div>
  );
}
