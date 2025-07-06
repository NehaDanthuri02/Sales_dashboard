'use client';

import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { salesData } from '@/data/salesData';

export default function SalesChart() {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const [threshold, setThreshold] = useState(0);

  const filteredData = salesData.filter(d => d.sales >= threshold);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button className="btn" onClick={() => setChartType('bar')}>Bar</button>
        <button className="btn" onClick={() => setChartType('line')}>Line</button>
        <button className="btn" onClick={() => setChartType('pie')}>Pie</button>
      </div>

      <input
        type="number"
        className="border p-2 rounded"
        placeholder="Enter sales threshold"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
      />

      <div>
        {chartType === 'bar' && (
          <BarChart width={500} height={300} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        )}

        {chartType === 'line' && (
          <LineChart width={500} height={300} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
          </LineChart>
        )}

        {chartType === 'pie' && (
          <PieChart width={400} height={300}>
            <Pie
              data={filteredData}
              dataKey="sales"
              nameKey="year"
              outerRadius={100}
              fill="#82ca9d"
              label
            >
              {filteredData.map((_, i) => <Cell key={i} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        )}
      </div>
    </div>
  );
}
