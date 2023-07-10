import { createSlice } from '@reduxjs/toolkit';
import English from "@/pages/api/languages/en.json"
import Turkish from "@/pages/api/languages/tr.json"
import Azerbaijani from "@/pages/api/languages/az.json"
const initialState = {
    lang:'en',
    languages:{
        en:English,
        tr:Turkish,
        az:Azerbaijani
    }
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state,action){
        state.lang= action.payload;
    }
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;