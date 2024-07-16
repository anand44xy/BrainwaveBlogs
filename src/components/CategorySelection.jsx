import React from 'react';

const CategorySelection = ({ onSelectionCategory, activeCategory }) => {
    const categories = ["Startups", "Security", "AI", "Tech"];

    return (
        <div className='px-4  py-6 text-base mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 text-gray-900 font-semibold'>
            <button
                onClick={() => onSelectionCategory(null)}
                className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`}
            >
                All
            </button>

            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectionCategory(category)}
                    className={`mr-2 space-x-16 ${activeCategory === category ? "active-button" : ""}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategorySelection;
