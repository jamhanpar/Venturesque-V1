import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const receiveUser = createAction('RECEIVE_USER');

export const fetchUser = () => async dispatch => {
    try {
        const res = await axios.get("https://randomuser.me/api");
        console.log(res)
        dispatch(receiveUser(res.data))
    }
    catch (err) {
        console.log(err)
    }
}