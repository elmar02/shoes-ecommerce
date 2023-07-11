import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import languageSlice from "./slices/languageSlice";
import currencySlice from "./slices/currencySlice";

const store = configureStore({
    reducer: {
        theme: themeSlice,
        language: languageSlice,
        currency: currencySlice,
    }
})

export default store