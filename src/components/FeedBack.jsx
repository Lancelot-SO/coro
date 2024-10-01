/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Feedback = ({ showModal, setShowModal }) => {
    const [rangeValue, setRangeValue] = useState(0);
    const [starRating, setStarRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        if (showModal) {
            setRangeValue(0); // Reset range value to 0 when modal is shown
            setStarRating(0); // Reset star rating to 0 when modal is shown
            setFeedback(''); // Reset feedback to empty when modal is shown
        }
    }, [showModal]);

    const handleStarClick = (index) => {
        setStarRating(index + 1); // Stars are 0-indexed, so add 1 to the clicked index
    };

    const handleSubmit = () => {
        if (starRating === 0 || rangeValue === 0) {
            toast.error('Please provide a star rating and a recommendation score.');
            return;
        }

        // Save the user's feedback to local storage
        localStorage.setItem('starRating', starRating);
        localStorage.setItem('rangeValue', rangeValue);
        localStorage.setItem('feedback', feedback);

        // Show success toast message
        toast.success('Submitted successfully');

        // Close the modal
        setShowModal(false);
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <ToastContainer />
            <div className="relative bg-white p-8 shadow-lg max-w-md mx-auto">
                <button
                    className="absolute top-0 right-0 m-4 text-xl w-2 h-2 rounded-full text-gray-400"
                    onClick={() => setShowModal(false)}
                >
                    &times;
                </button>
                <h2 className="text-[14px] font-normal mb-4">How would you rate our brand?</h2>
                <div className="flex justify-start mb-4 gap-4">
                    {[...Array(5)].map((_, i) => (
                        <span
                            key={i}
                            className={`text-3xl cursor-pointer ${i < starRating ? 'text-[#FF0226]' : 'text-gray-300'}`}
                            onClick={() => handleStarClick(i)}
                        >
                            &#9733;
                        </span>
                    ))}
                </div>
                <div className="mb-4">
                    <p className='text-[12px]'>Star Rating: {starRating}</p> {/* Display the star rating value */}
                </div>
                <div className="mb-4">
                    <label className="block mb-6 text-[12px]">
                        On a scale of 1 - 10, How likely are you to recommend Coronation to a friend or colleague?
                    </label>
                    <div className="relative">
                        <input
                            type="range"
                            min="0"
                            max="10"
                            value={rangeValue}
                            onChange={(e) => setRangeValue(e.target.value)}
                            className="w-full outline-none border-none"
                        />
                        <div className="flex justify-between text-gray-400">
                            <span>0</span>
                            <span>10</span>
                        </div>
                        <div
                            className="absolute text-xs text-[#FF0226]"
                            style={{
                                left: `calc(${(rangeValue / 10) * 100}% - ${rangeValue > 9 ? '16px' : '8px'})`,
                                top: '-20px',
                            }}
                        >
                            {rangeValue}
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-[12px]">More feedback for us? (optional)</label>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="leave us a feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>
                </div>
                <button
                    type="button"
                    className="bg-[#FF0226] text-white px-4 py-2"
                    onClick={handleSubmit}
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );
};

export default Feedback;
