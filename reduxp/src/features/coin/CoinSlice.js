import { createSelector } from "@reduxjs/toolkit";

export const counterSlice= createSelector({
name:'counter',
initialState:{
    value:0
},
reducers:{
    divide:state=>{
        state.value /=2
    }
}
})

export const {divide} = counterSlice.actions
export default counterSlice.reducers