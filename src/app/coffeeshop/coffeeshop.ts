export class Coffeeshop {
  isOpenNow: number;
  id: number;
  name: string;
  rating: number;
  status: number;
  longitude: number;
  latitude: number;
  reviewsCount: any;
  owner: User;
  pictures: Picture[];
  reviews: Review[];
  prices: number[]; // empty in json
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
  isVip: number;
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
  ratingCoffee: number;
  ratingService: number;
  ratingPrices: number;
  user: User;
}
