'use client';
import { useState } from 'react';
import EditCandidate from '@/app/components/Profiles/ProfileCandidate/EditCandidate'

export default function PageEdits({ params }) {
  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useState(params.idItems);

  const renderView = () => {
    switch (currentView) {
      case 'editer-infos-candidate':
        return <EditCandidate />;
      default:
        return null;
    }
  };

  const handleSwitchView = (view) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentView(view);
      setLoading(false);
    }, 3000);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center mx-4">
      {renderView()}
    </div>
  );
}
