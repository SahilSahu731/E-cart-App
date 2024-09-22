
import {createSlice} from '@reduxjs/toolkit'

const initialState = []

const CartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addtocart(state, action){
            console.log(action);          
            state.push(action.payload)
        },
        removefromcart(state, action){

            return state.filter(item=> item.id !== action.payload)
        }
    },
})

export const {addtocart, removefromcart} = CartSlice.actions

export default CartSlice.reducer ;