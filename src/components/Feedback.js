import { useState } from "react";
import { HiChevronDown, HiPhotograph } from "react-icons/hi";
import { FaCommentAlt } from "react-icons/fa";

const FeedbackForm = () => {
    const [feedbackType, setFeedbackType] = useState("");
    const [feedbackDetails, setFeedbackDetails] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFeedbackTypeChange = (event) => {
        setFeedbackType(event.target.value);
    };

    const handleFeedbackDetailsChange = (event) => {
        setFeedbackDetails(event.target.value);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="min-h-screen bg-gradient-to-tr from-purple-500 to-indigo-700 flex items-center justify-center">
            <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="flex flex-row">
                    <h1 className="text-3xl font-bold mb-4 mr-4  italic">
                        Share your feedback
                    </h1>
                    <FaCommentAlt className="text-blue-500 text-5xl mb-6 " />
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                    We would love to hear your feedback on the time you spent on
                    the hood.
                </p>
                <div className="mb-6">
                    <div className="flex items-center mb-2">
                        <p className="mr-2 text-lg">
                            What's your feedback about?
                        </p>
                        <div className="relative inline-block">
                            <select
                                value={feedbackType}
                                onChange={handleFeedbackTypeChange}
                                className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                                <option value="" disabled hidden>
                                    Please Select
                                </option>
                                <option value="bugs_crashes">
                                    Bugs and Crashes
                                </option>
                                <option value="feature_request">
                                    Feature Request
                                </option>
                                <option value="other">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <HiChevronDown />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="mb-2 text-lg">Add details</p>
                    <input
                        type="text"
                        placeholder="e.g. I found a bug..."
                        value={feedbackDetails}
                        onChange={handleFeedbackDetailsChange}
                        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-gray-500"
                    />
                </div>
                <div className="mb-6">
                    <p className="mb-2 text-lg">Upload Image (Optional)</p>
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
                </div>

                <button
                    onClick={handleSubmit}
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default FeedbackForm;
