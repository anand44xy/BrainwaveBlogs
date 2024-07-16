import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SlidBar from './SlidBar';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      // Filter by category
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  // Handle category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset page when category changes
    setActiveCategory(category); // Highlight selected category
  }

  return (
    <div className='p-4'>
      {/* Category section */}
      <div>
        <CategorySelection onSelectionCategory={handleCategoryChange} activeCategory={activeCategory} />
      </div>

      {/* Blog cards and slider section */}
      <div className='flex flex-col lg:flex-row lg:gap-12'>
        {/* Blog cards component */}
        <div className='lg:w-3/4'>
          <BlogCards 
            blogs={blogs} 
            currentPage={currentPage} 
            selectedCategory={selectedCategory} 
            pageSize={pageSize} 
          />
        </div>

        {/* Slider component */}
        <div className='lg:w-1/4'>
          <SlidBar />
        </div>
      </div>

      {/* Pagination section */}
      <Pagination 
        onPageChange={handlePageChange} 
        currentPage={currentPage} 
        blogs={blogs} 
        pageSize={pageSize} 
      />
    </div>
  );
}

export default BlogPage;
