import React from "react";
import BlogCard from "./BlogCard";

const BlogPortal = ({ blogs }) => {
    return (
        <div className="flex flex-wrap">
            {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
            ))}
        </div>
    );
};

export default BlogPortal;
