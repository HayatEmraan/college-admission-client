import React from 'react';

const QuickLinks = () => {
    return (
        <div className="max-w-7xl mx-auto p-2 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-medium mt-16 font-Inter text-center mb-4">Quick Links</h1>
            <div className='flex justify-center gap-6 quick-links'>
                <p>MS Computer Science</p>
                <p>MS Information Technology</p>
                <p>MS Economics</p>
                <p>MS Business</p>
                <p>MS Management</p>
            </div>
        </div>
    );
};

export default QuickLinks;