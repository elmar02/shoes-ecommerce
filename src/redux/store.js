import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import languageSlice from "./slices/languageSlice";

const store = configureStore({
    reducer:{
        theme:themeSlice,
        language:languageSlice,
    }
})

export default store