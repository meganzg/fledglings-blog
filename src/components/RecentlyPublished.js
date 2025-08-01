import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import './RecentlyPublished.css';


function RecentlyPublished({ posts }){
    if (!posts) { return null; }

    return(
        <div className="recently-published">
            <hr className="top-recent-line" />
            <p className="RecPubHeader">RECENTLY PUBLISHED</p>
            <hr className="bottom-recent-line" />
            <div className="recent-grid">
                {posts.map(post => (
                <div className="recent-card" key={post.documentId}>
                    <Link to={`/Read/${post.documentId}`} className="recent-card-link">
                    <img 
                        className="recent-card-image"
                        src={post.Media.url} 
                        alt={post.Title} 
                        style={{ 
                            width: '381px', 
                            height: '405px', 
                            objectFit: 'cover', 
                        }}
                    />
                    <div className="recent-card-text">
                        <p className="recent-card-title"><u className="homeTitle">{post.Title}</u> by {post.Author}</p>
                        <p className="recent-card-excerpt">
                        {post.Text.substring(0, 100)}...
                        </p>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    </div> 
    )
}

export default RecentlyPublished