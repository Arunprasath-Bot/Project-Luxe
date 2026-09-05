import { useState, useMemo } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FilterBar from './components/FilterBar'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import { products } from './data/products'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [cartItems, setCartItems] = useState([])

  // Filter and search products
  const filteredProducts = useMemo(() => {
    let result = products

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return result
  }, [selectedCategory, searchTerm])

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  const handleRemoveFromCart = (itemKey) => {
    const [productId, size] = itemKey.split('-')
    const index = cartItems.findIndex(
      item => item.id === parseInt(productId) && item.selectedSize === size
    )
    if (index > -1) {
      setCartItems(cartItems.filter((_, i) => i !== index))
    }
  }

  const handleShopNow = () => {
    const filterElement = document.getElementById('filter-bar')
    filterElement?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        cartCount={cartItems.length}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <Hero onShopNowClick={handleShopNow} />
      <div id="filter-bar">
        <FilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      <ProductGrid
        products={filteredProducts}
        onAddToCart={handleAddToCart}
      />
      <Footer />
    </div>
  )
}

export default App
