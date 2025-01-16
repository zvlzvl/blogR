import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

const UploadPage = () => {
    const titleRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const secretKey = localStorage.getItem("secretKey");
    const username = localStorage.getItem("username");
    const navigate = useNavigate();

    function create() {
        const title = titleRef.current.value;
        const img = imageRef.current.value;
        const description = descriptionRef.current.value;

        let post = {
            "title": title,
            "image": img,
            "secretKey": secretKey,
            "description": description,
        }

        let option = {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify(post),
        }

        fetch("http://167.99.138.67:1111/createpost", option)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setSuccess(true);
                    navigate(`/user/${username}`);
                } else {
                    setError(data.message);
                    titleRef.current.value = "";
                    imageRef.current.value = ""
                    descriptionRef.current.value = ""
                }
            })
    }

    return (

        <div className="profile-container register-page">
            <h1>Post</h1>
            <input ref={titleRef} type="text" placeholder="Enter title" id="title"/>
            <input ref={imageRef} type="text" placeholder="Enter image url" id="image"/>
            <textarea ref={descriptionRef} id="description" placeholder="Enter description" rows="4"></textarea>
            <div className={!success ? "d-none" : ""} style={{color: "green"}}>Uploaded successfully</div>
            <div className={error === "" ? "d-none" : ""} style={{color: "red"}}>{error}</div>
            <button onClick={create} className="edit-btn">Upload post</button>
        </div>
    )
        ;
};

export default UploadPage;