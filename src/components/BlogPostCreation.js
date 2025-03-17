import React, { useState } from 'react';
import axios from 'axios';
import './PostForm.css';

// initialPost object containig info about existing post, if user is editing
// if initialPost is null, form create new one
const PostForm = ({ initialPost = null }) => {

    // set initial values to post data
    const [title, setTitle] = useState(initialPost?.title || '');
    const [content, setContent] = useState(initialPost?.content || '');
    const [image, setImage] = useState(null);

    // once the submit button is triggered
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('strapiToken'); // get auth token

        // image upload first if it exists
        let imageId = null;
        if (image) {
            const formData = new FormData(); // given js api
            formData.append('files', image);

            // pass image to strapi
            const uploadResponse = await axios.post('http://localhost:1337/api/upload', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            imageId = uploadResponse.data[0].id; // get image id from object
        }

        // Post data to strapi
        const postData = {
            data: {
                title,
                content,
                publishedAt: new Date(),
                featured_image: imageId ? { id: imageId } : null
            }
        };

        try {
            if (initialPost) {
                // update existing post
                await axios.put(`http://localhost:1337/api/blog-posts/${initialPost.id}`, postData, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
            } else {
                // create new post
                await axios.post('http://localhost:1337/api/blog-posts', postData, {
                    headers: { 'Authorization': `Bearer ${token}`}
                });
            }
        } catch (error) {
            console.error('Post submission failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="post-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeHolder="Post Title"
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholde="Post Content"
                required
            />
            <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
            />
            <button type="submit">
                {initialPost ? 'Update Post' : 'Create Post'}
            </button>
        </form>
    );
};

export default PostForm;
