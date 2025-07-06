import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import Subfeatured from '../components/Subfeatured';
import RecentlyPublished from '../components/RecentlyPublished';
import useFetch from '../hooks/useFetch'
import './Home.css';
import Footer from '../components/Footer';

const token = 'b4f27d08c1116d9652ef6f712d903d1b6687877e6f9557f90b39cd51607cacfa2ea9de20a9806e8e92f9d8c5a58a154324d0d9f675287b15f60d35a55ea20fa58569052912a724aa5c564a183da24b20a8f47eb8dacee68b58fcdbc719bf263496554a2952325d31ad6dc939937e7fc56b80a64c8deee0593313f6bac8bc3b54'
function Home(){

    const { loading, error, data } = useFetch('https://classic-happiness-11f8e99995.strapiapp.com/api/blogposts?populate=*', token)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{JSON.stringify(data)}</p>

    // Find the featured post
    const featuredPost = data.find(post => post.Featured === true);
    const subfeatured = data.filter(post => post.subFeatured === true);
    const recentlyPublished = data;
    console.log("Recent: ", recentlyPublished)
    console.log("Featured: ", featuredPost)
    console.log("sub: ", subfeatured)

    return (
        <div>
            <div className="home">
                <div className="left-column">
                    <FeaturedPost post={featuredPost} />
                </div>
            </div>
            <div>
                <div className="recently-published">
                        <RecentlyPublished posts={recentlyPublished} />
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Home;