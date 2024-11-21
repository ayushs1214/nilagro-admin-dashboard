import React, { useState, useEffect } from 'react';
import { RegistrationApproval } from '../components/User/RegistrationApproval';
import { usersApi } from '../utils/api';
import type { User } from '../types';

export function Approvals() {
  const [pendingUsers, setPendingUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  const fetchPendingUsers = async () => {
    try {
      const { data } = await usersApi.getPendingApprovals();
      setPendingUsers(data);
    } catch (error) {
      console.error('Error fetching pending users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      await usersApi.approveUser(id);
      // Remove the approved user from pending list
      setPendingUsers(users => users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error approving user:', error);
    }
  };

  const handleReject = async (id: string) => {
    try {
      await usersApi.rejectUser(id);
      // Remove the rejected user from pending list
      setPendingUsers(users => users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error rejecting user:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Pending Approvals
        </h1>
        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
          {pendingUsers.length} Pending
        </span>
      </div>

      {pendingUsers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No pending approvals at the moment
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {pendingUsers.map((user) => (
            <RegistrationApproval
              key={user.id}
              user={user}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))}
        </div>
      )}
    </div>
  );
}