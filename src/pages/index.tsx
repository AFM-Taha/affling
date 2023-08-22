import {
  AdvertisingNetworks,
  AdvertisingPrograms,
  AffiliateNetworks,
  Banner,
  HomeAds,
  MarketingTools,
  StarNetworks,
  TopOffers,
  TopRatedNetworks,
  TrackingSoftware,
} from '@/components/homepage';

const Home = () => {
  return (
    <div>
      <div className="px-3 lg:px-12">
        <Banner />
        <div className="flex flex-col-reverse xl:flex-row gap-6 px-4 py-12">
          <div className="hidden xl:block xl:basis-2/12">
            <StarNetworks />
            <HomeAds />
            <TopOffers />
            <StarNetworks />
            <HomeAds />
          </div>
          <div className="xl:basis-10/12">
            <AffiliateNetworks />
            <AdvertisingNetworks />
            <AdvertisingPrograms />
            <TrackingSoftware />
            <TopRatedNetworks />
            <MarketingTools />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
