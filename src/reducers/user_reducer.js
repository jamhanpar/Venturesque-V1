import { createReducer } from '@reduxjs/toolkit';

const initialState = {}

export const userReducer = createReducer(initialState, builder => {
    builder
        .addCase('RECEIVE_USER', (state, action) => {
            state = action.payload
        })
        .addDefaultCase((state, action) => {
            return state
        })
})