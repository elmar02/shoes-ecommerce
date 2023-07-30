import { cartActions } from "@/redux/slices/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCart = () => {
    const products = useSelector((state) => state.cart.inCart)
    const totalPrice = useSelector((state) => state.cart.totalPrice)
    const first = useSelector((state) => state.cart.first)
    const dispatch = useDispatch();
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart"))||[]
        dispatch(cartActions.setCart(storedCart));
        dispatch(cartActions.setFalse());
    }, [dispatch]);

    useEffect(() => {
        const cart = {
            products: products,
            totalPrice:totalPrice
        }
        if (!first) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [products,totalPrice]);

    return {};
};

export default useCart;