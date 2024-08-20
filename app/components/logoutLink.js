// components/AuthLink.js
'use client';
import { useAppContext } from '@/app/context/AuthContext';
import Link from 'next/link';

const AuthLink = () => {
  const { isAuthenticated } = useAppContext();

  return (
    <span className="flex items-center text-gray-200">
      {isAuthenticated ? (
        <>
          <Link href="/setting/profile" legacyBehavior>
            <a className="hover:text-gray-400">Mon profile</a>
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c4.418 0 8 1.79 8 4v2H4v-2c0-2.21 3.582-4 8-4zm0-10a4 4 0 110 8 4 4 0 010-8z" />
          </svg>
        </>
      ) : (
        <>
          <Link href="/candidate/Auth/login" legacyBehavior>
            <a className="hover:text-gray-400">Espace candidate</a>
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c4.418 0 8 1.79 8 4v2H4v-2c0-2.21 3.582-4 8-4zm0-10a4 4 0 110 8 4 4 0 010-8z" />
          </svg>
        </>
      )}
    </span>
  );
};

export default AuthLink;
