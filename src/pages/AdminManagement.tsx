import React, { useState, useEffect } from 'react';
import { Shield, UserPlus, Mail, Calendar, Clock } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { adminApi } from '../utils/api';
import { AdminForm } from '../components/Admin/AdminForm';
import { AdminDetails } from '../components/Admin/AdminDetails';
import type { Admin } from '../types';

export function AdminManagement() {
  const user = useAuthStore((state) => state.user);
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const { data } = await adminApi.getAdmins();
      setAdmins(data);
    } catch (error) {
      console.error('Error fetching admins:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAdmin = async (id: string) => {
    try {
      await adminApi.deleteAdmin(id);
      setAdmins(admins.filter(admin => admin.id !== id));
      setSelectedAdmin(null);
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
  };

  const handleUpdatePhoto = async (id: string, file: File) => {
    try {
      const formData = new FormData();
      formData.append('photo', file);
      await adminApi.updateAdminPhoto(id, formData);
      await fetchAdmins();
    } catch (error) {
      console.error('Error updating admin photo:', error);
    }
  };

  if (user?.role !== 'superadmin') {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-12rem)]">
        <div className="text-center">
          <Shield className="w-16 h-16 mx-auto text-gray-400" />
          <h2 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Access Restricted</h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Only superadmins can access this section.</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (selectedAdmin) {
    return (
      <AdminDetails
        admin={selectedAdmin}
        onBack={() => setSelectedAdmin(null)}
        onDelete={handleDeleteAdmin}
        onUpdatePhoto={(file) => handleUpdatePhoto(selectedAdmin.id, file)}
      />
    );
  }

  return (
    <div className="space-y-6">
      {showForm ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Add New Admin</h2>
          <AdminForm
            onSuccess={() => {
              setShowForm(false);
              fetchAdmins();
            }}
          />
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Admin Management</h1>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Add Admin
            </button>
          </div>

          <div className="grid gap-6">
            {admins.map((admin) => (
              <div
                key={admin.id}
                onClick={() => setSelectedAdmin(admin)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={admin.avatar}
                        alt={admin.name}
                        className="w-16 h-16 rounded-xl object-cover ring-2 ring-gray-100 dark:ring-gray-700"
                      />
                      <span className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 ${
                        admin.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                          {admin.name}
                        </h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          admin.role === 'superadmin'
                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
                        }`}>
                          {admin.role}
                        </span>
                      </div>
                      <div className="mt-2 grid grid-cols-2 gap-4">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="truncate">{admin.email}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span>Joined {new Date(admin.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>Last active: {new Date(admin.lastLogin).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}