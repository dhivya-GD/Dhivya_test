import {createSlice} from "@reduxjs/toolkit";

const cartslice = createSlice({
      name:"cart",
      initialState: {
          items:["banana","Apple"],
      },
      reducers: {
        addItem:(state,action)=> {
            state.items.push(action);
        },
        removeItem: (state,action)=>{},
        clearItem: (state)=>{},
      },
});

export default cartslice.reducer;
export const {addItem, removeItem, clearItem} = cartslice.actions;
