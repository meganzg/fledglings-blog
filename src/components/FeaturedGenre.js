import React from 'react';
import './FeaturedGenre.css'

const PostCard = ({ post }) => {
    // check if no post is available
    if (!post) return <div className="no-post-message">No featured post available</div>

    return (
        <div className="post-box">
            <div className="post-header">
                <h3 className="post-title">{post.title}</h3>
                <div className="post-meta">
                    by {post.author} {/*| {new Date(post.date).toLocaleDateString()}*/}
                </div>
            </div>

            <div className="post-content">
                <p className="post-excerpt">{post.excerpt}</p>
                <button className="read-more">
                    read more
                </button>
            </div>
        </div>
    );
};

const ReadPage = ({ posts }) => {

    const fictionPost = posts[0];  // manually setting for now
    const poetryPost = posts[1];
    const nonfictionPost = posts[2];

    return (
        <div className="read-page-container">
            <h2 className="featured">Featured</h2>
            <div className="columns-grid"> {/*split into 3 sections*/}

                {/* Create fiction division */}
                <div className="fiction-column">
                    <PostCard post = {fictionPost} />
                    <h2 className="fiction-header">New Fiction</h2>
                </div>

                <div className="poetry-column">
                    <PostCard post = {poetryPost} />
                    <h2 className="poetry-header">New Poetry</h2>
                </div>

                <div className="nonfiction-column">
                    <PostCard post = {nonfictionPost} />
                    <h2 className="nonfiction-header">New Nonfiction</h2>
                </div>
            </div>
        </div>
    );
};

export default ReadPage;

