import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const nameRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    function login() {
        setError("");
        setSuccess(false);
        let user = {
            "name": nameRef.current.value,
            "password": passwordRef.current.value,
        }

        let option = {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify(user),
        }
        fetch('http://167.99.138.67:1111/login', option)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem("secretKey", data.secretKey);
                    localStorage.setItem("username", nameRef.current.value);
                    setSuccess(true);
                    window.location.reload();
                    navigate(`/user/${nameRef.current.value}`);

                } else {
                    setError(data.message);
                    nameRef.current.value = "";
                    passwordRef.current.value = ""
                }
            })
    }


    return (
        <div className="profile-container">
            <h1>Log in</h1>
            <div className={!success && "d-none"} style={{color: "green"}}>Logged in successfully</div>
            <div className={error === "" && "d-none"} style={{color: "red"}}>{error}</div>
            <input ref={nameRef} type="text" placeholder="Email Address"/>
            <input ref={passwordRef} type="password" placeholder="Password"/>

            <button onClick={login} className="edit-btn">Log in</button>
        </div>
    );
};

export default LoginPage;