import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostForm.css"; // Optional styling

const PostForm = ({ selectedPost, setSelectedPost }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    // Set values when editing
    useEffect(() => {
        if (selectedPost) {
            setTitle(selectedPost.title);
            setBody(selectedPost.body);
        }
    }, [selectedPost]);

    // Handle form submission (Create or Update)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = { title, body, userId: 1 };

        if (selectedPost) {
            // Update Post
            try {
                await axios.put(`https://jsonplaceholder.typicode.com/posts/${selectedPost.id}`, postData);
                alert("Post Updated!");
            } catch (error) {
                console.error("Error updating post:", error);
            }
        } else {
            // Create Post
            try {
                await axios.post("https://jsonplaceholder.typicode.com/posts", postData);
                alert("Post Created!");
            } catch (error) {
                console.error("Error creating post:", error);
            }
        }

        // Reset form
        setTitle("");
        setBody("");
        setSelectedPost(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{selectedPost ? "Edit Post" : "Create Post"}</h2>
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <textarea 
                placeholder="Body" 
                value={body} 
                onChange={(e) => setBody(e.target.value)} 
                required 
            ></textarea>
            <button className="create" type="submit">
                {selectedPost ? "Update" : "Create"}
            </button>
        </form>
    );
};

export default PostForm;
