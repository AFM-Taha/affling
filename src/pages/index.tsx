import {
  AdvertisingNetworks,
  AffiliateNetworks,
  AffiliatePrograms,
  Banner,
  HomeAds,
  MarketingTools,
  StarNetworks,
  TopOffers,
  TopRatedNetworks,
  TrackingSoftware,
} from '@/components/homepage';
import Head from 'next/head';

const Home = ({
  affiliateData,
  programData,
  networkData,
  softwareData,
  marketingSpyData,
  starts,
}: any) => {
  console.log(starts, 'starts');
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
            <StarNetworks starts={starts} />
            <HomeAds />
            <TopOffers />
            <StarNetworks />
            <HomeAds />
          </div>
          <div className="xl:basis-10/12">
            <AffiliateNetworks affiliateData={affiliateData} />
            <AdvertisingNetworks networkData={networkData} />
            <AffiliatePrograms programData={programData} />
            <TrackingSoftware softwareData={softwareData} />
            <TopRatedNetworks />
            <MarketingTools marketingSpyData={marketingSpyData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



// Fetch Data 
export const getStaticProps = async () => {
  // Affiliate Networks
  const res = await fetch(
    'https://lionfish-app-qfe6m.ondigitalocean.app/v1/top-it?page=1&limit=10&filter=Affiliate%20Network'
  );
  const data = await res.json();

  // Advertising Network 2
  const res2 = await fetch(
    'https://lionfish-app-qfe6m.ondigitalocean.app/v1/top-it?page=1&limit=10&filter=Advertising%20Network'
  );
  const data2 = await res2.json();

  // Affiliate Program 3
  const res3 = await fetch(
    'https://lionfish-app-qfe6m.ondigitalocean.app/v1/top-it?page=1&limit=10&filter=Affiliate%20Program'
  );
  const data3 = await res3.json();

  // Tracking Software 4
  const res4 = await fetch(
    'https://lionfish-app-qfe6m.ondigitalocean.app/v1/top-it?page=1&limit=10&filter=Tracking%20Software'
  );
  const data4 = await res4.json();

  // Marketing Spy Tools 6
  const res6 = await fetch(
    'https://lionfish-app-qfe6m.ondigitalocean.app/v1/top-it?page=1&limit=10&filter=Marketing%20Spy%20Tools'
  );
  const data6 = await res6.json();

  // Start
  const res7 = await fetch(
    'https://lionfish-app-qfe6m.ondigitalocean.app/v1/top-it/filter/star'
  );
  const data7 = await res7.json();

  return {
    props: {
      affiliateData: data.offers,
      networkData: data2.offers,
      programData: data3.offers,
      softwareData: data4.offers,
      marketingSpyData: data6.offers,
      starts: data7.offers,
    },
  };
};
