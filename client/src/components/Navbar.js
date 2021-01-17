import React from 'react';
import { Logout } from '../actions'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import history from '../BrowserHistory'
import { connect } from 'react-redux';
import '../components/css/Navbar.css'


const NavBar = (props) => {

    const auth = useSelector(state => state.auth)

    const { user, isLogged } = auth;

    const handleLogout = async () => {
        try {
            await props.Logout();
            localStorage.removeItem('firstLogin')
            history.push('/')
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
            <ul>
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

export default connect(null,{ Logout })(NavBar);