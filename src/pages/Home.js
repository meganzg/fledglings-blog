import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import Subfeatured from '../components/Subfeatured';
import RecentlyPublished from '../components/RecentlyPublished';
import useFetch from '../hooks/useFetch'
import './Home.css';
import Footer from '../components/Footer';

function Home(){

    const { loading, error, data } = useFetch('https://classic-happiness-11f8e99995.strapiapp.com/api/blogposts?populate=*')

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