
import "./FeaturedArtisans.css"

// Mock data - in a real app, this would come from an API
const artisans = [
  {
    id: 1,
    name: "Ananya Chatterjee",
    craft: "Handloom Weaver",
    image: "/images/artisans/ananya.jpg",
    location: "Shantiniketan, West Bengal",
    rating: 4.8,
    products: 24,
  },
  {
    id: 2,
    name: "Rajib Das",
    craft: "Terracotta Artist",
    image: "/images/artisans/rajib.jpg",
    location: "Bankura, West Bengal",
    rating: 4.7,
    products: 18,
  },
  {
    id: 3,
    name: "Suman Ghosh",
    craft: "Dokra Artisan",
    image: "/images/artisans/suman.jpg",
    location: "Darjeeling, West Bengal",
    rating: 4.9,
    products: 32,
  },
  {
    id: 4,
    name: "Priya Roy",
    craft: "Bamboo Craftsperson",
    image: "/images/artisans/priya.jpg",
    location: "Siliguri, West Bengal",
    rating: 4.6,
    products: 15,
  },
]

const FeaturedArtisans = () => {
  return (
    <div className="featured-artisans-grid">
      {artisans.map((artisan) => (
        <div className="artisan-card" key={artisan.id}>
          <div className="artisan-img-container">
            <img
              src={artisan.image || "/placeholder.svg?height=300&width=300"}
              alt={artisan.name}
              className="artisan-img"
            />
          </div>
          <div className="artisan-info">
            <h3 className="artisan-name">{artisan.name}</h3>
            <p className="artisan-craft">{artisan.craft}</p>
            <div className="artisan-meta">
              <p className="artisan-location">
                <i className="fas fa-map-marker-alt"></i> {artisan.location}
              </p>
              <p className="artisan-rating">
                <i className="fas fa-star"></i> {artisan.rating} ({artisan.products} products)
              </p>
            </div>
            <Link to={`/artisan/${artisan.id}`} className="btn btn-outline btn-block">
              View Profile
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeaturedArtisans

