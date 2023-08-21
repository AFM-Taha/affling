import {
  Banner,
  AdvertisingNetworks,
  AdvertisingPrograms,
  AffiliateNetworks,
  MarketingTools,
  StarNetworks,
  TopOffers,
  TopRatedNetworks,
  TrackingSoftware,
} from '@/components/homepage';

const Home = () => {
  return (
    <div>
      <div className='px-12'>
        <Banner />
        <AdvertisingNetworks />
        <AdvertisingPrograms />
        <AffiliateNetworks />
        <MarketingTools />
        <StarNetworks />
        <TopOffers />
        <TopRatedNetworks />
        <TrackingSoftware />
      </div>
    </div>
  );
};

export default Home;
