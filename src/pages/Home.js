import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import Subfeatured from '../components/Subfeatured';
import RecentlyPublished from '../components/RecentlyPublished';
import useFetch from '../hooks/useFetch'
import './Home.css';

const token = '3aa1625d30dee49222faa8d9c0288fff70cc309888271509613d9ae16815268dced80bdefe45e69fa0b7924d562da916c3bed8be5d61f6b4f1f35d02963febe2a61c0426db60c489b8c14cf40f2df41201f1d54831fdd882ab2da98a165b2ba69691d0170a43eeb62c3ffe3ab5542c7c9fe8c082502b71afe5d821cf820f7d2b';

function Home(){

    const { loading, error, data } = useFetch('http://localhost:1337/api/blogposts?populate=*', token)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{JSON.stringify(data)}</p>

    // Find the featured post
    const featuredPost = data.find(post => post.Featured === true);
    const subfeatured = data.filter(post => post.subFeatured === true);
    const recentlyPublished = data.filter(post => (post.Featured === true || post.subFeatured === true))
    console.log("Recent: ", recentlyPublished)
    console.log("Featured: ", featuredPost)
    console.log("sub: ", subfeatured)

    return (
        <div className="landing-page">
            {/* Tan colored header bar */}
            <div className="top-tan-bar"></div>

            {/* Header and Navigation */}
            <header className="site-header">
                <div className="site-title">fledglings</div>
                <nav className="site-nav">
                    <ul>
                        <li>Fiction</li>
                        <li>Poetry</li>
                        <li>Nonfiction</li>
                        <li>Art</li>
                        <li>Submit</li>
                        <li>About</li>
                    </ul>
                </nav>
            </header>

            {/* Featured Post Section */}
            <section className="featured-section">
                <div className="featured-container">
                    {featuredPost && <FeaturedPost post={featuredPost} />}
                </div>
                {/* Subfeatured posts below featured */}
                <div className="subfeatured-row">
                    <Subfeatured posts={subfeatured} />
                </div>
            </section>

            {/* Recently Published Section */}
            <section className="recently-published-section">
                <h2>Recently Published</h2>
                <div className="recently-published-grid">
                    <RecentlyPublished posts={recentlyPublished} />
                </div>
            </section>

            {/* Footer */}
            <footer className="site-footer">
                <div className="footer-left">
                    <span className="footer-logo">🦉</span>
                    <div className="footer-contact">
                        <span>Contact Us</span>
                        <span className="footer-socials">
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-tumblr"></i>
                        </span>
                    </div>
                </div>
                <div className="footer-right">
                    <ul>
                        <li>Fiction</li>
                        <li>Poetry</li>
                        <li>Nonfiction</li>
                        <li>Art</li>
                        <li>Submit</li>
                        <li>About</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Home;

