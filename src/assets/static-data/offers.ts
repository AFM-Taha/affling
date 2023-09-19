
//  submenu items
export type SubmenuItem = {
  name: string;
  totalProduct: number;
};

// Define the data structure for submenus
export type Submenu = SubmenuItem[];

// Define the data structure for menu items
type Menu = {
  id: number;
  name: string;
  slug: string;
  submenus: Submenu;
};

// Define the menu data
export const menus: Menu[] = [
  {
    id: 121,
    name: 'Networks',
    slug: 'networks',
    submenus: [
      { name: 'affiliate-network', totalProduct: 100 },
      { name: 'advertising-network', totalProduct: 20 },
      { name: 'affiliate-program', totalProduct: 34 },
      { name: 'tracking-software', totalProduct: 340 },
      { name: 'marketing-spy-tools', totalProduct: 30 },
    ],
  },
  {
    id: 122,
    name: 'Verticals',
    slug: 'verticals',
    submenus: [
      { name: 'Mobile', totalProduct: 400 },
      { name: 'Tv', totalProduct: 300 },
      { name: 'CPL', totalProduct: 500 },
      { name: 'SOI', totalProduct: 600 },
      { name: 'Sweepstake', totalProduct: 3600 },
      { name: 'Incent', totalProduct: 6300 },
      { name: 'Android', totalProduct: 2600 },
      { name: 'Nutra', totalProduct: 400 },
      { name: 'Dating', totalProduct: 200 },
    ],
  },
  {
    id: 123,
    name: 'Country',
    slug: 'country',
    submenus: [
      { name: 'Worldwide', totalProduct: 77800 },
      { name: 'Afghanistan', totalProduct: 800 },
      { name: 'Aland Islands', totalProduct: 900 },
      { name: 'Albania', totalProduct: 200 },
      { name: 'Algeria', totalProduct: 9000 },
      { name: 'American Samoa', totalProduct: 40 },
      { name: 'Andorra', totalProduct: 10 },
      { name: 'Angola', totalProduct: 300 },
      { name: 'Bangladesh', totalProduct: 50 },
    ],
  },
];

// Define the data structure for offers
export type OffersType = {
  _id: number;
  image: string;
  title: string;
  tag: string;
  categories: string[];
  startup_pricing: number;
  countries: string[];
  vertical: string;
};

// Define the data structure for best offers of the month
export type BestInMonthType = {
  title: string;
  tag: string;
};

// Define the offers data
export const OffersData = [
  {
    _id: 1,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 2,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 3,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 4,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 5,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 6,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 7,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 8,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 9,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 10,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 11,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 12,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 13,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 14,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 15,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 16,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 17,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 18,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 19,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 20,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 21,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 22,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    startup_pricing: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
];

// Define custom advertisements data
export const customAds = [
  {
    image: '/Offer/ad1.png',
  },
  {
    image: '/Offer/ad2.png',
  },
  {
    image: '/Offer/ad3.png',
  },
  {
    image: '/Offer/ad4.png',
  },
  {
    image: '/Offer/ad5.png',
  },
];

// Define the best offers of the month data
export const BestInMonthData = [
  {
    title: 'Adsterra CPA Network',
    tag: ['Utility', 'Calender', 'Dating', 'Offer-105', 'Week'],
  },
  {
    title: 'Adsterra CPA Network',
    tag: ['Utility', 'Calender', 'Dating', 'Offer-105', 'Week'],
  },
  {
    title: 'Adsterra CPA Network',
    tag: ['Utility', 'Calender', 'Dating', 'Offer-105', 'Week'],
  },
  {
    title: 'Adsterra CPA Network',
    tag: ['Utility', 'Calender', 'Dating', 'Offer-105', 'Week'],
  },
];
