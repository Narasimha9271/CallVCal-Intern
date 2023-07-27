import React from "react";
import { useParams } from "react-router-dom";

const BlogPage = ({ blogs }) => {
    const { id } = useParams();

    const blog = blogs.find((blog) => blog.id === id);

    if (!blog) {
        return <div>Blog not found!</div>;
    }

    return (
        <div className="mx-0 p-4 bg-gradient-to-r from-teal-400 to-purple-600">
            <img
                src={blog.image}
                alt="Blog"
                className="w-80 h-60 object-cover mb-4 mx-auto"
            />
            <h2 className="text-3xl font-bold text-white">{blog.title}</h2>
            <p className="text-xl text-white mb-2">{blog.summary}</p>
            <div className="flex justify-between text-white mb-4">
                <p>{blog.author}</p>
                <p>{blog.date}</p>
            </div>
            <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Description:</h3>
                <p>{blog.description}</p>
            </div>
            <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Conclusion:</h3>
                <p>{blog.conclusion}</p>
            </div>
        </div>
    );
};

export default BlogPage;
