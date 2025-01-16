import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";


const EditPage = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const secretKey = localStorage.getItem("secretKey");
    const blog = JSON.parse(localStorage.getItem("edit"));
    const username = localStorage.getItem("username");
    const [titleValue, setTitleValue] = useState(blog.title || "");
    const [imageValue, setImageValue] = useState(blog.image || "");
    const [descriptionValue, setDescriptionValue] = useState(blog.description || "");
    const navigate = useNavigate();


    function updateBlog() {
        setSuccess(false)
        let post = {
            "title": titleValue,
            "image": imageValue,
            "secretKey": secretKey,
            "description": descriptionValue,
            "id": blog.id,
        }

        let option = {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify(post),
        }
        fetch("http://167.99.138.67:1111/updatepost", option)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setSuccess(true);
                    navigate(`/post/${username}/${blog.id}`);
                } else {
                    setError(data.message);

                }
            })
    }

    return (

        <div className="profile-container register-page flex d-row gap">
            <div className="flex d-column grow">
                <h1>Edit post</h1>
                <input type="text" placeholder="Enter title" id="title" value={titleValue}
                       onChange={(e) => setTitleValue(e.target.value)}/>
                <input type="text" placeholder="Enter image url" id="image" value={imageValue}
                       onChange={(e) => setImageValue(e.target.value)}/>
                <textarea id="description" placeholder="Enter description" value={descriptionValue}
                          onChange={(e) => setDescriptionValue(e.target.value)} rows="4"></textarea>
                <div className={!success ? "d-none" : ""} style={{color: "green"}}>Uploaded successfully</div>
                <div className={error === "" ? "d-none" : ""} style={{color: "red"}}>{error}</div>
                <button onClick={updateBlog} className="edit-btn">Update blog</button>
            </div>


        </div>
    )
        ;
};

export default EditPage;