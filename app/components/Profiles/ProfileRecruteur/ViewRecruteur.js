'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/app/context/AuthContext';
import Loading from '../../Loading';
import RecruteurProfile from './recruteurProfile'



const ViewRecruteur = () => {

  const router = useRouter();
  const { user, isAuthenticated } = useAppContext();

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


/*   if (!isAuthenticated) {
    return <Loading/>;
  } */




 

  return (
    <main className="p-5 bg-gray-50 rounded-sm shadow-sm ">
  

      <div className="max-w-2xl">
      {!isAuthenticated ? <Loading /> : (
          <>
        <div>
          <ul>
            {user.roles && user.roles.length > 0 ? (

              user.roles.map((role) => (
                <li key={role.id}>
               
                 {role.type === "Recruteur" && <RecruteurProfile />}
                  {/*  {role.type === "Entreprise" && <EntrepriseProfile />} */}
                </li>
              ))
            ) : (
              <p>Aucun rôle disponible.</p>
            )}
          </ul>
        </div>
        </>
         )}
      </div>
   
    </main>
  );
};

export default ViewRecruteur;


