import React from 'react';
import ReadPage from '../components/FeaturedGenre';
import { posts } from '../data/posts';
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom';
import './Poetry.css';
import Footer from '../components/Footer';


const token = 'f66b102732a093f6c68ca1da8f2909f3e8f23be418b9c4de3922f1aeb6a35fe9fd40154580ae97c265200b1d394ccb4a31190e9ab3fbf7f931c8550ae2815e0f8c54992bbff03dc309ec935077882816926394358ab38af094a6317203665c838bbc57766765fa0b9af4efb5b73ad47c88b0a74739f2e996071bdefe53db85c1'

function Poetry() {

    const { loading, error, data } = useFetch('https://classic-happiness-11f8e99995.strapiapp.com/api/blogposts?populate=*', token)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{JSON.stringify(data)}</p>

    const featuredPoetry = data.filter(fp => fp?.genreFeatured === true && fp?.Genre === 'POETRY');
    const recentPoetry = data.filter(bp => bp?.genreFeatured === null && bp?.Genre === 'POETRY');

    return (
        <div>
            <p className="MainReadHeader">Poetry</p>
            <hr className="my-divider" />

            {/* Featured section */}
            {featuredPoetry.length > 0 && (
                <div className="featured-posts-container">
                    <div className="featured-left">
                        {featuredPoetry.slice(0,1).map(fp => (
                            <Link to={`/Read/${fp.documentId}`} key={fp.ID} className="featured-post-link">
                                <img src={fp.Media.url} 
                                     alt="Featured 1" 
                                     className="featured-left-image" />
                                <h2 className="fiction-title">{fp.Title}</h2>
                                <p className="fiction-author">{fp.Author}</p>
                            </Link>
                        ))}
                    </div>

                    <div className="featured-right">
                        {featuredPoetry.slice(1,3).map(fp => (
                            <Link to={`/Read/${fp.documentId}`} key={fp.ID} className="featured-post-link">
                                <img src={fp.Media.url} 
                                     alt="Featured Right" 
                                     className="featured-right-image" />
                                <h2 className="fiction-title">{fp.Title}</h2>
                                <p className="fiction-author">{fp.Author}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Recent posts section */}
            <p className="archive">Archive</p>
            <div className="archive-container">
                {recentPoetry.map(blogpost => (
                    <div key={blogpost.ID} className="archive-card">
                        <Link to={`/Read/${blogpost.documentId}`} className="archive-image-link">
                            <img 
                                src={blogpost.Media.url}
                                alt="Blog Post Image"
                                className="archive-image"
                            />
                        </Link>
                        <div className="archive-text">
                            <Link to={`/Read/${blogpost.documentId}`} className="archive-title-link">
                                <h3 className="archive-title">{blogpost.Title}</h3>
                            </Link>
                            <p className="archive-author">by {blogpost.Author}</p>
                            <p className="archive-excerpt">
                                {blogpost.Text.substring(0, blogpost.Text.indexOf(".")) + "."}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Poetry;