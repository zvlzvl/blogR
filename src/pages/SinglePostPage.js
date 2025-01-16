import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

const SinglePostPage = () => {
    const params = useParams();
    const [blog, setBlog] = useState({});
    useEffect(() => {

        fetch(`http://167.99.138.67:1111/getsinglepost/${params.username}/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data.data);
                }
            );

    }, [params.username, params.id]);


    return (
        <div className="container">
            <h1>Post</h1>
            <div className="gallery-container">

                <div className="container">
                    <div className="gallery-item">
                        <h2><Link to={`/post/${blog.username}/${blog.id}`}>{blog.title}</Link></h2>
                        <img src={blog.image} alt=""/>
                        <div className="flex">
                            <div><em><Link to={`/user/${blog.username}`}>{blog.username}</Link>
                            </em> {new Date(blog.timestamp).toLocaleString()} </div>
                        </div>
                        <p>{blog.description} </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;