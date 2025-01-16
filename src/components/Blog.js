import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";

const Blog = ({blog}) => {
    const secretKey = localStorage.getItem("secretKey")

    function deleteBlog() {
        let post = {
            "secretKey": secretKey,
            "id": blog.id,
        }

        let option = {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify(post),
        }
        fetch("http://167.99.138.67:1111/deletepost", option)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    window.location.reload();
                }
            })
    }


    const username = localStorage.getItem("username");

    function edit(){
        localStorage.setItem("edit", JSON.stringify(blog));
        window.location.href=`/edit`;
    }
    return (
        <div className="gallery-item">
            <h2><Link to={`/post/${blog.username}/${blog.id}`}>{blog.title}</Link></h2>
            <img src={blog.image} alt=""/>
            <div className="flex">
                <div><em><Link to={`/user/${blog.username}`}>{blog.username}</Link>
                </em> {new Date(blog.timestamp).toLocaleString()} </div>
            </div>
            <p>{blog.description.substring(0, 150)} <Link to={`/post/${blog.username}/${blog.id}`}>more</Link></p>

            {
                username === blog.username &&
                <div className="flex gap">
                    <button onClick={deleteBlog} className="edit-btn">Delete</button>
                    <button onClick={edit} className="edit-btn">Edit</button>
                </div>
            }
        </div>

    );
};

export default Blog;