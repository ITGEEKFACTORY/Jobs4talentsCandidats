// app/page.tsx ou app/page.js
'use client';
import { useAppContext } from "@/app/context/AuthContext";
import Header from './components/Header';
import CTASection from './components/CTASection';
import StatsSection from './components/StatsSection';
import OffreSection from './components/OffreSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import TeamsSection from './components/TeamsSection';
import { useCandidatesContext } from '@/app/context/CandidateContext';

export default function Home() {
  const { user, isAuthenticated } = useAppContext();
  const { candidates, loading, error } = useCandidatesContext();

  console.log('Authenticated:', isAuthenticated); 
  console.log('User:', user); 



  return (
    <main>
      <Header />
      <CTASection />
      <StatsSection />
      <OffreSection />
      <FeatureSection />
      <TeamsSection />
      <Footer />
    </main>
  );
}
