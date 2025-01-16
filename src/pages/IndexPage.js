import React, {useEffect, useState} from 'react';
import Blog from "../components/Blog";

const IndexPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://167.99.138.67:1111/getallposts")
            .then(response => response.json())
            .then(data => {
                const reversedData = data.data.reverse();
                const sliced = reversedData.slice(0, 42);
                setBlogs(sliced);

            })
    }, [])
    return (
        <div className="container">
            <h1>Blog</h1>
            <div className="gallery-container">

                <div className="container">
                    {blogs.map((blog, index) => (
                        <Blog key={index} blog={blog}/>
                    ))}

                </div>
            </div>
        </div>
    )
        ;
};

export default IndexPage;