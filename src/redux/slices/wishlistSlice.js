import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    likedIds:[],
    first: true,
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        setLikes(state,action){
            state.likedIds = action.payload
        },
        changeLiked(state, action) {
            state.first=false
            const isExist = state.likedIds.includes(action.payload)
            if(!isExist) state.likedIds.push(action.payload);
            else state.likedIds = state.likedIds.filter((id)=> id!=action.payload)
        },
        setFalse(state){
            state.first=false;
        }
    },
});

export const {changeLiked,setLikes,setFalse} = wishlistSlice.actions;
export default wishlistSlice.reducer;