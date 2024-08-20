'use client';
import { useState } from 'react';
import EditRecruteur from '../../../../../components/Profiles/ProfileRecruteur/EditRecruteur';

export default function PageEdits({ params }) {
  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useState(params.idItems);

  const renderView = () => {
    switch (currentView) {
      case 'editer-infos-recruteur':
        return <EditRecruteur />;
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
    <div className="flex">
      {renderView()}
    </div>
  );
}
