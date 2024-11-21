import React, { useState } from 'react';
import { permissionGroups, getPermissionLabel } from '../../utils/permissions';
import type { Admin, Permission } from '../../types';

interface AdminFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  initialData?: Partial<Admin>;
  onCancel: () => void;
}

export function AdminForm({ onSubmit, initialData, onCancel }: AdminFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedPermissions, setSelectedPermissions] = useState<Permission[]>(
    initialData?.permissions || []
  );

  const handlePermissionChange = (permission: Permission) => {
    setSelectedPermissions(prev => 
      prev.includes(permission)
        ? prev.filter(p => p !== permission)
        : [...prev, permission]
    );
  };

  const handleGroupToggle = (groupPermissions: Permission[]) => {
    const allSelected = groupPermissions.every(p => selectedPermissions.includes(p));
    
    if (allSelected) {
      setSelectedPermissions(prev => 
        prev.filter(p => !groupPermissions.includes(p))
      );
    } else {
      setSelectedPermissions(prev => 
        [...new Set([...prev, ...groupPermissions])]
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append('permissions', JSON.stringify(selectedPermissions));
      await onSubmit(formData);
    } catch (error) {
      setError('Error saving admin. Please try again.');
      console.error('Error submitting admin:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name *
          </label>
          <input
            type="text"
            name="name"
            defaultValue={initialData?.name}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email *
          </label>
          <input
            type="email"
            name="email"
            defaultValue={initialData?.email}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {!initialData && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password *
            </label>
            <input
              type="password"
              name="password"
              required
              minLength={8}
              className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Role *
          </label>
          <select
            name="role"
            defaultValue={initialData?.role || 'admin'}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="admin">Admin</option>
            <option value="superadmin">Super Admin</option>
          </select>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Permissions
        </h3>
        <div className="space-y-6">
          {permissionGroups.map((group) => (
            <div key={group.name} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {group.name}
                </h4>
                <button
                  type="button"
                  onClick={() => handleGroupToggle(group.permissions)}
                  className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                >
                  {group.permissions.every(p => selectedPermissions.includes(p))
                    ? 'Deselect All'
                    : 'Select All'}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {group.permissions.map((permission) => (
                  <label
                    key={permission}
                    className="flex items-center space-x-3 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={selectedPermissions.includes(permission)}
                      onChange={() => handlePermissionChange(permission)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {getPermissionLabel(permission)}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {isSubmitting ? 'Saving...' : initialData ? 'Update Admin' : 'Create Admin'}
        </button>
      </div>
    </form>
  );
}