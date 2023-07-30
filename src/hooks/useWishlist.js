import { setFalse, setLikes } from "@/redux/slices/wishlistSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const useWishlist = () => {
    const likedIds = useSelector((state) => state.wishlist.likedIds)
    const first = useSelector((state) => state.wishlist.first)
    const dispatch = useDispatch();
    useEffect(() => {
        const storedLikedIds = JSON.parse(localStorage.getItem("wishlist")) || [];
        dispatch(setLikes(storedLikedIds));
        dispatch(setFalse());
    }, [dispatch]);

    useEffect(() => {
        if (!first) {
            localStorage.setItem("wishlist", JSON.stringify(likedIds));
        }
    }, [likedIds]);

    return {};
};

export default useWishlist;
