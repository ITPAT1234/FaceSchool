import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import history from '../BrowserHistory'
import axios from 'axios'
import '../components/css/Navbar.css'


const NavBar = (props) => {

    const auth = useSelector(state => state.auth)

    const { user, isLogged } = auth;

    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.reload();
            history.push('/');
        } catch (err) {
            history.push('/');
        }
    }

    const userLink = () => {
        return <li className="drop-nav">
            <Link to="#" className="avatar">
                <img src={user.user_picture} alt="" /> {user.name} <i className="angle down icon"></i>
            </Link>
            <ul className="dropdown"> 
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>
    }

    const transForm = {
        transform: isLogged ? "translateY(-5px)" : 0
    }

    return (
        <header>
            <div className="logo">
                <h1><Link to="/">FaceSchool</Link></h1>
            </div>
            <div className="search">
                <input type="text" className="search_input" placeholder="Serach ..." />
                <button type="submit" className="search_button">
                    <i className="search icon"></i>
                </button>
            </div>
            <ul style={transForm}>
                <li>
                    <div className="cart-icon">
                        <span>0</span>
                        <Link to="/cart"><i className="shopping cart icon"></i></Link>
                    </div>
                </li>
                
                {
                    isLogged
                        ? userLink()
                        : <li><Link to='/login'><i className="user icon"></i>Sign in</Link></li>
                }
            </ul>
        </header>
    )
}

export default NavBar;