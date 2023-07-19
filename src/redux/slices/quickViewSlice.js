import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    display: 'hidden',
};

const quickViewSlice = createSlice({
    name: 'quickView',
    initialState,
    reducers: {
        setDisplay(state,action){
           state.display = action.payload
        }
    }
});

export const { setDisplay } = quickViewSlice.actions;
export default quickViewSlice.reducer;