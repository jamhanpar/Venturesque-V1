import { createReducer } from '@reduxjs/toolkit';

const initialState = {}

export const restaurantReducer = createReducer(initialState, builder => {
    builder
        .addCase('RECEIVE_RESTAURANTS', (state, action) => {
            return action.payload
        })
        .addDefaultCase((state, action) => {
            return state
        })
})