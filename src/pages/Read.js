import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import "./Read.css";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


function Read(){
    const { documentId } = useParams();
    const { loading, error, data } = useFetch(`https://classic-happiness-11f8e99995.strapiapp.com/api/blogposts?filters[documentId][$eq]=${documentId}&populate=*`);

    const post = data?.[0];
    if (!post) return <p>Loading post...</p>;

    return(
        <div>
            <p className="title">{post.Title}</p>
            <img 
                src={post.Media.url}
                alt="Blog Post Image" 
                style={{ 
                width: '600px', 
                height: '400px', 
                objectFit: 'cover', 
                }} 
            />
            <p className="author">By {post.Author}</p>
            <div className="text">
                {post.Text.split(/\n+/).map((paragraph, idx) => (
                    <p key={idx}>{paragraph.trim()}</p>
                ))}
            </div>
            <Footer />
        </div>
    );
    
}

export default Read;