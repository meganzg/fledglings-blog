import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPost.css';

function FeaturedPost({ post }) {
    if (!post) return null;

    return (
        <div className="featured-post"> {/*create a featured post division*/}
            <div className="featured-content"> {/*create a featured content division*/}
                <span className="featured-label">Featured Post</span> {/*create a span for the featured post label*/}
                <h2>{post.title}</h2> {/*get the title from the post data*/}
                 <p className="author">By {post.author}</p> {/*show relevant data*/}
                 <p classNmae="excerpt">{post.excerpt}</p>
                 <Link to="/Read" className="read-more"> 
                 {/*uses react router component to navigate to read page*/}
                    read more
                 </Link>
            </div>
        </div>
    )
}

export default FeaturedPost;