import React from "react";

const BlogCard = ({ blog }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 mx-2 w-80  ">
            {blog.image && (
                <img
                    src={blog.image}
                    alt="Blog"
                    className="w-70 h-40 object-cover mb-4 pl-5 "
                />
            )}
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-gray-600 mb-2">{blog.summary}</p>
            <div className="flex justify-between">
                <p className="text-sm text-gray-500">{blog.author}</p>
                <p className="text-sm text-gray-500">{blog.date}</p>
            </div>
        </div>
    );
};

export default BlogCard;
