import React from 'react';
import ReadPage from '../components/FeaturedGenre';
import { posts } from '../data/posts';
import useFetch from '../hooks/useFetch'
import "./MainRead.css";

function MainRead() {

    const { loading, error, data } = useFetch('http://localhost:1337/api/blogposts?populate=*')

    if (loading) return <p>Loading...</p>
    if (error) return <p>{JSON.stringify(data)}</p>

    return (
        <div>
            <p className="MainReadHeader">Featured Reading</p>
            {data.map(blogpost => (
                <div key={blogpost.ID} className="blogpost-card">
                    <h2 className="title">{blogpost.Title}</h2>
                    <img 
                        src={`http://localhost:1337${blogpost.Media.url}`}
                        alt="Blog Post Image" 
                        style={{ 
                        width: '300px', 
                        height: '200px', 
                        objectFit: 'cover', 
                        }} 
                    />
                    <p className="blogText">{blogpost.Text.substring(0, blogpost.Text.indexOf("\n")) + "..."}</p>
                </div>
            ))}
        </div>

        /*<div>
            <ReadPage posts={posts}/>
        </div>*/
    );
}

export default MainRead;