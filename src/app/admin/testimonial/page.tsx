"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Toast from "@/components/Toast";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  message: string;
  rating: number;
  image?: string;
}

export default function TestimonialManagement() {
  const router = useRouter();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' as 'success' | 'error' });
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: "",
    rating: "5",
    image: ""
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials');
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };
  const handleDeleteConfirm = async () => {
    if (!testimonialToDelete) return;

    try {
      const response = await fetch(`/api/testimonials/${testimonialToDelete}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete testimonial');

      router.refresh();
      await fetchTestimonials();
      setToast({
        show: true,
        message: 'Testimoni berhasil dihapus',
        type: 'success'
      });
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      setToast({
        show: true,
        message: 'Gagal menghapus testimoni',
        type: 'error'
      });
    } finally {
      setShowDeleteModal(false);
      setTestimonialToDelete(null);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editMode 
        ? `/api/testimonials/${selectedTestimonial?.id}`
        : '/api/testimonials';
      
      const method = editMode ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          rating: parseInt(formData.rating)
        }),
      });

      if (!response.ok) throw new Error('Failed to save testimonial');

      router.refresh();
      await fetchTestimonials();
      closeForm();
      setToast({
        show: true,
        message: editMode ? 'Testimoni berhasil diupdate' : 'Testimoni berhasil disimpan',
        type: 'success'
      });
    } catch (error) {
      console.error('Error saving testimonial:', error);
      setToast({
        show: true,
        message: 'Gagal menyimpan testimoni',
        type: 'error'
      });
    }
  };
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [testimonialToDelete, setTestimonialToDelete] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setTestimonialToDelete(id);
    setShowDeleteModal(true);
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const closeForm = () => {
    setShowModal(false);
    setEditMode(false);
    setSelectedTestimonial(null);
    setFormData({
      name: "",
      company: "",
      message: "",
      rating: "5",
      image: ""
    });
  };

  return (
    <div className="p-6">
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
      <h1 className="text-2xl font-bold mb-4">Manajemen Testimoni</h1>
      <button 
        onClick={() => setShowModal(true)} 
        className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
      >
        + Tambah Testimoni
      </button>

      <div className="grid md:grid-cols-2 gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setEditMode(true);
                    setSelectedTestimonial(testimonial);
                    setFormData({
                      name: testimonial.name,
                      company: testimonial.company,
                      message: testimonial.message,
                      rating: testimonial.rating.toString(),
                      image: testimonial.image || ""
                    });
                    setShowModal(true);
                  }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(testimonial.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Hapus
                </button>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.message}</p>
            <div className="mt-2 flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {editMode ? "Edit Testimoni" : "Tambah Testimoni"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Perusahaan</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Pesan</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  rows={4}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rating</label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num} Bintang</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">URL Gambar (Opsional)</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {editMode ? "Update" : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 scale-100">
            <h3 className="text-lg font-semibold mb-4">Konfirmasi Penghapusan</h3>
            <p className="text-gray-600 mb-6">Anda yakin ingin menghapus?</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Tidak
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Ya
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}