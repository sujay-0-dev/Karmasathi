import Link from "next/link"
import { Search, Filter, ShoppingBag, Star, ChevronDown } from "lucide-react"

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Artisan Marketplace</h1>
          <p className="text-lg md:text-xl">Discover authentic handcrafted products from Bengal's skilled artisans</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <button className="flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg">
                  <Filter className="h-5 w-5 mr-2" />
                  Category
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg">
                  <Filter className="h-5 w-5 mr-2" />
                  Price
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg">
                  <Filter className="h-5 w-5 mr-2" />
                  Location
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                {product.isFeatured && (
                  <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">By {product.artisan}</p>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>
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

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">Previous</button>
            <button className="px-3 py-1 rounded-md bg-orange-600 text-white">1</button>
            <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">2</button>
            <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">3</button>
            <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">Next</button>
          </nav>
        </div>
      </div>
    </div>
  )
}

// Sample data
const products = [
  {
    id: 1,
    name: "Kantha Embroidered Shawl",
    artisan: "Ananya Banerjee",
    price: 2500,
    image: "/placeholder.svg?height=300&width=400",
    description: "Handcrafted Kantha embroidery shawl with traditional Bengali motifs.",
    rating: 5,
    reviews: 24,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Decorative Clay Vase",
    artisan: "Rajib Das",
    price: 1200,
    image: "/placeholder.svg?height=300&width=400",
    description: "Hand-painted terracotta vase with intricate designs.",
    rating: 4,
    reviews: 18,
    isFeatured: false,
  },
  {
    id: 3,
    name: "Murshidabad Silk Saree",
    artisan: "Priya Mondal",
    price: 8500,
    image: "/placeholder.svg?height=300&width=400",
    description: "Pure Murshidabad silk saree with traditional weaving patterns.",
    rating: 5,
    reviews: 32,
    isFeatured: true,
  },
  {
    id: 4,
    name: "Bamboo Craft Basket",
    artisan: "Sunil Mahato",
    price: 850,
    image: "/placeholder.svg?height=300&width=400",
    description: "Eco-friendly bamboo basket handcrafted by skilled artisans.",
    rating: 4,
    reviews: 15,
    isFeatured: false,
  },
  {
    id: 5,
    name: "Dokra Metal Figurine",
    artisan: "Ratan Karmakar",
    price: 3200,
    image: "/placeholder.svg?height=300&width=400",
    description: "Traditional Dokra metal casting figurine with tribal motifs.",
    rating: 5,
    reviews: 27,
    isFeatured: false,
  },
  {
    id: 6,
    name: "Handloom Cotton Stole",
    artisan: "Lakshmi Roy",
    price: 950,
    image: "/placeholder.svg?height=300&width=400",
    description: "Handwoven cotton stole with natural dyes and traditional patterns.",
    rating: 4,
    reviews: 21,
    isFeatured: false,
  },
  {
    id: 7,
    name: "Wooden Mask",
    artisan: "Bimal Sarkar",
    price: 1800,
    image: "/placeholder.svg?height=300&width=400",
    description: "Hand-carved wooden mask representing traditional Bengali folklore.",
    rating: 4,
    reviews: 19,
    isFeatured: false,
  },
  {
    id: 8,
    name: "Jute Handbag",
    artisan: "Sabita Devi",
    price: 1100,
    image: "/placeholder.svg?height=300&width=400",
    description: "Eco-friendly jute handbag with colorful embroidery work.",
    rating: 4,
    reviews: 23,
    isFeatured: false,
  },
]

