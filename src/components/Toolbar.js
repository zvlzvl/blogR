import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";


const Toolbar = () => {
    const [username, setUsername] = useState("");
    const [secretKey, setSecretKey] = useState("");
    const navigate= useNavigate();
    function logout() {
        localStorage.clear();
        setUsername("");
        setSecretKey("");
        navigate("/");
    }

    useEffect(() => {
        const savedUsername = localStorage.getItem("username");
        const savedSecretKey = localStorage.getItem("secretKey");
        if (savedUsername) setUsername(savedUsername);
        if (savedSecretKey) setSecretKey(savedSecretKey);
    }, []);


    return (
        <div className="fixed">
            <div className="top">{username}</div>
            <div className="toolbar">
                <div className="toolbar-container">
                    <Link to="/" className="logo">MyLogo</Link>
                    {
                        secretKey === "" &&
                        <nav className="nav-links">
                            <Link to="/">Home</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </nav>
                    }
                    {
                        secretKey !== "" &&
                        <nav className="nav-links">
                            <Link to="/upload">Add post</Link>
                            <Link to={`/user/${username}`}>My blogs</Link>
                            <Link to="/logout" onClick={logout}>Logout</Link>
                        </nav>
                    }

                </div>
            </div>
        </div>
    );
};

export default Toolbar;