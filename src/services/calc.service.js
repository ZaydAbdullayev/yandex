import { useDispatch } from "react-redux";
import { acPrice } from "../redux/price";

export const CalculateTotalPrice = (cart) => {
  const dispatch = useDispatch();
  const totalPrice = cart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity + 5000,
    0
  );
  dispatch(acPrice(totalPrice));
  return totalPrice;
};
