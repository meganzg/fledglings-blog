import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import useFetch from '../hooks/useFetch'
import './Home.css';

const token = 'c6226d4e227b4f3781e0aefc5e8b6cdb8be1d0726b6d719be5921efe2b5e80d53dfb7207238963b5fe0378b8b2dc52398d430dca5ad6e137362f8366271f99f972ed7c32ac686b468efa47613474cb4b80e99ffa29a141c0b82423f6eb4046eb5e8c5a08e7dcac867f667c008f95acdd605cdcdc86ec891591b7b298f66c58a5'

function Home(){

    const { loading, error, data } = useFetch('http://localhost:1337/api/blogposts?populate=*', token)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{JSON.stringify(data)}</p>

    // Find the featured post
    //const featuredPost = posts.find(post => post.featured);
    const featuredPost = data.find(post => post.Featured === true);

    return (
        <div className="home">
            <section className="intro">
                <p className="welcome-text">
                Welcome to Fledglings
                </p>
            </section>
            <FeaturedPost post={featuredPost} />
        </div>
    );
}

export default Home;