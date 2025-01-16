import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Blog from "../components/Blog";


const UserPage = () => {
    const {username} = useParams();
    const [userBlog, setUserBlog] = useState([]);


    useEffect(() => {
        fetch("http://167.99.138.67:1111/getUserPosts/"+username)
            .then(res => res.json())
            .then(data => {
                   setUserBlog(data.data);
                });

    },[] )

    return (


    <div className="container">
        <h1>{username}</h1>
        <div className="gallery-container">

            <div className="container">
                {  userBlog.map((blog, index) => (
                    <Blog key={index} blog={blog}/>))
                }

            </div>
        </div>
    </div>


)
    ;
};

export default UserPage;