const { createSlice } = require("@reduxjs/toolkit");

const FeaturedShopSlice = createSlice({
    name : 'FeaturedData',
    
    initialState : {
        data : {}
    },

    reducers : {
        Add : (state, action) => {state.data = action.payload}
    }
});

export default FeaturedShopSlice.reducer;
export const {Add, } = FeaturedShopSlice.actions;