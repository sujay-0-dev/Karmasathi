"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, User, ShoppingBag, CreditCard, BookOpen, LogIn } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would be determined by your auth state

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-600">Karmasathi</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 group-hover:text-orange-600 px-3 py-2 text-sm font-medium flex items-center">
                Marketplace
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link
                    href="/marketplace"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    All Products
                  </Link>
                  <Link
                    href="/marketplace?category=textiles"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    Textiles
                  </Link>
                  <Link
                    href="/marketplace?category=pottery"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    Pottery
                  </Link>
                  <Link
                    href="/marketplace?category=woodcraft"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    Wood Craft
                  </Link>
                  <Link
                    href="/marketplace?category=metalcraft"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    Metal Craft
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/artisans" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium">
              Artisans
            </Link>
            <Link href="/loans" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium">
              Micro-Loans
            </Link>
            <Link href="/workshops" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium">
              Workshops
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium">
              About Us
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="text-gray-700 hover:text-orange-600">
                  <User className="h-5 w-5" />
                </Link>
                <Link href="/cart" className="text-gray-700 hover:text-orange-600">
                  <ShoppingBag className="h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium">
                  Login
                </Link>
                <Link
                  href="/artisans/register"
                  className="bg-orange-600 text-white hover:bg-orange-700 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Register as Artisan
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/marketplace"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
            >
              Marketplace
            </Link>
            <Link
              href="/artisans"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
            >
              Artisans
            </Link>
            <Link
              href="/loans"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
            >
              Micro-Loans
            </Link>
            <Link
              href="/workshops"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
            >
              Workshops
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
            >
              About Us
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              {isLoggedIn ? (
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="/placeholder.svg?height=40&width=40"
                    alt="User profile"
                  />
                </div>
              ) : (
                <div className="flex-shrink-0 bg-gray-100 rounded-full p-2">
                  <User className="h-6 w-6 text-gray-600" />
                </div>
              )}
              <div className="ml-3">
                {isLoggedIn ? (
                  <>
                    <div className="text-base font-medium text-gray-800">Ananya Banerjee</div>
                    <div className="text-sm font-medium text-gray-500">ananya@example.com</div>
                  </>
                ) : (
                  <div className="text-base font-medium text-gray-800">Guest User</div>
                )}
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block, px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 flex items-center"
                  >
                    <User className="mr-2 h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/orders"
                    className="block, px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 flex items-center"
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    My Orders
                  </Link>
                  <Link
                    href="/loans/my"
                    className="block, px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 flex items-center"
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    My Loans
                  </Link>
                  <Link
                    href="/workshops/enrolled"
                    className="block, px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 flex items-center"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    My Workshops
                  </Link>
                  <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50">
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block, px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 flex items-center"
                  >
                    <LogIn className="mr-2 h-5 w-5" />
                    Login
                  </Link>
                  <Link
                    href="/artisans/register"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-orange-600 text-white hover:bg-orange-700"
                  >
                    Register as Artisan
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

