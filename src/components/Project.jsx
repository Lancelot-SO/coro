/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { articleNav } from '../data';
import { articleData } from '../data';
import Book from './Book';

const ITEMS_PER_PAGE = 6;

function Project() {
    const [item, setItem] = useState({ name: 'All' });
    const [articles, setArticles] = useState([]);
    const [active, setActive] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // Get the articles based on the clicked category
        if (item.name === 'All') {
            setArticles(articleData);
        } else {
            const filteredArticles = articleData.filter((project) =>
                project.category.toLowerCase() === item.name.toLowerCase()
            );
            setArticles(filteredArticles);
        }
        setCurrentPage(1); // Reset to first page when category changes
    }, [item]);

    const handleClick = (e, index) => {
        setItem({
            name: e.target.textContent,
        });
        setActive(index);
    };

    // Pagination logic
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentArticles = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <nav className="w-full h-[44px] px-4 flex items-center">
                <ul className="flex gap-4">
                    {articleNav.map((navItem, index) => (
                        <li
                            onClick={(e) => handleClick(e, index)}
                            key={index}
                            className={`${active === index
                                ? 'bg-[#B580D1] text-white'
                                : 'bg-[#F7F7F8] text-black'
                                } p-2 rounded-lg cursor-pointer text-[16px] font-semibold leading-[24px]`}
                        >
                            {navItem.name}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Project grid */}
            <section>
                <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentArticles.map((item) => (
                        <Book item={item} key={item.id} />
                    ))}
                </div>

                {/* Pagination controls */}
                <div className="flex justify-center items-center mt-8">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="px-3 py-1 mx-1 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-200 disabled:opacity-50"
                    >
                        &lt;
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 mx-1 border ${currentPage === index + 1
                                ? 'bg-purple-500 text-white'
                                : 'border-gray-300 text-gray-500'
                                } rounded-lg hover:bg-purple-500 hover:text-white`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 mx-1 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-200 disabled:opacity-50"
                    >
                        &gt;
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Project;
