// app/layout.tsx
import { AppWrapper } from '@/app/context/AuthContext';
import { CandidatesProvider } from '@/app/context/CandidateContext';
import { RecruteursProvider } from '@/app/context/RecruteurContext';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jobs4Talents',
  description: 'Une entreprise innovante',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AppWrapper>
          <CandidatesProvider>
            <RecruteursProvider>
              {children}
            </RecruteursProvider>
          </CandidatesProvider>
        </AppWrapper>
      </body>
    </html>
  );
}
