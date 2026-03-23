const { configureStore } = require("@reduxjs/toolkit");
import bookSlice from '../redux/slices/bookSlice';
import featuredCardShop from '../redux/slices/FeaturedShopSlice';

export const store = configureStore({
    reducer : {
         BooksSlicer : bookSlice,
         FeaturedShopSlicer : featuredCardShop
    }
});