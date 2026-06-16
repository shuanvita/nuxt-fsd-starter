import type { RouteLocationRaw } from 'vue-router';

export interface LinkProps {
  to: RouteLocationRaw;
  variant?: 'default' | 'primary' | 'outline' | 'link' | 'custom';
  ariaLabel?: string;
  external?: boolean;
  target?: '_self' | '_blank' | '_parent' | '_top';
  rel?: string;
}
