import { Link } from "react-router-dom"
import "./FeaturedProducts.css"

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
  },
]

const FeaturedProducts = () => {
  return (
    <div className="featured-products-grid">
      {products.map((product) => (
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
  )
}

export default FeaturedProducts

