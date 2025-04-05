
import { useState, useEffect } from 'react';
import { toast as sonnerToast, type Toast } from 'sonner';

interface ToastProps {
  title: string;
  description?: string;
  variant?: 'default' | 'destructive';
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const toast = ({ title, description, variant, action }: ToastProps) => {
  const options: any = {
    description,
    action: action ? {
      label: action.label,
      onClick: action.onClick
    } : undefined
  };

  if (variant === 'destructive') {
    sonnerToast.error(title, options);
  } else {
    sonnerToast.success(title, options);
  }
};

export function useToast() {
  return { toast };
}
