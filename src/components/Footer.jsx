function Footer() {
  return (
    <footer className="bg-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-lg mb-4 tracking-widest">FRAGRANCE SOLUTION</h2>
          <p className="text-sm text-gray-400">
            Luxury fragrances curated for timeless elegance.
          </p>
        </div>

        <div>
          <h2 className="mb-4 tracking-widest">SHOP</h2>
          <p className="text-gray-400 text-sm">Fragrances</p>
          <p className="text-gray-400 text-sm">Accessories</p>
          <p className="text-gray-400 text-sm">Collections</p>
        </div>

        <div>
          <h2 className="mb-4 tracking-widest">CONTACT</h2>
          <p className="text-gray-400 text-sm">support@fragrance.com</p>
          <p className="text-gray-400 text-sm">Lagos, Nigeria</p>
        </div>

      </div>

      <div className="text-center text-sm pb-6 text-gray-500">
        © {new Date().getFullYear()} Fragrance Solution
      </div>

    </footer>
  )
}

export default Footer