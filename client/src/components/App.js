import React,{useEffect} from 'react';
import { Router, Route } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {dispatchLogin, fetchUser, dispatchGetUser} from '../actions'
import BrowserHistory from '../BrowserHistory';
import axios from 'axios'

//Navbar
import NavBar from './Navbar';
//Form
import LoginPage from '../components/Form/Login';
//Page
import HomePage from '../components/Page/Home'

const App =()=>{

    const dispatch = useDispatch()
    const token = useSelector(state => state.token)
    const auth = useSelector(state => state.auth)
    console.log(token);
    console.log(auth)

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
          const getToken = async () => {
            const res = await axios.post('/user/refresh_token', null)
            dispatch({type:'GET_TOKEN', payload: res.data.access_token})
            console.log(res.data.access_token);
          }
          getToken()
        }
      },[auth.isLogged, dispatch])
    
      useEffect(() => {
        if(token){
          const getUser = () => {
            dispatch(dispatchLogin())
    
            return fetchUser(token).then(res => {
              dispatch(dispatchGetUser(res))
            })
          }
          getUser()
        }
      },[token, dispatch])

    return (
        <div>
            <Router history={BrowserHistory}>
                <NavBar/>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
            </Router>
        </div>
    )
}

export default App