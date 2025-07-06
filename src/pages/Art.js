import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import './Art.css';
import Footer from '../components/Footer';


const token = 'f66b102732a093f6c68ca1da8f2909f3e8f23be418b9c4de3922f1aeb6a35fe9fd40154580ae97c265200b1d394ccb4a31190e9ab3fbf7f931c8550ae2815e0f8c54992bbff03dc309ec935077882816926394358ab38af094a6317203665c838bbc57766765fa0b9af4efb5b73ad47c88b0a74739f2e996071bdefe53db85c1';

function Art() {
    const { loading, error, data } = useFetch('https://classic-happiness-11f8e99995.strapiapp.com/api/blogposts?populate=*', token);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{JSON.stringify(data)}</p>;

    const artPosts = data.filter(post => post?.Genre === 'ART');
    console.log("api: ", artPosts);

    return (
        <div>
            <p className="MainReadHeader">Art</p>
            <hr className="my-divider" />

            <div className="posts-grid">
                {artPosts.map(post => (
                    <div key={post.ID} className="art-card">
                        <Link to={`/Read/${post.documentId}`} key={post.ID} className="featured-post-link">
                            <h2 className="art-title">{post.Title}</h2>
                            <img src={post.Media.url} 
                                alt="Featured Right" 
                                className="art-image" />
                            <p className="art-author">{post.Author}</p>
                        </Link>
                    </div>

                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Art;
