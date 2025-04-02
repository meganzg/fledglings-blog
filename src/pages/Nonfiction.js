import React from 'react';
import ReadPage from '../components/FeaturedGenre';
import { posts } from '../data/posts';
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom';
import './Nonfiction.css';

const token = '0fad20d0acf27bff746a0a587c7c4a02eb83c3430df86223bf4543f3f60009899f50642e0e1cef9af73616ed7d28c7c292dc432e520cd20d262a0286102bd937f63647f220d5de33a8b5555b555d9f5e05eed412746bbcaba1ba08bc105c789a3596c82d64b37604055bd21a2abc063ef839898961987a6b31e2bc49048cd223'

function Nonfiction() {

    const { loading, error, data } = useFetch('http://localhost:1337/api/blogposts?populate=*', token)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{JSON.stringify(data)}</p>
    console.log("All data:", data);


    return (
        <div>
            <p className="MainReadHeader">NONFICTION</p>
            <h2>Featured</h2>
            {data.filter(featuredPost => featuredPost?.genreFeatured === true && featuredPost?.Genre === 'NONFICTION').map(featuredPost => (
                <div key={featuredPost.ID} className="featuredPost-card">
                <Link to={`/Read/${featuredPost.documentId}`} className="read-more"> 
                    <h2 className="nonfic-title">{featuredPost.Title}</h2>
                    <img 
                        src={`http://localhost:1337${featuredPost.Media.url}`}
                        alt="Blog Post Image" 
                        style={{ 
                        width: '300px', 
                        height: '200px', 
                        objectFit: 'cover', 
                        }} 
                    />
                </Link>
                <p className="nonfic-blogText">{featuredPost.Text.substring(0, 100) + "..."}</p>
            </div>
            ))}
            <h2>Recent</h2>
            {data.filter(blogpost => blogpost?.Genre === 'NONFICTION' && blogpost.genreFeatured === null).map(blogpost => (
                <div key={blogpost.ID} className="blogpost-card">
                     <Link to={`/Read/${blogpost.documentId}`} className="read-more"> 
                        <h2 className="nonfic-title-sub">{blogpost.Title}</h2>
                        <img 
                            src={`http://localhost:1337${blogpost.Media.url}`}
                            alt="Blog Post Image" 
                            style={{ 
                            width: '300px', 
                            height: '200px', 
                            objectFit: 'cover', 
                            }} 
                        />
                    </Link>
                    <p className="nonfic-blogText">{blogpost.Text.substring(0, 100) + "..."}</p>
                </div>
            ))}
            
        </div>
    );
}

export default Nonfiction;