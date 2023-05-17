import { createSlice } from "@reduxjs/toolkit";


const Cartslice = createSlice({
    name:'cart',
    initialState: {
        items: [],
    },
    reducers:{
        addItem: (state,action)=>{
           state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
           state.items = state.items.filter(item => item.id != action.payload)
           
       },
        clearCart: (state)=>{
            state.items =[]
        }
    }
})
export const {addItem, removeItem, clearCart} = Cartslice.actions;
export default Cartslice.reducer;