import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";

const RegisterPage = () => {
    const nameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);


    function register() {
        setError("");
        setSuccess(false);

        let user = {
            "name": nameRef.current.value,
            "passwordOne": passwordRef.current.value,
            "passwordTwo": passwordConfirmRef.current.value,
        }

        let option = {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify(user),
        }
        fetch('http://167.99.138.67:1111/createaccount', option)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    setSuccess(true);
                } else {
                    setError(data.message);
                    nameRef.current.value = "";
                    passwordRef.current.value = ""
                    passwordConfirmRef.current.value = ""

                }
            })
    }


    return (
        <div className="profile-container register-page">
            <h1>Register</h1>
            <input ref={nameRef} type="text" placeholder="Username"/>
            <input ref={passwordRef} type="password" placeholder="Password"/>
            <input ref={passwordConfirmRef} type="password" placeholder="Repeat password"/>
            <div className={!success? "d-none": ""} style={{color: "green"}}>Register successfully please <Link
                to={"/login"}>login</Link></div>
            <div className={error === "" ? "d-none":""} style={{color: "red"}}>{error}</div>
            <button onClick={register} className="edit-btn">Register</button>
        </div>
    );
};

export default RegisterPage;