import {LOGIN, GET_USER,LOGOUT} from './types';
import axios from 'axios';

export const dispatchLogin = () => {
    return {
        type: LOGIN
    }
}

export const fetchUser = async (token) => {
    const res = await axios.get('/user/infor', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetUser = (res) => {
    return {
        type: GET_USER,
        payload: {
            user: res.data,
            isAdmin: res.data.role === 1 ? true : false
        }
    }
}

export const Logout = () => async dispatch => {
    const res = await axios.get('/user/logout')
    dispatch({ type: LOGOUT, payload: res.data })
}