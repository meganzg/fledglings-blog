import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import { posts } from '../data/posts';

function Home(){

    // Find the featured post
    const featuredPost = posts.find(post => post.featured);

    return (
        <div className="home">
            <section classNmae="intro">
                <p classNmae="welcome-text">
                Welcome to Fledglings
                </p>
            </section>
            <FeaturedPost post={featuredPost} />
        </div>
    );
}

export default Home;