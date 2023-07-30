import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import languageSlice from "./slices/languageSlice";
import currencySlice from "./slices/currencySlice";
import quickViewSlice from "./slices/quickViewSlice";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        theme: themeSlice,
        language: languageSlice,
        currency: currencySlice,
        quickView: quickViewSlice,
        wishlist: wishlistSlice,
        cart: cartSlice,
    }
})

export default store