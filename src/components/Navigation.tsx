'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, MessageCircle, User, Search } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/discover',
      icon: Search,
      label: 'Discover',
      active: pathname === '/discover'
    },
    {
      href: '/applications',
      icon: Briefcase,
      label: 'Applications',
      active: pathname === '/applications'
    },
    {
      href: '/chat',
      icon: MessageCircle,
      label: 'Messages',
      active: pathname === '/chat'
    },
    {
      href: '/auth',
      icon: User,
      label: 'Profile',
      active: pathname === '/auth'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="max-w-md mx-auto">
        <div className="flex justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                  item.active
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}