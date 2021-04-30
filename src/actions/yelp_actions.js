import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const receiveRestaurants = createAction('RECEIVE_RESTAURANTS');

export const fetchRestaurants = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/questions')
        dispatch(receiveRestaurants(res.data))
    }
    catch (err) {
        console.log(err)
    }
}