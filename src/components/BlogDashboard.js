import React, { useState, useEffect } from 'react';
import './blogList.css';
// create dashboard of blog posts fetched

const BlogDashboard = () => {
    // useState returns current value and function to adjust value
    // takes initial value as parameter
    const [posts, setPosts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetch posts from Strapi

    useEffect(() => { //anonymous function
        const fetchPosts = async () => { // async does not freeze rest of app while we wait for promise data
            try {
                // await will make code INSIDE async function wait for data to load before cotinuing to execute
                const response = await fetch('http://localhost:1337/api/blog-posts?populate=*');
                const data = await response.json(); // convert response to JSON
                setPosts(data.data); // fetched array of posts stored in .data, update data array
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch posts');
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div className="loading">Loading posts...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="blog-list"> {/* create div for blog post list*/} 
            {posts.map((post) => ( // iterate through posts using map and create div for each
                <div key={post.id} className="blog-post"> {/* use post id as key */}
                    <h2>{post.attributes.title}</h2>
                    <p>{post.attributes.content.substring(0, 200)}...</p>
                    <div className="post-meta">
                        <span>{new Date(post.attributes.publishedAt).toLocaleDateString()}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogList;