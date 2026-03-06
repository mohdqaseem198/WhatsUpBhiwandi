import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({
    name : "book",
    initialState : {
        item : []
    },

    reducers : {
        add : (state, action) => {            
            const exists = state.item.find(
              (single) => single.id === action.payload.id
            );
        
            if (!exists) {
              state.item.push(action.payload);
            }
        },

        Delete : (state, action) => {
            state.item = state.item.filter((single) => single.id !== action.payload)
        }
    }

});

export const {add,  Delete} = BookSlice.actions;
export default BookSlice.reducer;