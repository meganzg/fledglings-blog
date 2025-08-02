import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPost.css';
import useFetch from '../hooks/useFetch'


function FeaturedPost({ post }) {
    if (!post) return null;

    return (
        <div className="featured-post">
            <div className="featured-flex">
                <div className="featured-image">
                    <Link to={`/Read/${post.documentId}`}>
                        <img 
                            src={post.Media.url} 
                            alt="Blog Post Image"
                            style={{ 
                            width: '770px', 
                            height: '530px', 
                            objectFit: 'cover', 
                        }}  
                        />
                    </Link>
                </div>
                <div className="featured-text">
                <Link to={`/Read/${post.documentId}`} className="read-more-title">
                    <h2>{post.Title}</h2>
                </Link>
                <p className="author">by {post.Author}</p>
                <p className="excerpt">{post.Text.substring(0, 100) + "..."}</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPost;