import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-screen flex items-center justify-center text-white text-center relative">
        <div className="hero-content max-w-lg">
          <Image
            src="/images/logo.png"
            width={200}
            height={200}
            alt="Site Logo"
            className="mx-auto mb-3"
          />
          <div>
            <h1 className="text-6xl font-serif text-green-700">
              Localhost Wines & Spirits
            </h1>
            <p className="mt-4 text-small font-light">
              Discovering the finest from all over the world.
            </p>
          </div>
          <a
            href="#shop"
            className="mt-6 inline-block bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section id="shop" className="product-highlights py-12 text-center">
        <h2 className="text-3xl font-semibold">Featured Products</h2>
        <div className="products flex justify-around mt-8">
          <div className="product">
            <Image
              src="/images/product1.jpg"
              alt="Product 1"
              width={300}
              height={400}
              className="mx-auto"
            />
            <h3 className="mt-4 text-xl">Product Name</h3>
            <p className="text-gray-600 mt-2">$29.99</p>
          </div>
          {/* Repeat for more products */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
