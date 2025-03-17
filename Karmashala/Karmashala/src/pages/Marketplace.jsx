"use client"

import { useState } from "react"

import "./Marketplace.css"

// Mock data - in a real app, this would come from an API
const products = [
  {
    id: 1,
    name: "Handwoven Silk Saree",
    price: 4500,
    image: "/images/products/saree.jpg",
    artisan: "Ananya Chatterjee",
    artisanId: 1,
    category: "Textiles",
    location: "Shantiniketan, West Bengal",
    description: "Beautiful handwoven silk saree with traditional Bengali motifs.",
  },
  {
    id: 2,
    name: "Terracotta Horse Sculpture",
    price: 1200,
    image: "/images/products/terracotta.jpg",
    artisan: "Rajib Das",
    artisanId: 2,
    category: "Pottery",
    location: "Bankura, West Bengal",
    description: "Traditional Bankura horse sculpture made with authentic terracotta clay.",
  },
  {
    id: 3,
    name: "Dokra Metal Art Piece",
    price: 2800,
    image: "/images/products/dokra.jpg",
    artisan: "Suman Ghosh",
    artisanId: 3,
    category: "Metal Craft",
    location: "Darjeeling, West Bengal",
    description: "Handcrafted Dokra metal art piece using traditional lost-wax casting technique.",
  },
  {
    id: 4,
    name: "Bamboo Handicraft Basket",
    price: 850,
    image: "/images/products/bamboo.jpg",
    artisan: "Priya Roy",
    artisanId: 4,
    category: "Bamboo Craft",
    location: "Siliguri, West Bengal",
    description: "Eco-friendly bamboo basket handcrafted using traditional weaving techniques.",
  },
  {
    id: 5,
    name: "Kantha Embroidered Wall Hanging",
    price: 1800,
    image: "/images/products/kantha.jpg",
    artisan: "Rupa Devi",
    artisanId: 5,
    category: "Textiles",
    location: "Bolpur, West Bengal",
    description: "Beautiful wall hanging with intricate Kantha embroidery depicting rural Bengal life.",
  },
  {
    id: 6,
    name: "Wooden Mask",
    price: 950,
    image: "/images/products/mask.jpg",
    artisan: "Manik Sarkar",
    artisanId: 6,
    category: "Wood Craft",
    location: "Purulia, West Bengal",
    description: "Hand-carved wooden mask used in traditional Chhau dance performances.",
  },
  {
    id: 7,
    name: "Patachitra Painting",
    price: 2200,
    image: "/images/products/patachitra.jpg",
    artisan: "Lakshmi Mondal",
    artisanId: 7,
    category: "Painting",
    location: "Nadia, West Bengal",
    description: "Traditional scroll painting depicting mythological stories using natural colors.",
  },
  {
    id: 8,
    name: "Jute Handbag",
    price: 750,
    image: "/images/products/jute.jpg",
    artisan: "Amit Sen",
    artisanId: 8,
    category: "Jute Craft",
    location: "Kolkata, West Bengal",
    description: "Eco-friendly jute handbag with traditional Bengali designs and patterns.",
  },
]

// Categories
const categories = ["All", "Textiles", "Pottery", "Metal Craft", "Bamboo Craft", "Wood Craft", "Painting", "Jute Craft"]

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [sortBy, setSortBy] = useState("featured")

  // Filter products based on category, search term, and price range
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.artisan.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

    return matchesCategory && matchesSearch && matchesPrice
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price
    } else if (sortBy === "price-high") {
      return b.price - a.price
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    }
    // Default: featured
    return 0
  })

  return (
    <div className="marketplace">
      <div className="marketplace-hero">
        <div className="container">
          <h1>Explore Authentic Bengali Crafts</h1>
          <p>Discover unique handcrafted products directly from skilled artisans of West Bengal</p>
        </div>
      </div>

      <div className="container">
        <div className="marketplace-content">
          {/* Filters Sidebar */}
          <div className="marketplace-filters">
            <div className="filter-section">
              <h3>Search</h3>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fas fa-search"></i>
              </div>
            </div>

            <div className="filter-section">
              <h3>Categories</h3>
              <ul className="category-list">
                {categories.map((category) => (
                  <li
                    key={category}
                    className={selectedCategory === category ? "active" : ""}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-range">
                <div className="price-inputs">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                    min="0"
                    max={priceRange[1]}
                  />
                  <span>to</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    min={priceRange[0]}
                    max="10000"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                  className="price-slider"
                />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="marketplace-products">
            <div className="products-header">
              <div className="products-count">{sortedProducts.length} products found</div>
              <div className="products-sort">
                <label>Sort by:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>

            {sortedProducts.length === 0 ? (
              <div className="no-products">
                <i className="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="products-grid">
                {sortedProducts.map((product) => (
                  <div className="product-card" key={product.id}>
                    <div className="product-img-container">
                      <img
                        src={product.image || "/placeholder.svg?height=300&width=300"}
                        alt={product.name}
                        className="product-img"
                      />
                      <div className="product-overlay">
                        <Link to={`/product/${product.id}`} className="btn btn-primary">
                          View Details
                        </Link>
                      </div>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-price">₹{product.price.toLocaleString()}</p>
                      <div className="product-meta">
                        <p className="product-artisan">
                          By <Link to={`/artisan/${product.artisanId}`}>{product.artisan}</Link>
                        </p>
                        <p className="product-location">
                          <i className="fas fa-map-marker-alt"></i> {product.location}
                        </p>
                      </div>
                      <div className="product-category">{product.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketplace

