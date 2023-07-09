import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: {
    isDark: false,
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = {
        ...state.theme,
        isDark: action.payload,
      };
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
