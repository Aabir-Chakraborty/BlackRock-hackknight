import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const {user, loginWithRedirect,logout,isAuthenticated } = useAuth0();

    return (
        <nav className="navbar">
            <h1 className="logo">DiaBeat.Ai</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/Form">Form</Link>
               
                <Link to="/ChatBot">Chatbot</Link>  {/* Added this line */}
                {
                    isAuthenticated && <p>{user.name}</p>  
                }
                {
                    isAuthenticated ? 
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                    : <button onClick={() => loginWithRedirect()}>Log In</button>
                }
                
            </div>
        </nav>
    );
}

export default Navbar;