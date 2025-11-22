import React from 'react';
export interface LayoutProps {
  children: React.ReactNode;
}
export interface ButtonProps {
    buttonLabel: string
    buttonSize?: string
    buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
    action?: () => void
}

export interface PageRouteProps {
  pageRoute: string
}