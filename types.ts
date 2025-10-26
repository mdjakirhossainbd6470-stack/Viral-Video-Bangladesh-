import type React from 'react';

export interface CardData {
  id: number;
  type: 'banner' | 'split' | 'single';
  image1?: string;
  image2?: string;
  title: string;
  unlockAds: number;
  isLiked?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  // Fix: Use React.JSX.Element to provide the correct type for the icon component, as the JSX namespace was not available in this file.
  icon: (props: { className?: string }) => React.JSX.Element;
}
