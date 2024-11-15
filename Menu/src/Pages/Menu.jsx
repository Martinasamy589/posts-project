import React, { useState } from 'react';
import './Styles/Menu.css';

export const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('hotDrinks');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const categories = {
        hotDrinks: [
            { id: 1, image: './public/Coffee.png', description: 'Hot Drink 1', price: '$12.99' },
            { id: 2, image: './public/Coffee.png', description: 'Hot Drink 2', price: '$9.99' },
            { id: 3, image: './public/Coffee.png', description: 'Hot Drink 3', price: '$10.00' },
            { id: 4, image: './public/Coffee.png', description: 'Hot Drink 4', price: '$12.99' },
            { id: 5, image: './public/Coffee.png', description: 'Hot Drink 5', price: '$9.99' },
            { id: 6, image: './public/Coffee.png', description: 'Hot Drink 6', price: '$12.99' },
            { id: 7, image: './public/Coffee.png', description: 'Hot Drink 7', price: '$9.99' },
            { id: 8, image: './public/Coffee.png', description: 'Hot Drink 8', price: '$12.99' },
            { id: 9, image: './public/Coffee.png', description: 'Hot Drink 9', price: '$9.99' },
            { id: 10, image: './public/Coffee.png', description: 'Hot Drink 10', price: '$12.99' },
            { id: 11, image: './public/Coffee.png', description: 'Hot Drink 11', price: '$9.99' },
            { id: 12, image: './public/Coffee.png', description: 'Hot Drink 12', price: '$10.00' },
            { id: 13, image: './public/Coffee.png', description: 'Hot Drink 13', price: '$12.99' },
            { id: 14, image: './public/Coffee.png', description: 'Hot Drink 14', price: '$9.99' },
            { id: 15, image: './public/Coffee.png', description: 'Hot Drink 15', price: '$12.99' },
            { id: 16, image: './public/Coffee.png', description: 'Hot Drink 16', price: '$9.99' },
            { id: 17, image: './public/Coffee.png', description: 'Hot Drink 17', price: '$12.99' },
            { id: 18, image: './public/Coffee.png', description: 'Hot Drink 18', price: '$9.99' },
        ],
        coldDrinks: [
            { id: 1, image: './public/Coca.png', description: 'Cold Drink 1', price: '$12.99' },
            { id: 2, image: './public/Coca.png', description: 'Cold Drink 2', price: '$9.99' },
            { id: 3, image: './public/Coca.png', description: 'Cold Drink 3', price: '$10.00' },
            { id: 4, image: './public/Coca.png', description: 'Cold Drink 4', price: '$12.99' },
            { id: 5, image: './public/Coca.png', description: 'Cold Drink 5', price: '$9.99' },
            { id: 6, image: './public/Coca.png', description: 'Cold Drink 6', price: '$12.99' },
            { id: 7, image: './public/Coca.png', description: 'Cold Drink 7', price: '$9.99' },
            { id: 8, image: './public/Coca.png', description: 'Cold Drink 8', price: '$12.99' },
            { id: 9, image: './public/Coca.png', description: 'Cold Drink 9', price: '$9.99' },
            { id: 10, image: './public/Coca.png', description: 'Cold Drink 10', price: '$12.99' },
            { id: 11, image: './public/Coca.png', description: 'Cold Drink 11', price: '$9.99' },
            { id: 12, image: './public/Coca.png', description: 'Cold Drink 12', price: '$10.00' },
            { id: 13, image: './public/Coca.png', description: 'Cold Drink 13', price: '$12.99' },
            { id: 14, image: './public/Coca.png', description: 'Cold Drink 14', price: '$9.99' },
            { id: 15, image: './public/Coca.png', description: 'Cold Drink 15', price: '$12.99' },
            { id: 16, image: './public/Coca.png', description: 'Cold Drink 16', price: '$9.99' },
            { id: 17, image: './public/Coca.png', description: 'Cold Drink 17', price: '$12.99' },
            { id: 18, image: './public/Coca.png', description: 'Cold Drink 18', price: '$9.99' },
        ],
        sweets: [
            { id: 1, image: '', description: 'Sweet 1', price: '$12.99' },
            { id: 2, image: '', description: 'Sweet 2', price: '$9.99' },
            { id: 3, image: '', description: 'Sweet 3', price: '$10.00' },
            { id: 4, image: '', description: 'Sweet 4', price: '$12.99' },
            { id: 5, image: '', description: 'Sweet 5', price: '$9.99' },
            { id: 6, image: '', description: 'Sweet 6', price: '$10.00' },
            { id: 7, image: '', description: 'Sweet 7', price: '$12.99' },
            { id: 8, image: '', description: 'Sweet 8', price: '$9.99' },
            { id: 9, image: '', description: 'Sweet 9', price: '$10.00' },
            { id: 10, image: '', description: 'Sweet 10', price: '$12.99' },
            { id: 11, image: '', description: 'Sweet 11', price: '$9.99' },
            { id: 12, image: '', description: 'Sweet 12', price: '$10.00' },
            { id: 13, image: '', description: 'Sweet 13', price: '$12.99' },
            { id: 14, image: '', description: 'Sweet 14', price: '$9.99' },
            { id: 15, image: '', description: 'Sweet 15', price: '$10.00' },
            { id: 16, image: '', description: 'Sweet 16', price: '$12.99' },
            { id: 17, image: '', description: 'Sweet 17', price: '$9.99' },
            { id: 18, image: '', description: 'Sweet 18', price: '$10.00' },
        ],
        hookah: [
            { id: 1, image: '', description: 'Hookah 1', price: '$12.99' },
            { id: 2, image: '', description: 'Hookah 2', price: '$9.99' },
            { id: 3, image: '', description: 'Hookah 3', price: '$10.00' },
            { id: 4, image: '', description: 'Hookah 4', price: '$12.99' },
            { id: 5, image: '', description: 'Hookah 5', price: '$9.99' },
            { id: 6, image: '', description: 'Hookah 6', price: '$10.00' },
            { id: 7, image: '', description: 'Hookah 7', price: '$12.99' },
            { id: 8, image: '', description: 'Hookah 8', price: '$9.99' },
            { id: 9, image: '', description: 'Hookah 9', price: '$10.00' },
            { id: 10, image: '', description: 'Hookah 10', price: '$12.99' },
            { id: 11, image: '', description: 'Hookah 11', price: '$9.99' },
            { id: 12, image: '', description: 'Hookah 12', price: '$10.00' },
            { id: 13, image: '', description: 'Hookah 13', price: '$12.99' },
            { id: 14, image: '', description: 'Hookah 14', price: '$9.99' },
            { id: 15, image: '', description: 'Hookah 15', price: '$10.00' },
            { id: 16, image: '', description: 'Hookah 16', price: '$12.99' },
            { id: 17, image: '', description: 'Hookah 17', price: '$9.99' },
            { id: 18, image: '', description: 'Hookah 18', price: '$10.00' },
        ]
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const currentItems = categories[activeCategory].slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(categories[activeCategory].length / itemsPerPage);

    return (
        <>
            <div className='menu-box'>
                <div className="selection-box">
                    <button className={`menu-button ${activeCategory === 'hotDrinks' ? 'active' : ''}`} onClick={() => handleCategoryClick('hotDrinks')}>
                        Hot Drinks
                    </button>
                    <button className={`menu-button ${activeCategory === 'coldDrinks' ? 'active' : ''}`} onClick={() => handleCategoryClick('coldDrinks')}>
                        Cold Drinks
                    </button>
                    <button className={`menu-button ${activeCategory === 'sweets' ? 'active' : ''}`} onClick={() => handleCategoryClick('sweets')}>
                        Sweets
                    </button>
                    <button className={`menu-button ${activeCategory === 'hookah' ? 'active' : ''}`} onClick={() => handleCategoryClick('hookah')}>
                        Hookah
                    </button>
                </div>

                <div className="menu-item">
                    {currentItems.map(item => (

                        <div key={item.id} className="card">

                            <img src={item.image} alt={item.description} className="card-image" />

                            <div className="card-content">

                                <p className="card-description">{item.description}</p>
                                <p className="card-price">{item.price}</p>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>

                    <span>{`Page ${currentPage} of ${totalPages}`}</span>
                    
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};
