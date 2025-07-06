import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import "./Read.css";
import { Link } from 'react-router-dom';


function ArtView(){

    const token = '1b9b147a9464233c1c5ca8eec509b02312d88bea578fd094bc57e9af5d3db669ca5ae8797678903d84481b80ca81227907ff371b0572415fee2c709ec91c8570e2d45985d84fb268af29c43dd20792c188572c92bfd05503ac90f04cbc096dc878d430a55fd19e0e6d1d7e677db270ae36a9ad7abce6195173695efe1da11bee'

    const { documentId } = useParams();
    const { loading, error, data } = useFetch(`https://classic-happiness-11f8e99995.strapiapp.com/api/blogposts?filters[documentId][$eq]=${documentId}&populate=*`, token);

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
        </div>
    );
    
}

export default ArtView;