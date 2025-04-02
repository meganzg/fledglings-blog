import React from 'react';
import { Link } from 'react-router-dom';
import './Subfeatured.css';
import useFetch from '../hooks/useFetch'

function Subfeatured({ posts }){
    if (!posts) {return null}

    return (
        <div className="subfeatured-post"> {/*create a featured post division*/}
            <span className="subfeatured-label">Subfeatured Posts</span> {/*create a span for the featured post label*/}
            {posts.map(subpost => (
                <div className="subfeatured-content"> {/*create a featured content division*/}
                    <h2>{subpost.Title}</h2> {/*get the title from the post data*/}
                    <p className="author">By {subpost.Author}</p> {/*show relevant data*/}
                    <Link to={`/Read/${subpost.documentId}`} className="read-more-img"> 
                        <img 
                            src={`http://localhost:1337${subpost.Media.url}`}
                            alt="Blog Post Image" 
                            style={{ 
                            width: '300px', 
                            height: '200px', 
                            objectFit: 'cover', 
                            }} 
                        />
                    </Link>
                    {/*<p className="excerpt">{subpost.Text.substring(0, subpost.Text.indexOf(".")) + "."}</p>*/}
                 </div>
            ))}
        </div>
    )
}

export default Subfeatured;
