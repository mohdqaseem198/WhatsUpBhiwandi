const { configureStore } = require("@reduxjs/toolkit");
import bookSlice from '../redux/slices/bookSlice';

export const store = configureStore({
    reducer : {
         BooksSlicer : bookSlice  
    }
});