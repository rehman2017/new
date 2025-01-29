"use client"
import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom'; // Import Link for navigation
import Link from 'next/link';
import Image from 'next/image';
import { allProducts } from '@/sanity/lib/querries';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
}

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(allProductsts);
//         const data = await response.json();
//         setProducts(data);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching products. Please try again.');
//         setLoading(false);
//         console.error('Error fetching products:', error);
//       }
//     }
useEffect(() => {
    const getProducts = async () => {
      try {
        // Fetching Data
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        // Store Data in the useState
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products ❌");
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };
    getProducts();
  }, []);

    
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Our Products</h1>
      <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {products.map((product) => { 
            // Check if the product has an image
            const imageUrl = product.image
            ? urlFor(product.image).url()
            : "/Placeholder.svg";
            return(
            
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="product-item border p-4 rounded-lg shadow-lg bg-white cursor-pointer">
              {product.image ? (
                <Image src={imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4 rounded-md">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-lg text-green-600 font-semibold mt-2">Price: ${product.price}</p>
            </div>
          </Link>
        )})}
      </div>
    </div>
  );
};

export default ProductsList;