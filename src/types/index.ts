// Add to existing types
export type Permission = 
  | 'users.view' 
  | 'users.create' 
  | 'users.edit' 
  | 'users.delete'
  | 'products.view'
  | 'products.create'
  | 'products.edit'
  | 'products.delete'
  | 'orders.view'
  | 'orders.process'
  | 'orders.edit'
  | 'inventory.view'
  | 'inventory.manage'
  | 'samples.view'
  | 'samples.manage'
  | 'expo.view'
  | 'expo.manage'
  | 'payments.view'
  | 'payments.manage'
  | 'analytics.view'
  | 'settings.view'
  | 'settings.manage'
  | 'admins.manage';

export interface PermissionGroup {
  name: string;
  permissions: Permission[];
}

export interface Admin {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'superadmin';
  status: 'active' | 'inactive';
  avatar: string;
  permissions: Permission[];
  lastLogin: string;
  createdAt: string;
}