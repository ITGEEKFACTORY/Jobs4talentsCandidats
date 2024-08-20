import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRecruteursContext } from '../../../context/RecruteurContext'; // Assurez-vous que le chemin est correct
import { useAppContext } from '@/app/context/AuthContext';

function RecruteurProfile() {
  const Router = useRouter();
  const [recruteur, setRecruteur] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user, isAuthenticated } = useAppContext();
  const { fetchRecruteurById } = useRecruteursContext();

  useEffect(() => {
   
    const fetchRecruteur = async () => {
      try {
        setLoading(true);
        const recruteurData = await fetchRecruteurById(user.id);
        setRecruteur(recruteurData);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
        setRecruteur(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRecruteur();
  }, [user.id, isAuthenticated, fetchRecruteurById]);

    if (loading) return <p>Loading...</p>;

  if (fetchError) return <p>Error: {fetchError}</p>;

  const handleEdit = () => {
    Router.push('/recruteur/setting/profile/editer-infos-recruteur');
  }


  return (
    <main className="py-2">
      {recruteur ? (
        <div>
           <button onClick={handleEdit}>
         <h2 className="text-indigo-600 font-semibold mb-5">Modifier mes informations</h2>

       </button>
          <div className="max-w-2xl ">

            <div className="flex items-center justify-between">
              {user.roles && user.roles.length > 0 ? (
                <ul>
                  {user.roles.map((role) => (
                    <li key={role.id}>
                      <h1 className="text-2xl font-bold">{recruteur?.full_name} ({role.type})</h1>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Aucun rôle disponible.</p>
              )}

              {/* <img
                src={recruteur?.avatar}
                alt="Avatar"
                className="w-14 h-14 rounded-full object-cover"
              /> */}
            </div>

            <div className="mt-6">
              <div className="flex items-center space-x-2">
                <svg className="text-gray-600" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.76 0 5-2.24 5-5S14.76 2 12 2 7 4.24 7 7s2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
                </svg>
                <span>{user.email}</span>
              </div>
              <div className="flex items-center space-x-2 mt-5">
                <svg className="text-gray-600" width={24} height={24} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.364 9.8909A18.0066 18.0066 0 013.0001 3.5C2.9925 3.224 3.2172 3 3.4934 3h4.5017c.2763 0 .4992.224.5102.5.0482 1.204.27 2.3942.6584 3.5338.063.1848.0187.3904-.1194.5284l-2.4382 2.4383a16.0073 16.0073 0 007.3913 7.3924l2.4371-2.4372c.1381-.1382.3438-.1824.5287-.1193a12.5037 12.5037 0 003.5368.6599c.276.0111.5.234.5.5102v4.5001c0 .2762-.224.5009-.5001.4932a18.0075 18.0075 0 01-16.136-11.109z"></path>
                </svg>
                <span>{recruteur?.phone_number}</span>
              </div>
              <div className="flex items-center space-x-2 mt-5">
                <svg className="text-gray-600" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.14 2 5 5.14 5 9c0 7 7 13 7 13s7-6 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
                <span>{recruteur?.city}, {recruteur?.country}</span>
              </div>
            </div>
          </div>
          <br/>  <br/>  <br/>  <br/>
          <h1>Recruteur Profile</h1>
          <p>Full Name: {recruteur?.full_name}</p>
          {/* Ajoutez d'autres détails ici */}
        </div>
      ) : (
        <p>trainement..</p>
      )}

    </main>
  );
}

export default RecruteurProfile;

