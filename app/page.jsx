import Link from "next/link"
import { ArrowRight, Palette, CreditCard, BookOpen, MapPin, ShoppingBag } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Karmasathi</h1>
              <p className="text-xl md:text-2xl mb-6">Empowering Bengal's Artisans through Technology</p>
              <p className="text-lg mb-8">
                Connect with skilled artisans, explore authentic handcrafted products, and support traditional
                craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/marketplace"
                  className="bg-white text-orange-600 hover:bg-orange-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center"
                >
                  Explore Marketplace <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/artisans/register"
                  className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium flex items-center justify-center"
                >
                  Register as Artisan
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.svg?height=400&width=600" alt="Bengal Artisans" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Karmasathi Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Palette className="text-orange-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Marketplace</h3>
              <p className="text-gray-600">
                Showcase your crafts to customers worldwide. Sell directly without middlemen and earn fair prices for
                your work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <CreditCard className="text-orange-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Micro-Loan Facilitation</h3>
              <p className="text-gray-600">
                Access small loans to purchase raw materials, upgrade tools, or expand your business with simplified
                application process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BookOpen className="text-orange-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
              <p className="text-gray-600">
                Learn new techniques, modern designs, and business skills through online workshops and community
                knowledge sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Artisans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArtisans.map((artisan) => (
              <div key={artisan.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={artisan.image || "/placeholder.svg"}
                  alt={artisan.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <h3 className="text-xl font-semibold">{artisan.name}</h3>
                    <div className="ml-auto flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{artisan.location}</span>
                    </div>
                  </div>
                  <p className="text-orange-600 font-medium mb-3">{artisan.craft}</p>
                  <p className="text-gray-600 mb-4">{artisan.description}</p>
                  <Link
                    href={`/artisans/${artisan.id}`}
                    className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
                  >
                    View Profile <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/artisans"
              className="bg-orange-600 text-white hover:bg-orange-700 px-6 py-3 rounded-lg font-medium inline-flex items-center"
            >
              View All Artisans <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.isFeatured && (
                    <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{product.artisan}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-bold">₹{product.price}</span>
                    <Link
                      href={`/marketplace/${product.id}`}
                      className="bg-orange-100 text-orange-600 hover:bg-orange-200 p-2 rounded-full"
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/marketplace"
              className="bg-orange-600 text-white hover:bg-orange-700 px-6 py-3 rounded-lg font-medium inline-flex items-center"
            >
              Explore Marketplace <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Karmasathi Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're an artisan looking to showcase your craft or a customer seeking authentic handcrafted
            products, Karmasathi is the platform for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/artisans/register"
              className="bg-white text-orange-600 hover:bg-orange-100 px-6 py-3 rounded-lg font-medium"
            >
              Register as Artisan
            </Link>
            <Link
              href="/marketplace"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium"
            >
              Browse Marketplace
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const featuredArtisans = [
  {
    id: 1,
    name: "Ananya Banerjee",
    location: "Shantiniketan",
    craft: "Kantha Embroidery",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Creating intricate Kantha embroidery pieces for over 20 years, specializing in traditional Bengali motifs.",
  },
  {
    id: 2,
    name: "Rajib Das",
    location: "Krishnanagar",
    craft: "Clay Pottery",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Third-generation potter crafting exquisite clay sculptures and functional pottery using traditional techniques.",
  },
  {
    id: 3,
    name: "Priya Mondal",
    location: "Murshidabad",
    craft: "Silk Weaving",
    image: "/placeholder.svg?height=300&width=400",
    description: "Master silk weaver creating luxurious Murshidabad silk sarees with intricate designs and patterns.",
  },
]

const featuredProducts = [
  {
    id: 1,
    name: "Kantha Embroidered Shawl",
    artisan: "Ananya Banerjee",
    price: 2500,
    image: "/placeholder.svg?height=300&width=400",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Decorative Clay Vase",
    artisan: "Rajib Das",
    price: 1200,
    image: "/placeholder.svg?height=300&width=400",
    isFeatured: false,
  },
  {
    id: 3,
    name: "Murshidabad Silk Saree",
    artisan: "Priya Mondal",
    price: 8500,
    image: "/placeholder.svg?height=300&width=400",
    isFeatured: true,
  },
  {
    id: 4,
    name: "Bamboo Craft Basket",
    artisan: "Sunil Mahato",
    price: 850,
    image: "/placeholder.svg?height=300&width=400",
    isFeatured: false,
  },
]

