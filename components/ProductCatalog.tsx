'use client';

import { useEffect, useMemo, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductCatalogProps {
  isDarkMode: boolean;
}

const API_URL = 'https://fakestoreapi.com/products';

export default function ProductCatalog({ isDarkMode }: ProductCatalogProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('Unable to load products right now.');
      }

      const data: Product[] = await response.json();
      setProducts(data);
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : 'Something went wrong while loading products.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.toLowerCase().trim();

    return products.filter((product) =>
      `${product.title} ${product.category}`.toLowerCase().includes(normalizedSearch),
    );
  }, [products, searchTerm]);

  return (
    <section id="catalog" className={`${isDarkMode ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-900'} px-6 py-16 transition-colors duration-300`}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`${isDarkMode ? 'text-cyan-300' : 'text-blue-600'} mb-2 text-sm font-semibold uppercase tracking-[0.2em]`}>Live catalog</p>
            <h2 className="text-3xl font-bold md:text-4xl">Explore our latest products</h2>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mt-3 max-w-2xl`}>
              A real-time product collection loaded from an external REST API.
            </p>
          </div>

          {!isLoading && !error && (
            <label className="w-full md:max-w-xs">
              <span className="sr-only">Search products</span>
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search products..."
                className={`${isDarkMode ? 'border-slate-600 bg-slate-900 text-white placeholder:text-slate-500 focus:border-cyan-300' : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-600'} w-full rounded-lg border px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500/20`}
              />
            </label>
          )}
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" aria-label="Loading products" role="status">
            {Array.from({ length: 8 }, (_, index) => (
              <div key={index} className={`${isDarkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'} animate-pulse overflow-hidden rounded-xl border`}>
                <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'} aspect-square`} />
                <div className="space-y-3 p-5">
                  <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'} h-4 rounded`} />
                  <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'} h-4 w-2/3 rounded`} />
                  <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'} h-8 w-1/3 rounded`} />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className={`${isDarkMode ? 'border-red-400/30 bg-red-950/30 text-red-100' : 'border-red-200 bg-red-50 text-red-800'} rounded-xl border p-8 text-center`} role="alert">
            <h3 className="text-xl font-semibold">We could not load the catalog</h3>
            <p className="mt-2 opacity-80">{error}</p>
            <button onClick={fetchProducts} className="mt-5 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500">
              Try again
            </button>
          </div>
        )}

        {!isLoading && !error && filteredProducts.length === 0 && (
          <div className={`${isDarkMode ? 'border-slate-700 bg-slate-900 text-slate-300' : 'border-slate-200 bg-white text-slate-600'} rounded-xl border p-10 text-center`}>
            <h3 className="text-xl font-semibold">No products found</h3>
            <p className="mt-2">Try a different product name or category.</p>
          </div>
        )}

        {!isLoading && !error && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article key={product.id} className={`${isDarkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'} overflow-hidden rounded-xl border shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                <div className="aspect-square bg-white p-8">
                  <div className="h-full w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${product.image})` }} role="img" aria-label={product.title} />
                </div>
                <div className="flex min-h-52 flex-col p-5">
                  <p className={`${isDarkMode ? 'text-cyan-300' : 'text-blue-600'} mb-2 text-xs font-semibold uppercase tracking-wide`}>{product.category}</p>
                  <h3 className="line-clamp-2 text-lg font-semibold">{product.title}</h3>
                  <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mt-3 line-clamp-2 text-sm`}>{product.description}</p>
                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                    <span className={`${isDarkMode ? 'text-amber-300' : 'text-amber-600'} text-sm`} aria-label={`${product.rating.rate} out of 5 stars`}>
                      ★ {product.rating.rate}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}