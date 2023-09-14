export type PublisherContact = {
  name: string;
  contact: string;
  _id: string;
};

export type AffiliateDataType = {
  _id: string; 
  title: string; 
  company_email: string; 
  skype: string; 
  program_type: string; 
  network_name: string; 
  network_url: string; 
  social_page: string; 
  network_description: string; 
  minimum_payment: number; 
  payment_frequency: string; 
  payment_method: string; 
  referral_commission: number; 
  question_aria: string; 
  base_commission: string; 
  tag: string; 
  targeting_optimization: any[]; 
  publishers_contact: PublisherContact[]; 
  affiliate_advertiser_contacts: any[]; 
  createdAt: string;
  updatedAt: string;
  __v: number;
  reviews: any[]; 
  status: string;
};

export const FakeData = [
  {
    _id: 311,
    serialNo: 1,
    status: 'Active',
    createdAt: '14/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 30,
  },
  {
    _id: 312,
    serialNo: 2,
    status: 'Sponsor',
    createdAt: '1/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 30,
  },
  {
    _id: 313,
    serialNo: 3,
    status: 'Premium Sponsor',
    createdAt: '2/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 30,
  },
  {
    _id: 314,
    serialNo: 4,
    status: 'Active',
    createdAt: '3/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 15,
  },
  {
    _id: 315,
    serialNo: 5,
    status: 'Active',
    createdAt: '5/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 30,
  },
  {
    _id: 316,
    serialNo: 6,
    status: 'Sponsor',
    createdAt: '4/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 15,
  },
  {
    _id: 317,
    serialNo: 7,
    status: 'Premium Sponsor',
    createdAt: '6/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 30,
  },
  {
    _id: 318,
    serialNo: 8,
    status: 'Premium Sponsor',
    createdAt: '11/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 15,
  },
  {
    _id: 319,
    serialNo: 9,
    status: 'Active',
    createdAt: '12/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 15,
  },
  {
    _id: 320,
    serialNo: 10,
    status: 'Sponsor',
    createdAt: '11/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 30,
  },
  {
    _id: 321,
    serialNo: 11,
    status: 'Sponsor',
    createdAt: '13/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 15,
  },
  {
    _id: 322,
    serialNo: 12,
    status: 'Active',
    createdAt: '15/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 15,
  },
  {
    _id: 323,
    serialNo: 13,
    status: 'Active',
    createdAt: '8/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 30,
  },
  {
    _id: 324,
    serialNo: 14,
    status: 'Premium Sponsor',
    createdAt: '7/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 15,
  },
  {
    _id: 325,
    serialNo: 15,
    status: 'Sponsor',
    createdAt: '11/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 30,
  },
  {
    _id: 326,
    serialNo: 16,
    status: 'Active',
    createdAt: '11/07/2023',
    companyName: 'Affling',
    NoOfOffers: 100,
    email: 'rupok@topclientoffer.com',
    manager: 'rupok',
    IMSkype: 'live:843d8cd2d31a5282',
    payment: 'Paypal/BTC',
    duration: 30,
  },
];
