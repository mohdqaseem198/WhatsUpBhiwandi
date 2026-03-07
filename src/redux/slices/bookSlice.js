import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

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

        updateSlice : (state, action) => {
            state.item = state.item.map((single) => single.id === action.payload.id ? action.payload : single)
        },

        Delete : (state, action) => {
            state.item = state.item.filter((single) => single.id !== action.payload)
        }
    }

});

export const {add, updateSlice, Delete} = BookSlice.actions;
export default BookSlice.reducer;