'use client'
import { useState } from 'react';
import ViewUser from './Profiles/ProfileCandidate/ViewCandidate';
import EditUser from './Profiles/ProfileCandidate/EditCandidate';

export default function ProfileContainer({ currentView }) {
  // Ensure currentView is either 'view' or 'update' and default to 'view'
  const view = currentView === 'update' ? 'update' : 'view';

  return (
    <div className="py-5">
      {view === 'view' && <ViewUser />}
      {view === 'update' && <EditUser />}
    </div>
  );
}

