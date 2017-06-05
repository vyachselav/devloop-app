export class Coffeeshop {
  isOpenNow: number;
  id: number;
  name: string;
  description: string;
  rating: number;
  status: number;
  longitude: number;
  latitude: number;
  reviewsCount: number;
  author: Author;
  owner: User;
  pictures: Picture[];
  reviews: Review[];
  prices: Price[];
  workMo: number;
  openedMo: string;
  closedMo: string;
  workTu: number;
  openedTu: string;
  closedTu: string;
  workWe: number;
  openedWe: string;
  closedWe: string;
  workTh: number;
  openedTh: string;
  closedTh: string;
  workFr: number;
  openedFr: string;
  closedFr: string;
  workSa: number;
  openedSa: string;
  closedSa: string;
  workSu: number;
  openedSu: string;
  closedSu: string;
  address: string;
  skype: string;
  phone: string;
  email: string;
  viber: string;
  telegram: string;
  isVip: number;
}

export interface Author {
  id: number;
  name: string;
  email: string;
  status: number;
  picture: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  status: number;
  phone: string;
  picture: string;
  about: string;
}

export interface Picture {
  id: number;
  url: string;
  size: string;
  type: string;
}

export interface Review {
  date: string;
  id: number;
  text: string;
  averageRating: number;
  pluses: string;
  minuses: string;
  ratingCoffee: number;
  ratingService: number;
  ratingPrices: number;
  user: User;
}

export interface Price {
  id: number;
  cost: number;
  isCustom: number;
  service: Service;
}

export interface Service {
  id: number;
  name: string;
  averageCost: number;
}
