import React, { useState } from "react";
import { HiPhotograph } from "react-icons/hi";

const CreateBlogForm = ({ onCreateBlog }) => {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [description, setDescription] = useState("");
    const [conclusion, setConclusion] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {
            image: previewImage,
            title,
            summary,
            author,
            date,
            description,
            conclusion,
        };

        onCreateBlog(blog);
        setImage("");
        setTitle("");
        setSummary("");
        setAuthor("");
        setDate("");
        setDescription("");
        setConclusion("");
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        try {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        } catch (error) {
            console.error("File system error:", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-4 bg-white shadow rounded"
        >
            <div className="mb-4">
                <div className="mb-6">
                    <p className="mb-2 text-lg">Upload Image</p>
                    <div className="flex items-center">
                        <label
                            htmlFor="uploadImage"
                            className="mr-2 cursor-pointer text-blue-500"
                        >
                            <HiPhotograph className="inline-block mr-1 text-2xl" />{" "}
                            Choose File
                        </label>
                        <input
                            id="uploadImage"
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </div>
                    {previewImage && (
                        <img
                            src={previewImage}
                            alt="Preview"
                            className="mt-2 w-40 h-auto"
                        />
                    )}
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-bold mb-1">
                    Title:
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 px-2 py-1 rounded"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="summary"
                    className="block text-sm font-bold mb-1"
                >
                    Summary:
                </label>
                <input
                    type="text"
                    id="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="w-full border border-gray-300 px-2 py-1 rounded"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="author"
                    className="block text-sm font-bold mb-1"
                >
                    Author:
                </label>
                <input
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full border border-gray-300 px-2 py-1 rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-bold mb-1">
                    Date:
                </label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border border-gray-300 px-2 py-1 rounded"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="description"
                    className="block text-sm font-bold mb-1"
                >
                    Description:
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border border-gray-300 px-2 py-1 rounded"
                ></textarea>
            </div>
            <div className="mb-4">
                <label
                    htmlFor="conclusion"
                    className="block text-sm font-bold mb-1"
                >
                    Conclusion:
                </label>
                <textarea
                    id="conclusion"
                    value={conclusion}
                    onChange={(e) => setConclusion(e.target.value)}
                    className="w-full border border-gray-300 px-2 py-1 rounded"
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Create Blog
            </button>
        </form>
    );
};

export default CreateBlogForm;
