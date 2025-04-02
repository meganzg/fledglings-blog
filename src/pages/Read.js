import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import "./Read.css";
import { Link } from 'react-router-dom';


const token = 'c6226d4e227b4f3781e0aefc5e8b6cdb8be1d0726b6d719be5921efe2b5e80d53dfb7207238963b5fe0378b8b2dc52398d430dca5ad6e137362f8366271f99f972ed7c32ac686b468efa47613474cb4b80e99ffa29a141c0b82423f6eb4046eb5e8c5a08e7dcac867f667c008f95acdd605cdcdc86ec891591b7b298f66c58a5'

function Read(){
    const { documentId } = useParams();
    const { loading, error, data } = useFetch(`http://localhost:1337/api/blogposts?filters[documentId][$eq]=${documentId}&populate=*`, token);

    const post = data?.[0];
    if (!post) return <p>Loading post...</p>;
    const related_array = post.related_posts;
    console.log("Related Posts Array: ", related_array);

    return(
        <div>
            <p className="genre">{post.Genre}</p>
            <p className="title">{post.Title}</p>
            <p className="author">{post.Author}</p>
            <img 
                src={`http://localhost:1337${post.Media.url}`}
                alt="Blog Post Image" 
                style={{ 
                width: '600px', 
                height: '400px', 
                objectFit: 'cover', 
                }} 
            />
            <p className="text">{post.Text}</p>
            <div>
                <h2>Related Posts</h2>
                {related_array.map(related_post => (
                    <div key={related_post.ID} className="blogpost-card">
                    <Link to={`/Read/${related_post.documentId}`} className="read-more-recent"> 
                        <h2 className="title">{related_post.Title}</h2>
                    </Link>
                    <img 
                            src={`http://localhost:1337/api/blogposts?populate[Media]=*&populate[related_posts][populate]=Media`}
                            alt="Blog Post Image" 
                            style={{ 
                            width: '600px', 
                            height: '400px', 
                            objectFit: 'cover', 
                            }} 
                        />
                </div>
                ))}
            </div>
        </div>
    );
    
}

export default Read;