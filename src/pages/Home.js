import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import Subfeatured from '../components/Subfeatured';
import useFetch from '../hooks/useFetch'
import './Home.css';

const token = '0fad20d0acf27bff746a0a587c7c4a02eb83c3430df86223bf4543f3f60009899f50642e0e1cef9af73616ed7d28c7c292dc432e520cd20d262a0286102bd937f63647f220d5de33a8b5555b555d9f5e05eed412746bbcaba1ba08bc105c789a3596c82d64b37604055bd21a2abc063ef839898961987a6b31e2bc49048cd223'

function Home(){

    const { loading, error, data } = useFetch('http://localhost:1337/api/blogposts?populate=*', token)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{JSON.stringify(data)}</p>

    // Find the featured post
    const featuredPost = data.find(post => post.Featured === true);
    const subfeatured = data.filter(post => post.subFeatured == true);

    return (
        <div className="home">
            <section className="intro">
                <p className="welcome-text">
                Welcome to Fledglings
                </p>
            </section>
            <FeaturedPost post={featuredPost} />
            <Subfeatured posts={subfeatured} />
        </div>
    );
}

export default Home;