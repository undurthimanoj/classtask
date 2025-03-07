import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PostList.css"; // Optional styling

const PostList = ({ onEdit }) => {
    const [posts, setPosts] = useState([]);

    // Fetch posts from JSONPlaceholder
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then(response => setPosts(response.data))
            .catch(error => console.error("Error fetching posts:", error));
    }, []);

    // Delete a post
    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return (
        <div>
            <h2>Posts</h2>
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button className="edit" onClick={() => onEdit(post)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default PostList;
