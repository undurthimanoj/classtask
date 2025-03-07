import React, { useState } from "react";
import PostList from "./components/PostList"; 
import PostForm from "./components/PostForm";

import "./App.css";

const App = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <div className="container">
            <h1 className="title">MERN CRUD with JSONPlaceholder</h1>
            <PostForm selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
            <PostList onEdit={setSelectedPost} />
        </div>
    );
};

export default App;
