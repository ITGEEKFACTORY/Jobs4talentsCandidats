'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/app/context/AuthContext';

import CandidateProfile from './candidateProfile';
import Loading from '../../Loading';




const ViewCandidate = ({ user, isAuthenticated, candidate,loading ,fetchError }) => {

  const router = useRouter();
  const [isQualificationsOpen, setQualificationsOpen] = useState(false);
  const [isPreferencesOpen, setPreferencesOpen] = useState(false);
  const [isAvailableNowOpen, setAvailableNowOpen] = useState(false);


  const toggleSection = (section) => {
    switch (section) {
      case 'qualifications':
        setQualificationsOpen(!isQualificationsOpen);
        break;
      case 'preferences':
        setPreferencesOpen(!isPreferencesOpen);
        break;
      case 'availableNow':
        setAvailableNowOpen(!isAvailableNowOpen);
        break;
      default:
        break;
    }
  };


  const handleEdit = () => {
    router.push('/candidate/setting/profile/editer-infos-candidate');
  }




  return (
    <main className="py-5">


      <div className="max-w-2x">
        {!isAuthenticated ? <Loading /> : (
          <>
            <div>
              <ul>
                {user.roles && user.roles.length > 0 ? (

                  user.roles.map((role) => (
                    <li key={role.id}>
                      {role.type === "Candidate" && <CandidateProfile user={user} isAuthenticated={isAuthenticated} candidate={candidate} loading={loading} fetchError={fetchError} />}
                      {/*     {role.type === "Recruteur" && <RecruteurProfile />}
                  {role.type === "Entreprise" && <EntrepriseProfile />} */}
                    </li>
                  ))
                ) : (
                  <>
                  {/* <button onClick={handleEdit}>
                    <h2 className="text-indigo-600 font-semibold">Modifier mes informations</h2>
                  </button> */}
                  <p>L'approbation de votre compte est en cours...</p>
                  </>
                )}
              </ul>
            </div>
          </>
        )}
      </div>

    </main>
  );
};

export default ViewCandidate;

