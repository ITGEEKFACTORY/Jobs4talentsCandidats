import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useUpdateFileForm from '@/app/utils/functions/updateFile';
import Loading from '../Loading';

export default function BadgeSectionProfile({ user, isAuthenticated, candidate, fetchError }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const { updateFormFile, uploadLoading } = useUpdateFileForm(`http://127.0.0.1:8000/api/candidates/${user?.id}`);

  const handleEdit = () => {
    router.push('/candidate/setting/profile/editer-infos-candidate');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (candidate && candidate.avatar) {
        setImageSrc(`http://127.0.0.1:8000/${candidate.avatar}`);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [candidate]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      handleFormSubmit(file); // Pass the file directly to handleFormSubmit
    }
  };

  const handleFormSubmit = async (file) => {
    setLoading(true);
    setError(null);
    try {
      console.log('File to be uploaded:', file);
      await updateFormFile({ keyName: 'avatar', selectFile: file });
      // Optionally reset the selected file after upload
      setSelectedFile(null);
    } catch (err) {
      console.error('Error during update:', err);
      setError('An error occurred during the update.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (uploadLoading) {
      // Recharger la page lorsque `uploadLoading` est vrai
      window.location.reload();
    }
  }, [uploadLoading]);


  if (loading) {
    return (
      <div className="flex flex-col items-center bg-white animate-pulse">
        {/* Skeleton for the background image */}
        <div className="relative w-full h-64 bg-gray-200">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 ml-20 mb-4 flex items-center">
            {/* Skeleton for the profile image */}
            {/* <div className="w-[140px] h-[140px] rounded-full bg-gray-300 border-4 border-white">
              
            </div> */}

<div class="relative  w-[140px] h-[140px] overflow-hidden bg-gray-300 border-4 border-white rounded-full dark:bg-gray-600">
    <svg class="absolute w-[140px] h-[140px] text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>

            <div className="ml-4">
              {/* Skeleton for the name */}
              <div className="w-32 h-6 bg-gray-300 rounded mb-2"></div>
              {/* Skeleton for the username */}
              <div className="w-24 h-4 bg-gray-300 rounded mb-1"></div>
              {/* Skeleton for the job title */}
              <div className="w-40 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Skeleton for the profile details */}
        <div className="w-full max-w-4xl p-6">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="w-10 h-6 bg-gray-300 rounded mb-2"></div>
              <div className="w-16 h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="text-center">
              <div className="w-10 h-6 bg-gray-300 rounded mb-2"></div>
              <div className="w-16 h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="text-center">
              <div className="w-10 h-6 bg-gray-300 rounded mb-2"></div>
              <div className="w-24 h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="text-center">
              <div className="w-24 h-4 bg-gray-300 rounded mb-2"></div>
              <div className="w-20 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (fetchError) {
    return <div className="flex justify-center items-center h-64 text-red-500">Erreur de chargement des données</div>;
  }

  return (
    <div className="flex flex-col items-center bg-white mt-0 pt-0">
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/logo/bg-badge.jpg')" }}>
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-black opacity-50">
            <div className="w-12 h-12 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
          </div>
        )}

        {/* Background content */}
        {!loading && (
          <>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 ml-20 mb-4 flex items-center">
              <div className="relative w-[140px] h-[140px]">
                {uploadLoading ? (
                  <div className="relative">
                    {/* <Loading/> */}
                    <img
                      src={imageSrc}
                      alt="Profile"
                      className="w-[140px] h-[140px] rounded-full border-4 border-white"
                      style={{ visibility: 'hidden' }}
                    />
                  </div>
                ) : (
                  <img
                    src={imageSrc} // Utiliser imageSrc ici
                    alt="Profile"
                    className="w-[140px] h-[140px] rounded-full border-4 border-white bg-cover"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                  <div
                    className="text-center text-white flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => document.getElementById('profile-image-input').click()}
                  >
                    <svg
                      className="h-6 w-6 mb-2"
                      viewBox="0 0 512 512"
                      fill="white"
                    >
                      <path d="M210.5,419.9h93.1V233.7h139.6L257,1L70.8,233.7h139.6V419.9z M466.5,373.4v93.1H47.5v-93.1H1V513h512V373.4H466.5z" />
                    </svg>
                    <small className="text-[14px]">Changer profile</small>
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <input
                      id="profile-image-input"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </form>
                </div>
              </div>
              <div className="ml-4 text-white">
                <>
                  {candidate.firstName && candidate.lastName ? (
                    <h2 className="text-2xl font-semibold">
                      {candidate.firstName} {candidate.lastName}
                    </h2>
                  ) : (
                    <h2 className="text-2xl font-semibold">Ajouter nom complet</h2>
                  )}

                  {user?.name ? (
                    <p className="text-sm">@{user.name}</p>
                  ) : (
                    <p className="text-sm">@Ajouter un nom utilisateur</p>
                  )}

                  {candidate.job_title && candidate.city ? (
                    <p className="text-sm">
                      {candidate.job_title} à {candidate.city}
                    </p>
                  ) : (
                    <p className="text-sm">Ajouter un poste, ville</p>
                  )}
                </>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Profile Details */}
      {!loading && (
      <div className="w-full max-w-4xl p-5">
        <div className="flex justify-between items-center">
          <div className="text-center">
            <h3 className="text-lg font-semibold">124</h3>
            <p className="text-sm text-gray-500">Vues</p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold">20</h3>
            <p className="text-sm text-gray-500">J'aime</p>
          </div>

          <div className="text-center">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
              <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">20 avis</a>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-1">Profile</p>
            <div className="flex items-center justify-center">
              <span
                className={`inline-block w-2 h-2 rounded-full mr-2 ${candidate.enable ? 'bg-green-500' : 'bg-red-500'
                  }`}
              ></span>
              <p className={`text-sm font-semibold ${candidate.enable ? 'text-green-500' : 'text-red-500'}`}>
                {candidate.enable ? 'Disponible' : 'Indisponible'}
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={handleEdit}
              className="flex items-center space-x-2 px-4 py-1 rounded-lg transition-transform transform hover:bg-gray-100  hover:shadow-sm"
            >
                       <svg class="w-6 h-6 feather feather-more-vertical" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>


              {/* <svg width="16"
                height="16" viewBox="0 0 24 24" fill="none" stroke="#000"
                strokeWidth="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
              <span>Modifier</span> */}
            </button>




          </div>



        </div>
      </div>
         )}
    </div>
  );
}
