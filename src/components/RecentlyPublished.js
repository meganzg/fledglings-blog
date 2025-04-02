import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import './RecentlyPublished.css';


function RecentlyPublished({ posts }){
    if (!posts) { return null; }

    return(
        <div>
            <p className="RecPubHeader">Recently Published</p>
            <div className="posts">
                {posts.map(post => (
                    <div className="recent-content"> {/*create a featured content division*/}
                        <div>
                        <Link to={`/Read/${post.documentId}`} className="RecPub-read-more-post"> 
                            <h2 className = "RecPubTitle">{post.Title}</h2> {/*get the title from the post data*/}
                            <p className="RecPubAuthor">By {post.Author} {post.Date.substring(0, 10)}</p> {/*show relevant data*/}
                                <img 
                                    src={`http://localhost:1337${post.Media.url}`}
                                    alt="Blog Post Image" 
                                    style={{ 
                                    width: '300px', 
                                    height: '200px', 
                                    objectFit: 'cover', 
                                    }} 
                                />
                        </Link>
                        </div>
                        <Link to={`/Read/${post.documentId}`} className="RecPub-read-more-text"> 
                            <p className="RecPubText">{post.Text.substring(0, 100)}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentlyPublished