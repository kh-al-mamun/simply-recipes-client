// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import './Header.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { menuIcon } from '../../../Icons';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    let element = '';
    if(user){
        if(user.photoURL){
            element = <img src={user.photoURL} alt="" title={user.displayName}/>
        } else if(user.displayName){
            element = <p>{user.displayName.toUpperCase().slice(0, 1)}</p>
        } else{
            element = <p>{user.email.toUpperCase().slice(0, 1)}</p>
        }
    }

    return (
        <div className='header container'>
            <div className='logo-and-menu'>
                <Link to={'/'}><img className='logo' src="assets/icons/logo.svg" alt="" /></Link>
                <button onClick={() => setOpenMenu(!openMenu)} className='menu-icon'>{menuIcon}</button>
            </div>
            <nav className={openMenu ? 'h-md-nav' : 'h-md-zero'}>
                <br />
                <NavLink to={'/'} className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>

                <NavLink to={'/blog'} className={({isActive}) => isActive ? 'active-link' : ''}>Blog</NavLink>

                <NavLink to={'/about'} className={({isActive}) => isActive ? 'active-link' : ''}>About Us</NavLink>

                {!user && <button onClick={() => navigate('/login')} className='btn btn-login'>Login</button>}
                {user && <Link to={'/profile'}><div className={`profile-link-div ${user.photoURL ? '' : 'flex-centered'}`}>{element}</div></Link>}

            </nav>
        </div>
    );
};

export default Navbar;