import React from 'react';
import ReadPage from '../components/FeaturedGenre';
import { posts } from '../data/posts';
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom';
import './Poetry.css';


const token = 'f66b102732a093f6c68ca1da8f2909f3e8f23be418b9c4de3922f1aeb6a35fe9fd40154580ae97c265200b1d394ccb4a31190e9ab3fbf7f931c8550ae2815e0f8c54992bbff03dc309ec935077882816926394358ab38af094a6317203665c838bbc57766765fa0b9af4efb5b73ad47c88b0a74739f2e996071bdefe53db85c1'

function Poetry() {

    const { loading, error, data } = useFetch('https://classic-happiness-11f8e99995.strapiapp.com/api/blogposts', token)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{JSON.stringify(data)}</p>
    console.log("Data:", data);

    return (
        <div>
            <p className="MainReadHeader">Poetry</p>
            {data.filter(featuredPost => featuredPost?.genreFeatured === true && featuredPost?.Genre === 'POETRY').map(featuredPost => (
                <div key={featuredPost.ID} className="blogpost-card">
                <Link to={`/Read/${featuredPost.documentId}`} className="poetry-read-more"> 
                    <h2 className="poetryTitle">{featuredPost.Title}</h2>
                    <p className="poetryAuthor">{featuredPost.Author}</p>
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
                <p className="blogText">{featuredPost.Text.substring(0, featuredPost.Text.indexOf("\n")) + "..."}</p>
            </div>
            ))}
            <hr className="my-divider" />

            {data.filter(blogpost => blogpost?.genreFeatured === null && blogpost?.Genre === 'POETRY').map(blogpost => (
                <div key={blogpost.ID} className="blogpost-card">
                    <Link to={`/Read/${blogpost.documentId}`} className="poetry-read-more-recent"> 
                        <h2 className="title">{blogpost.Title}</h2>
                        <p className="poetryRecentAuthor">{blogpost.Author}</p>
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
                    <p className="blogText">{blogpost.Text.substring(0, blogpost.Text.indexOf("\n")) + "..."}</p>
                </div>
            ))}
        </div>
    );
}

export default Poetry;