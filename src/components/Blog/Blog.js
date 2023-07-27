import React, { useState } from "react";
import CreateBlogForm from "./CreateBlogForm";
import BlogPortal from "./BlogPortal";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    const handleCreateBlog = (blog) => {
        setBlogs([...blogs, blog]);
    };

    return (
        <div className=" mx-0 p-4 relative z-[5] bg-gradient-to-r from-teal-400 to-purple-600">
            <h1 className="text-4xl font-bold mb-4 pl-[600] text-white">
                Write your blog
            </h1>
            <CreateBlogForm onCreateBlog={handleCreateBlog} />
            <h1 className="text-4xl font-bold mb-4 mt-5 pl-[600] text-white">
                Our Blogs
            </h1>
            <BlogPortal blogs={blogs} />
        </div>
    );
};

export default Blog;
