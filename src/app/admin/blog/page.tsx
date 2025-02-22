"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Toast from "@/components/Toast";

interface Blog {
  id: string;
  title: string;
  content: string;
  image?: string;
  author: string;
  slug: string;
}

export default function BlogManagement() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' as 'success' | 'error' });
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    author: "",
    slug: "",
    createdAt: new Date(),
    updatedAt: new Date()
  });
  useEffect(() => {
    fetchBlogs();
  }, []);
  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editMode 
        ? `/api/blogs/${selectedBlog?.id}`
        : '/api/blogs';
      
      const method = editMode ? 'PUT' : 'POST';
      const submitData = {
        ...formData,
        updatedAt: new Date()
      };
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });
      const data = await response.json();
      
      if (!response.ok) {
        const errorMessage = data.error || 'Failed to save blog';
        throw new Error(errorMessage);
      }
    
      router.refresh();
      await fetchBlogs();
      closeForm();
      setToast({
        show: true,
        message: editMode ? 'Blog berhasil diupdate' : 'Blog berhasil disimpan',
        type: 'success'
      });
    } catch (error) {
      console.error('Error saving blog:', error);
      setToast({
        show: true,
        message: error instanceof Error ? error.message : 'Terjadi kesalahan',
        type: 'error'
      });
    }
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setBlogToDelete(id);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!blogToDelete) return;

    try {
      const response = await fetch(`/api/blogs/${blogToDelete}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete blog');

      router.refresh();
      await fetchBlogs();
      setToast({
        show: true,
        message: 'Blog berhasil dihapus',
        type: 'success'
      });
    } catch (error) {
      console.error('Error deleting blog:', error);
      setToast({
        show: true,
        message: 'Gagal menghapus blog',
        type: 'error'
      });
    } finally {
      setShowDeleteModal(false);
      setBlogToDelete(null);
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };
  const closeForm = () => {
    setShowModal(false);
    setEditMode(false);
    setSelectedBlog(null);
    setFormData({
      title: "",
      content: "",
      image: "",
      author: "",
      slug: "",
      createdAt: new Date(),
      updatedAt: new Date()
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
      <h1 className="text-2xl font-bold mb-4">Manajemen Blog</h1>
      <button 
        onClick={() => setShowModal(true)} 
        className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
      >
        + Tambah Blog
      </button>
      <div className="grid gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{blog.title}</h3>
                <p className="text-gray-600 text-sm">Oleh: {blog.author}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setEditMode(true);
                    setSelectedBlog(blog);
                    setFormData({
                      title: blog.title,
                      content: blog.content,
                      image: blog.image || "",
                      author: blog.author,
                      slug: blog.slug,
                      createdAt: new Date(),
                      updatedAt: new Date()
                    });
                    setShowModal(true);
                  }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(blog.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Hapus
                </button>
              </div>
            </div>
            <p className="text-gray-600 mt-2 line-clamp-2">{blog.content}</p>
          </div>
        ))}
      </div>
  {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">
              {editMode ? "Edit Blog" : "Tambah Blog"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Judul</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleTitleChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slug</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2 bg-gray-50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Konten</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  rows={8}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Penulis</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">URL Gambar</label>
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