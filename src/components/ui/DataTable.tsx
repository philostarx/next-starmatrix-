'use client';

import { FC } from 'react';
import { DataTableProps } from '@/types/charts';

const DataTable: FC<DataTableProps> = ({ 
  data, 
  className = ''
}) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className={`table-section ${className}`}>
      <table className="data-table">
        <thead>
          <tr>
            {data[0].map((header, index) => (
              <th key={`header-${index}`}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`cell-${rowIndex}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable; 