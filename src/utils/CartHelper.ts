import { CartState, Food } from "../redux/models/index";

export const check = (item: Food, Cart: CartState) => {
  let currentItem = Cart.list.filter(
    (cartItem) => cartItem.food._id == item._id
  );

  if (currentItem.length > 0) {
    return true;
  }
  return false;
};

export const checkExistence = (item: Food, Cart: Food[]) => {
  if (Array.isArray(Cart)) {
    let currentItem = Cart.filter((cartItem) => cartItem._id == item._id);

    if (currentItem.length > 0) {
      return currentItem[0];
    }
  }
  return item;
};

export const checkInCart = (item: Food, Cart: CartState) => {
  if (Array.isArray(Cart.list)) {
    const index = Cart.list.findIndex(
      (cartItem) => cartItem.food._id == item._id
    );
    if (index != null) {
      return Cart.list[index];
    }
  }
  return item;
};
