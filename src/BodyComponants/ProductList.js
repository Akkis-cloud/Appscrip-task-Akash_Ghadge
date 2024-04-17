import React, { useState, useEffect } from 'react';
import './ProductList.css'; // Import your CSS file for styling

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [tempproducts, tempsetProducts] = useState([]);
  const [sortBy, setSortBy] = useState('RECOMMENDED');
  const [category, setCategory] = useState('ALL');
// let temp=[...products];

  useEffect(() => {
    // Fetch products from API
    fetch('https://fakestoreapi.com/products?limit=8')
      .then(response => response.json())
      .then(data=> {setProducts(data);tempsetProducts(data)});
  }, []); // Run once on component mount


  const [isClicked, setIsClicked] = useState(false);
  const handleHeartClick = (productId) => {
    // Update the liked state of the product
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, liked: !product.liked } : product
    );
    setProducts(updatedProducts);
  };

  const handleSortChange = (e) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);

    // Sort products based on the selected option
    let sortedProducts = [...products];
    if (selectedSortBy === 'LOW_HIGH') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSortBy === 'HIGH_LOW') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    // Filter products based on the selected category
    let filteredProducts = [...tempproducts];
    if (selectedCategory !== 'ALL') {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }
    console.log(filteredProducts,products);
    setProducts(filteredProducts);
  };

  return (
    <div className="product-list-container">
      <div className="filter-bar">
        <div className="filters">
          <div className="filter-item">
            <label htmlFor="sort-by">Sort By:</label>
            <select id="sort-by" value={sortBy} onChange={handleSortChange}>
              <option value="RECOMMENDED">Recommended</option>
              {/* <option value="NEWEST">Newest First</option>
              <option value="POPULAR">Popular</option> */}
              <option value="LOW_HIGH">Price: Low to High</option>
              <option value="HIGH_LOW">Price: High to Low</option>
            </select>
          </div>
          <div className="filter-item">
            <label htmlFor="category">Category:</label>
            <select id="category" value={category} onChange={handleCategoryChange}>
              <option value="ALL">All</option>
              <option value="jewelery">Jewelry</option>
              <option value="men's clothing">Men's Clothing</option>
            </select>
          </div>
        </div>
      </div>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-item" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <strong className='title'>{product.title.slice(0, 10)}...</strong>
              <p>
                <span className="underline">Sign in</span> or Create an account to see pricing{' '}
                
                <span
                  className="heart-icon"
                  onClick={() => handleHeartClick(product.id)}
                >
                  &#9825;;
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;