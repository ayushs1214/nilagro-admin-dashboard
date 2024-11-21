import React, { useState } from 'react';
import { MetricCard } from '../components/Dashboard/MetricCard';
import { LineChart } from '../components/Dashboard/Charts/LineChart';
import { PieChart } from '../components/Dashboard/PieChart';
import { DateRangeFilter } from '../components/Dashboard/DateRangeFilter';
import { mockMetrics, mockChartData } from '../store/mockData';

export function Dashboard() {
  const [dateRange, setDateRange] = useState({
    start: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0]
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
        <DateRangeFilter value={dateRange} onChange={setDateRange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockMetrics.map((metric) => (
          <MetricCard 
            key={metric.id} 
            metric={metric} 
            onClick={() => {}}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Revenue Trend</h3>
          <LineChart data={mockChartData.revenue} />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">User Growth</h3>
          <LineChart data={mockChartData.users} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PieChart data={mockChartData.userTypes} title="User Distribution" />
        <PieChart data={mockChartData.orderStatus} title="Order Status" />
      </div>
    </div>
  );
}