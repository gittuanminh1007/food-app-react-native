import { ImageSourcePropType } from "react-native";

export interface Category {
  id: string;
  title: string;
  icon: ImageSourcePropType;
}

export interface Food {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  readyTime: number;
  images: string;
}

export interface Coupon {
  id: string;
  name: string;
  value: number;
  description: string;
  condition: number;
}

export interface CouponState {
  list: Coupon[];
}

export interface Cart {
  food: Food;
  unit: number;
}

export interface CartState {
  list: Cart[];
}

export interface FoodAvailability {
  categories: Category[];
  foods: Food[];
}
