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
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Affling </title>
        <link rel="icon" href="/affling-logo.svg" />
      </Head>
      <div className="px-3 lg:px-12">
        <Banner />
        <div className="flex flex-col-reverse gap-6 px-1 py-12 xl:flex-row">
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
