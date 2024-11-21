import type { Permission, PermissionGroup } from '../types';

export const permissionGroups: PermissionGroup[] = [
  {
    name: 'Users',
    permissions: ['users.view', 'users.create', 'users.edit', 'users.delete']
  },
  {
    name: 'Products',
    permissions: ['products.view', 'products.create', 'products.edit', 'products.delete']
  },
  {
    name: 'Orders',
    permissions: ['orders.view', 'orders.process', 'orders.edit']
  },
  {
    name: 'Inventory',
    permissions: ['inventory.view', 'inventory.manage']
  },
  {
    name: 'Samples',
    permissions: ['samples.view', 'samples.manage']
  },
  {
    name: 'Expo',
    permissions: ['expo.view', 'expo.manage']
  },
  {
    name: 'Payments',
    permissions: ['payments.view', 'payments.manage']
  },
  {
    name: 'Analytics',
    permissions: ['analytics.view']
  },
  {
    name: 'Settings',
    permissions: ['settings.view', 'settings.manage']
  },
  {
    name: 'Admin Management',
    permissions: ['admins.manage']
  }
];

export const getPermissionLabel = (permission: Permission): string => {
  const parts = permission.split('.');
  return parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
};

export const hasPermission = (userPermissions: Permission[], requiredPermission: Permission): boolean => {
  return userPermissions.includes(requiredPermission) || userPermissions.includes('all');
};