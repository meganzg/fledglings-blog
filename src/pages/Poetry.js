import React from 'react';
import ReadPage from '../components/FeaturedGenre';
import { posts } from '../data/posts';
import useFetch from '../hooks/useFetch'

const token = '0fad20d0acf27bff746a0a587c7c4a02eb83c3430df86223bf4543f3f60009899f50642e0e1cef9af73616ed7d28c7c292dc432e520cd20d262a0286102bd937f63647f220d5de33a8b5555b555d9f5e05eed412746bbcaba1ba08bc105c789a3596c82d64b37604055bd21a2abc063ef839898961987a6b31e2bc49048cd223'

function Poetry() {

    const { loading, error, data } = useFetch('http://localhost:1337/api/blogposts?populate=*', token)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{JSON.stringify(data)}</p>

    return (
        <div>
            <h2>Featured</h2>
            <p className="MainReadHeader">Poetry</p>
            {data.filter(featuredPost => featuredPost?.genreFeatured === true && featuredPost?.Genre === 'POETRY').map(featuredPost => (
                <div key={featuredPost.ID} className="blogpost-card">
                <h2 className="title">{featuredPost.Title}</h2>
                <img 
                    src={`http://localhost:1337${featuredPost.Media.url}`}
                    alt="Blog Post Image" 
                    style={{ 
                    width: '300px', 
                    height: '200px', 
                    objectFit: 'cover', 
                    }} 
                />
                <p className="blogText">{featuredPost.Text.substring(0, featuredPost.Text.indexOf("\n")) + "..."}</p>
            </div>
            ))}
            <h2>Recent</h2>
            {data.filter(blogpost => blogpost?.genreFeatured === null && blogpost?.Genre === 'POETRY').map(blogpost => (
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
    );
}

export default Poetry;