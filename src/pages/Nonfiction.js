import React from 'react';
import ReadPage from '../components/FeaturedGenre';
import { posts } from '../data/posts';
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom';
import './Nonfiction.css';
import Footer from '../components/Footer';


function Nonfiction() {

    const { loading, error, data } = useFetch('https://classic-happiness-11f8e99995.strapiapp.com/api/blogposts?populate=*')

    if (loading) return <p>Loading...</p>
    if (error) return <p>{JSON.stringify(data)}</p>

    const featuredNonfic = data.filter(fp => fp?.genreFeatured === true && fp?.Genre === 'NONFICTION');
    const recentNonfic = data.filter(bp => bp?.genreFeatured === null && bp?.Genre === 'NONFICTION');

    return (
        <div>
            <p className="MainReadHeader">Nonfiction</p>
            <hr className="my-divider" />

            {/* Featured section */}
            {featuredNonfic.length > 0 && (
                <div className="featured-posts-container">
                    <div className="featured-left">
                        {featuredNonfic.slice(0,1).map(fp => (
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
                        {featuredNonfic.slice(1,3).map(fp => (
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

            <p className="archive">Archive</p>
                <div className="archive-container">
                    {recentNonfic.map(blogpost => (
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

export default Nonfiction;