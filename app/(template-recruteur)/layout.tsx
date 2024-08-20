'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '../components/ui/Sidebar';

import { useRouter } from 'next/navigation';
import { useAppContext } from '../context/AuthContext';

interface User {
  name: string;
  email: string;
}

export default function LayoutRecruteur({ children }: { children: React.ReactNode }) {

  const { user, logout, isAuthenticated } = useAppContext();
  const router = useRouter();
  const typedUser = user as User | null;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleSidebarClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDropdownClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleDropdownClickOutside);
    };
  }, []);

  useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener('mousedown', handleSidebarClickOutside);
    } else {
      document.removeEventListener('mousedown', handleSidebarClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleSidebarClickOutside);
    };
  }, [sidebarOpen])

  return (
    <main >
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed inset-y-0 left-0 z-30 w-64 transition-transform transform
           md:static md:inset-0 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full">
            <div className="h-16 flex items-center justify-between px-4 bg-indigo-600">
              <Link href="/" legacyBehavior>
                <a className="text-white text-xl">Recrutement</a>
              </Link>
              <button
                className="text-white md:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto mt-4 bg-white border-r">
              <Sidebar />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <header className="flex items-center justify-between h-16 px-4 bg-indigo-600">
            <button
              className="text-white focus:outline-none md:hidden w-8 h-8"
              onClick={() => setSidebarOpen(true)}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 py-2 border rounded-full w-80"
                />
                <svg
                  role="img"
                  aria-hidden="true"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500"
                >
                  <title id="SearchLineTitleID">SearchLine Icon</title>
                  <path
                    fill="currentColor"
                    d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
                  />
                </svg>
              </div>
            </div>
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center gap-x-3 mr-4" onClick={toggleDropdown}>
                <div className="hidden md:block">
                  {user ? (
                    <span className="block text-white text-sm font-semibold"> {typedUser?.name}</span>
                  ) : (
                    <span className="block text-white text-sm font-semibold">Utilisateur inconnu</span>
                  )}
                </div>
                <img
                  src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png"
                  className="w-11 h-11 border rounded-full cursor-pointer"
                  alt="Avatar"
                />
              </div>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Mon profile
                  </a>

                </div>
              )}
            </div>

          </header>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
