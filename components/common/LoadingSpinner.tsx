import React from 'react';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  thickness?: number;
}

/**
 * 紫色圆圈加载指示器组件
 */
export default function LoadingSpinner({ 
  size = 40, 
  color = '#8B5CF6', 
  thickness = 4 
}: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center">
      <div 
        className="animate-spin rounded-full border-t-transparent"
        style={{ 
          width: `${size}px`, 
          height: `${size}px`,
          borderWidth: `${thickness}px`,
          borderColor: color,
          borderTopColor: 'transparent'
        }}
        role="status"
        aria-label="加载中"
      >
        <span className="sr-only">加载中...</span>
      </div>
    </div>
  );
} 