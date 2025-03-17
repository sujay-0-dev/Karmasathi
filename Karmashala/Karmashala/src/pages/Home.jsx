
import "./Home.css"

// Components
import FeaturedProducts from "../components/products/FeaturedProducts"
import FeaturedArtisans from "../components/artisans/FeaturedArtisans"
import Testimonials from "../components/common/Testimonials"
import Stats from "../components/common/Stats"

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Empowering Artisans, Preserving Heritage</h1>
            <p>
              Karmasathi connects skilled artisans of West Bengal with global markets, provides financial support, and
              preserves traditional crafts for future generations.
            </p>
            <div className="hero-buttons">
              <Link to="/marketplace" className="btn btn-primary">
                Explore Marketplace
              </Link>
              <Link to="/register" className="btn btn-outline">
                Join as Artisan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title">
            How <span>Karmasathi</span> Works
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-store"></i>
              </div>
              <h3>Digital Marketplace</h3>
              <p>Showcase your crafts to customers worldwide and sell directly without middlemen.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Micro-Loans</h3>
              <p>Access affordable financial support to grow your business and improve your craft.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Skill Development</h3>
              <p>Learn new techniques, modern designs, and business skills through our workshops.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-route"></i>
              </div>
              <h3>Tourism Integration</h3>
              <p>Connect with tourists interested in authentic cultural experiences and crafts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products section">
        <div className="container">
          <h2 className="section-title">
            Featured <span>Products</span>
          </h2>
          <FeaturedProducts />
          <div className="text-center mt-4">
            <Link to="/marketplace" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artisans Section */}
      <section className="featured-artisans section">
        <div className="container">
          <h2 className="section-title">
            Featured <span>Artisans</span>
          </h2>
          <FeaturedArtisans />
          <div className="text-center mt-4">
            <Link to="/artisans" className="btn btn-primary">
              View All Artisans
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <Stats />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <h2 className="section-title">
            What Our <span>Artisans</span> Say
          </h2>
          <Testimonials />
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Showcase Your Craft?</h2>
            <p>Join thousands of artisans who are growing their business with Karmasathi.</p>
            <Link to="/register" className="btn btn-primary">
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

