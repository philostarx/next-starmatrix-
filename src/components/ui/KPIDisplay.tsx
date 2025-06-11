'use client';

import { FC } from 'react';
import { KPIDisplayProps } from '@/types/charts';
import styles from './KPIDisplay.module.css';

const KPIDisplay: FC<KPIDisplayProps> = ({ 
  label, 
  value, 
  className = ''
}) => {
  return (
    <div className={`kpi-section ${className}`}>
      <div className={styles['kpi-label']}>{label}</div>
      <div className={styles['kpi-value']}>{value}</div>
    </div>
  );
};

export default KPIDisplay; 