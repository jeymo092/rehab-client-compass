
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

interface SidebarNavProps {
  items: NavItem[];
}

const SidebarNav: React.FC<SidebarNavProps> = ({ items }) => {
  const location = useLocation();
  
  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
            location.pathname === item.href
              ? "bg-rehabilitation-accent text-white"
              : "text-gray-700 hover:bg-gray-100"
          )}
        >
          {item.icon && <span className="mr-3">{item.icon}</span>}
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default SidebarNav;
