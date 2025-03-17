
import "./App.css";


// Layout Components
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

// Page Components
import Home from "./pages/Home"
import Marketplace from "./pages/Marketplace"



import MicroLoan from "./pages/MicroLoan"




function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/artisans" element={<ArtisanDirectory />} />
            <Route path="/artisan/:id" element={<ArtisanProfile />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/micro-loans" element={<MicroLoan />} />
            <Route path="/skill-development" element={<SkillDevelopment />} />
            <Route path="/supply-chain" element={<SupplyChain />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App

