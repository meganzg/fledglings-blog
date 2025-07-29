import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import './Art.css';
import Footer from '../components/Footer';


function Art() {
    const { loading, error, data } = useFetch('https://classic-happiness-11f8e99995.strapiapp.com/api/blogposts?populate=*');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{JSON.stringify(data)}</p>;

    const artPosts = data.filter(post => post?.Genre === 'ART');
    console.log("api: ", artPosts);

    return (
        <div>
            <p className="MainReadHeader">Art</p>
            <hr className="my-divider" />

            <div className="posts-grid">
                {artPosts.map(post => (
                    <div key={post.ID} className="art-card">
                        <Link to={`/Read/${post.documentId}`} key={post.ID} className="featured-post-link">
                            <h2 className="art-title">{post.Title}</h2>
                            <img src={post.Media.url} 
                                alt="Featured Right" 
                                className="art-image" />
                            <p className="art-author">{post.Author}</p>
                        </Link>
                    </div>

                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Art;
