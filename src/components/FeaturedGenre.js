import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import './FeaturedGenre.css'

const PostCard = ({ post }) => {
    // check if no post is available
    if (!post) return <div className="no-post-message">No featured post available</div>

    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <div className="post-meta">
                    by {post.author} | {new Date(post.date).toLocaleDateString()}
                </div>
            </CardHeader>
            <CardContent>
                <p className="post-excerpt">{post.excerpt}</p>
                <button className="read-more-button">
                    read more
                </button>
            </CardContent>
        </Card>
    );
};

const ReadPage = ({ posts }) => {

    const fictionPost = posts[0];  // manually setting for now
    const poetryPost = posts[1];
    const nonfictionPost = posts[2];

    return (
        <div className="read-page-container">
            <div className="columns-grid"> {/*split into 3 sections*/}
                <div className="fiction-column">
                    <h2>Fiction</h2>
                    <PostCard post = {fictionPost} />
                </div>

                <div className="poetry-column">
                    <h2>Poetry</h2>
                    <PostCard post = {poetryPost} />
                </div>

                <div className="nonfiction-column">
                    <h2>Nonfiction</h2>
                    <PostCard post = {nonfictionPost} />
                </div>
            </div>
        </div>
    );
};

export default ReadPage;

