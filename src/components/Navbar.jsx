import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Search } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl md:text-xl font-luxury tracking-widest text-darktext hover:text-red-600 transition"
        >
          FRAGRANCE <span className="text-primary italic font-bold">SOLUTION</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm tracking-widest">
          <Link className="hover:text-red-600 transition" to="/">Home</Link>
          <Link className="hover:text-red-600 transition" to="/fragrances">Fragrances</Link>
          <Link className="hover:text-red-600 transition" to="/accessories">Accessories</Link>
          <Link className="hover:text-red-600 transition" to="/collections">Collections</Link>
          <Link className="hover:text-red-600 transition" to="/about">About</Link>
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-4">
          <Link to="/search">
            <Search className="w-5 h-5 hover:text-red-600 transition" />
          </Link>
          <Link to="/wishlist">
            <Heart className="w-5 h-5 hover:text-red-600 transition" />
          </Link>
          <Link to="/cart">
            <ShoppingCart className="w-5 h-5 hover:text-red-600 transition" />
          </Link>

          {/* Hamburger */}
          <div
            className="md:hidden cursor-pointer text-2xl z-50 relative"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </div>
        </div>
      </div>

      {/* Side Slide-in Mobile Menu - Shortened Height */}
      <div
        className={`fixed top-16 right-0 h-[60vh] w-72 bg-white shadow-xl z-40 transform transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-6 px-6 space-y-6 text-lg text-darktext">
          {["Home", "Fragrances", "Accessories", "Collections", "About", "Cart"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="relative group text-xl transition duration-500"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-red-600 rounded-full group-hover:w-full transition-all duration-500"></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity duration-500"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;