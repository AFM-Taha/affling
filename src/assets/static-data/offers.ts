/**
 * Offers and Menu Data Configuration [Fake data]
 *
 * Contents:
 * - SubmenuItem: Defines the structure for a submenu item.
 * - Submenu: Defines the structure for a submenu containing multiple submenu items.
 * - Menu: Defines the structure for a menu containing a name and submenus.
 * - menus: An array of Menu objects, representing different sections of the application.
 * - OffersType: Defines the structure for an offer.
 * - BestInMonthType: Defines the structure for the best offers of the month.
 * - OffersData: An array of OffersType objects, representing different offers.
 * - customAds: An array of custom advertisement objects.
 * - BestInMonthData: An array of BestInMonthType objects representing the best offers of the month.
 *
 * Usage:
 * - Use the defined data structures and arrays to populate different sections of our application.
 */

// Define the data structures for submenu items
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
  submenus: Submenu;
};

// Define the menu data
export const menus: Menu[] = [
  {
    id: 121,
    name: 'Networks',
    submenus: [
      { name: '1 Click Wonder', totalProduct: 100 },
      { name: '1win Partners', totalProduct: 20 },
      { name: '1xBet Partners', totalProduct: 34 },
      { name: '1xSlot Partners', totalProduct: 340 },
      { name: '249 Media', totalProduct: 30 },
      { name: '360 Affiliates', totalProduct: 500 },
      { name: '3snet', totalProduct: 5600 },
      { name: 'A4D', totalProduct: 800 },
    ],
  },
  {
    id: 122,
    name: 'Verticals',
    submenus: [
      { name: 'Mobile', totalProduct: 400 },
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
  price: number;
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
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 2,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 3,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 4,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 5,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 6,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 7,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 8,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 9,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 10,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 11,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 12,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 13,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 14,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 15,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 16,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 17,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 18,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 19,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 20,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 21,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
    countries: ['US', 'CA', 'UK', 'AU', 'IT', 'DE'],
    vertical: 'Sweeptakes',
  },
  {
    _id: 22,
    image: '/Offer/OfferDataImage.svg',
    title: 'Sweeptakes - Mob/ Web/ Tab',
    tag: 'TopClientOffer',
    categories: ['SOI,DOI', 'SALES'],
    price: 10,
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
