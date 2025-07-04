import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import "./Read.css";
import { Link } from 'react-router-dom';


const token = 'f66b102732a093f6c68ca1da8f2909f3e8f23be418b9c4de3922f1aeb6a35fe9fd40154580ae97c265200b1d394ccb4a31190e9ab3fbf7f931c8550ae2815e0f8c54992bbff03dc309ec935077882816926394358ab38af094a6317203665c838bbc57766765fa0b9af4efb5b73ad47c88b0a74739f2e996071bdefe53db85c1'

function Read(){
    const { documentId } = useParams();
    const { loading, error, data } = useFetch(`https://classic-happiness-11f8e99995.strapiapp.com/api/blogposts?filters[documentId][$eq]=${documentId}&populate=*`, token);

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
                src={post.Media.url}
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