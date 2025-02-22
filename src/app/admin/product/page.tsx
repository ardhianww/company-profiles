"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  description: string;
  specs: string[];
  price: number;
  image?: string;
}

export default function ProductManagement() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    specs: [""],
    price: "",
    image: ""
  });

  // Fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Add Product
  const addProduct = async () => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      });

      if (!response.ok) throw new Error('Failed to add product');
      
      router.refresh();
      await fetchProducts();
      closeForm();
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  // Update Product
  const updateProduct = async () => {
    if (!selectedProduct) return;

    try {
      const response = await fetch(`/api/products/${selectedProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      });

      if (!response.ok) throw new Error('Failed to update product');

      router.refresh();
      await fetchProducts();
      closeForm();
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product');
    }
  };

  // Delete Product
  const deleteProduct = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete product');

      router.refresh();
      await fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  // Form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addSpec = () => {
    setFormData(prev => ({
      ...prev,
      specs: [...prev.specs, ""]
    }));
  };

  const updateSpec = (index: number, value: string) => {
    const newSpecs = [...formData.specs];
    newSpecs[index] = value;
    setFormData(prev => ({
      ...prev,
      specs: newSpecs
    }));
  };

  const removeSpec = (index: number) => {
    setFormData(prev => ({
      ...prev,
      specs: prev.specs.filter((_, i) => i !== index)
    }));
  };

  const closeForm = () => {
    setShowModal(false);
    setEditMode(false);
    setSelectedProduct(null);
    setFormData({
      name: "",
      description: "",
      specs: [""],
      price: "",
      image: ""
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manajemen Produk</h1>
      <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white px-4 py-2 mb-4">
        + Tambah Produk
      </button>

      {/* 🏷️ TABEL PRODUK */}
      <table className="w-full bg-white shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Nama Produk</th>
            <th className="p-2">Harga</th>
            <th className="p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="p-2">{product.name}</td>
              <td className="p-2">Rp {product.price}</td>
              <td className="p-2">
                <button onClick={() => {
                  setEditMode(true);
                  setSelectedProduct(product);
                  setFormData({
                    name: product.name,
                    description: product.description,
                    specs: product.specs,
                    price: product.price.toString(),
                    image: product.image || ""
                  });
                  setShowModal(true);
                }} className="bg-yellow-500 text-white px-2 py-1 mr-2">
                  Edit
                </button>
                <button onClick={() => deleteProduct(product.id)} className="bg-red-500 text-white px-2 py-1">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🏷️ MODAL FORM (TAMBAH/EDIT PRODUK) */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{editMode ? "Edit Produk" : "Tambah Produk"}</h2>
            <input
              type="text"
              placeholder="Nama Produk"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border p-2 mb-2 w-full"
            />
            <input
              type="text"
              placeholder="Deskripsi"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="border p-2 mb-2 w-full"
            />
            <input
              type="number"
              placeholder="Harga"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="border p-2 mb-2 w-full"
            />
            <input
              type="text"
              placeholder="Gambar URL"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="border p-2 mb-2 w-full"
            />
            <div className="flex justify-end">
              <button onClick={closeForm} className="bg-gray-500 text-white px-4 py-2 mr-2">
                Batal
              </button>
              {editMode ? (
                <button onClick={updateProduct} className="bg-green-500 text-white px-4 py-2">
                  Simpan Edit
                </button>
              ) : (
                <button onClick={addProduct} className="bg-blue-500 text-white px-4 py-2">
                  Tambah Produk
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
