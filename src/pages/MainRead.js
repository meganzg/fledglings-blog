import React from 'react';
import ReadPage from '../components/FeaturedGenre';
import { posts } from '../data/posts';
import useFetch from '../hooks/useFetch'

function MainRead() {

    const { loading, error, data } = useFetch('http://localhost:1337/api/blogposts')

    if (loading) return <p>Loading...</p>
    if (error) return <p>{data}</p>

    return (
        <div>
            {data.map(blogpost => (
                <div key={blogpost.id} className="blogpost-card">
                    <h2>{blogpost.title}</h2>

                    <small>console list</small>

                    <p>{blogpost.text}</p>
                </div>
            ))}
        </div>

        /*<div>
            <ReadPage posts={posts}/>
        </div>*/
    );
}

export default MainRead;