import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPost.css';
import useFetch from '../hooks/useFetch'


function FeaturedPost({ post }) {
    if (!post) return null;

    return (
        <div className="featured-post"> {/*create a featured post division*/}
            <div className="featured-content"> {/*create a featured content division*/}
                <span className="featured-label">Featured Post</span> {/*create a span for the featured post label*/}
                <br></br>
                <Link to={`/Read/${post.documentId}`} className="read-more-title"> 
                    <h2>{post.Title}</h2>{/*get the title from the post data*/}
                </Link>
                 <p className="author">By {post.Author}</p> {/*show relevant data*/}
                 <Link to={`/Read/${post.documentId}`} className="read-more-img"> 
                    <img 
                        src={`http://localhost:1337${post.Media.url}`}
                        alt="Blog Post Image" 
                        style={{ 
                        width: '600px', 
                        height: '400px', 
                        objectFit: 'cover', 
                        }} 
                    />
                </Link>
                 <p className="excerpt">{post.Text.substring(0, post.Text.indexOf("\n")) + "..."}</p>
                 {/*<Link to={`/Read/${post.documentId}`} className="read-more"> */}
                 {/*uses react router component to navigate to read page*/}
                    {/*read more*/}
                 {/*</Link>*/}
            </div>
        </div>
    )
}

export default FeaturedPost;