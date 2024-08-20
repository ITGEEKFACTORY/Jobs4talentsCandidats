'use client';
import { useState, useEffect } from 'react';
import { Disclosure, Switch } from '@headlessui/react';
import ModalCV from '../../modal';
import { useRouter } from 'next/navigation';
import Loading from '../../Loading';

import CvView from './cvView';



const CandidateProfile = ({ user, isAuthenticated, candidate, loading, fetchError }) => {

  const router = useRouter();

  const [enabled, setEnabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isQualificationsOpen, setQualificationsOpen] = useState(true);
  const [isPreferencesOpen, setPreferencesOpen] = useState(true);
  const [isAvailableNowOpen, setAvailableNowOpen] = useState(true);


  const toggleSection = (section) => {
    switch (section) {
      case 'qualifications':
        setQualificationsOpen(!isQualificationsOpen);
        break;
      case 'preferences':
        setPreferencesOpen(!isPreferencesOpen);
        break;
      case 'infos':
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
    <main className="">

      {loading ? (
        <Loading />
      ) : fetchError ? (
        <div>Erreur : {fetchError}</div>
      ) : (
        <div>

          <div className="max-w-2xl">

            <div className='bg-white p-4 rounded-lg shadow mb-4'>
              <h1 className="text-2xl font-bold pb-2">Présentation</h1>
              <span>{candidate.resume}</span>
            </div>
            <div className='bg-white p-4 rounded-lg shadow'>
              <div className="flex items-center justify-between ">
                {user.roles && user.roles.length > 0 ? (
                  <ul>
                    {user.roles.map((role) => (
                      <li key={role.id}>
                        <h3 className="text-xl font-semibold">
                          {candidate?.firstName && candidate?.lastName
                            ? `${candidate.firstName} ${candidate.lastName}`
                            : 'Ajouter votre nom complet'}
                        </h3>

                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Aucun rôle disponible.</p>
                )}

              </div>
              <div className="mt-6 ">
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
                  <span>{candidate.phone_num ? candidate.phone_num : 'Ajouter un numero de telephone'}</span>
                </div>
                <div className="flex items-center space-x-2 mt-5">
                  <svg className="text-gray-600" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 7 7 13 7 13s7-6 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                  <span>{candidate.city ? candidate.city : 'Ville'}, {candidate.postal ? candidate.postal : 'code postal'}, {candidate.country ? candidate?.country : 'pays'} </span>
                </div>
              </div>
            </div>

           
            <div className='bg-white p-4 rounded-lg shadow mt-4'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="w-full flex justify-between items-center p-4 bg-gray-100 rounded-lg my-3 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 transition-transform duration-200 ease-in-out"
                      onClick={() => toggleSection('infos')}
                    >
                      <span className="text-md font-semibold text-gray-800">Informations personnelles</span>
                      <svg
                        className={`w-5 h-5 ${isQualificationsOpen ? 'rotate-180 transform' : ''} transition-transform duration-200 ease-in-out`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 01.7.29l5 5a1 1 0 01-1.4 1.42L10 5.42 5.7 9.7a1 1 0 11-1.4-1.42l5-5A1 1 0 0110 3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm my-5">

                      <div className="flex items-center space-x-2 mt-5">
                        <span className='font-bold'>Nom & prénom :</span>
                        <span className="mx-2" >{candidate.firstName ? candidate.lastName : 'Ajouter nom complet'} </span>
                      </div>

                      <div className="flex items-center space-x-2 mt-5">
                        <span className='font-bold'>Situation matrimonial :</span>
                        <span className="mx-2" >{candidate.marital_status ? candidate.marital_status : 'Ajouter situation matrimonial'} </span>
                      </div>

                      <div className="flex items-center space-x-2 mt-5">
                        <span className='font-bold'>Âge :</span>
                        <span className="mx-2" >{candidate.date_birth ? candidate.date_birth : 'Ajouter votre âge'} </span>
                      </div>

                      <div className="flex items-center space-x-2 mt-5">
                        <span className='font-bold'>Genre :</span>
                        <span className="mx-2" >{candidate.sexe ? candidate.sexe : 'Ajouter votre sexe'} </span>
                      </div>

      
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className='bg-white p-4 rounded-lg shadow mt-4'>
              <CvView user={user} formData={candidate} loading={loading} />
            </div>
            <div className='bg-white p-4 rounded-lg shadow mt-4'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="w-full flex justify-between items-center p-4 bg-gray-100 rounded-lg my-3 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 transition-transform duration-200 ease-in-out"
                      onClick={() => toggleSection('qualifications')}
                    >
                      <span className="text-md font-semibold text-gray-800">Qualifications</span>
                      <svg
                        className={`w-5 h-5 ${isQualificationsOpen ? 'rotate-180 transform' : ''} transition-transform duration-200 ease-in-out`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 01.7.29l5 5a1 1 0 01-1.4 1.42L10 5.42 5.7 9.7a1 1 0 11-1.4-1.42l5-5A1 1 0 0110 3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm my-5">

                      <div className="flex items-center space-x-2 mt-5">
                        <span className='font-bold'>Année de l'expérience :</span>
                        <span className="mx-2" >{candidate.experience ? candidate.experience : 'Ajouter experience'} </span>
                      </div>

                      <div className="flex items-center space-x-2 mt-5">
                        <span className='font-bold'>Qualifications :</span>
                        <span className="mx-2">{candidate.qualification ? candidate.qualification : 'Ajouter une qualification'}</span>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className='bg-white p-4 rounded-lg shadow mt-4'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="w-full flex justify-between items-center p-4 bg-gray-100 rounded-lg my-3 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 transition-transform duration-200 ease-in-out"
                      onClick={() => toggleSection('preferences')}
                    >
                      <span className="text-md font-semibold text-gray-800">Préférences d'emploi</span>
                      <svg
                        className={`w-5 h-5 ${isPreferencesOpen ? 'rotate-180 transform' : ''} transition-transform duration-200 ease-in-out`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 01.7.29l5 5a1 1 0 01-1.4 1.42L10 5.42 5.7 9.7a1 1 0 11-1.4-1.42l5-5A1 1 0 0110 3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm mt-2">

                      <div className="flex items-center space-x-2 mt-5">
                        <span className='font-bold'>Poste de travail :</span>
                        <span className="mx-2" >{candidate.job_title ? candidate.job_title : 'Ajouter un poste'}</span>
                      </div>

                      <div className="flex items-center space-x-2 mt-5">
                        <span className='font-bold'>Contrat de travail :</span>
                        <span className="mx-2" >{candidate.contrat ? candidate.contrat : 'Ajouter durée contrat'}</span>
                      </div>

                      <div className="flex items-center space-x-2 mt-5">
                        <span className='font-bold'>Adresse locale :</span>
                        <span className="mx-2">{candidate.street_address ? candidate.street_address : 'Ajouter votre adresse'}</span>
                      </div>
                    </Disclosure.Panel>

                  </>
                )}
              </Disclosure>
            </div>
            <div className='bg-white p-4 rounded-lg shadow mt-4'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="w-full flex justify-between items-center p-4 bg-gray-100 rounded-lg my-3 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 transition-transform duration-200 ease-in-out"
                      onClick={() => toggleSection('availableNow')}
                    >
                      <span className="text-md font-semibold text-gray-800">Disponible maintenant</span>
                      <svg
                        className={`w-5 h-5 ${isAvailableNowOpen ? 'rotate-180 transform' : ''} transition-transform duration-200 ease-in-out`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 01.7.29l5 5a1 1 0 01-1.4 1.42L10 5.42 5.7 9.7a1 1 0 11-1.4-1.42l5-5A1 1 0 0110 3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm mt-2">
                      <small className="py-5 text-indigo-600 font-semibold">Indiquez aux recruteurs que vous pouvez commencer à travailler dès maintenant.</small><br /><br />


                      <Switch onClick={handleEdit}
                        checked={candidate?.enable}
                        /*  onChange={(checked) =>
                           setFormData((prevState) => ({
                             ...prevState,
                             enable: checked,
                           }))
                         } */
                        className={`${candidate?.enable ? 'bg-green-600' : 'bg-red-600'} relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span className="sr-only">Enable</span>
                        <span
                          className={`${candidate?.enable ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                        />
                      </Switch>
                      <label htmlFor="availableNow" className="ml-2 text-gray-700 px-2">Je peux commencer immédiatement.</label>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
export default CandidateProfile
