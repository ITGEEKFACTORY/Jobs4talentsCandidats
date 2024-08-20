'use client';
import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import BtnRadioGroupItem from '../../BtnRadioGroupItem';
import SelectItems from '../../SelectItem';
import { useRouter } from 'next/navigation';
import FormField from '../../FormField';
import { useAppContext } from '@/app/context/AuthContext';
import { useCandidatesContext } from '@/app/context/CandidateContext';
import Loading from '../../Loading';
import SubmitButton from '../../SubmitButton'
import CvView from './cvView';

export default function EditCandidate({ onSave }) {
  const router = useRouter();
  const { user, isAuthenticated } = useAppContext();
  const { getCandidate, editCandidate, addCandidate } = useCandidatesContext();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    sexe: '',
    resume: '',
    phone_num: '',
    qualification: '',
    job_title: '',
    date_birth: '',
    experience: '',
    contrat: '',
    postal: '',
    marital_status: '',
    city: '',
    street_address: '',
    country: '',
    linkedin: '',
    facebook: '',
    enable: '',
    enafile_cv: '',
    created_at: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const loadCandidateData = async () => {
      if (!user || !user.id) {
        setError('Utilisateur non trouvé');
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        const candidateData = await getCandidate(user.id);

        if (candidateData) {
          setFormData(candidateData);
          /* console.log('Données du candidat trouvées :', candidateData); */
        } else {
          console.log('Données du candidat non trouvées :', candidateData);
          setError('Aucune donnée trouvée');
        }
      } catch (err) {
        console.error('Erreur lors de la récupération des données du candidat :', err);
        setError('Erreur lors de la récupération des données du candidat');
      } finally {
        setLoading(false);
      }
    };

    loadCandidateData();
  }, [user, getCandidate]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const response = await editCandidate(user.id, formData);

      if (response && response.data) {
        onSave(response.data);
      }
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
    } finally {
      setLoading(false);
    }
  };



  const sexeItems = [
    { name: "M" },
    { name: "F" },
  ];

  const qualificationItems = [
    { name: "Junior" },
    { name: "Senior" },
  ];

  const maritalItems = [
    { name: "Marié" },
    { name: "Célibataire" },
  ];


  const countryItems = [
    { value: "maroc", label: "Maroc" },
    { value: "tchad", label: "Tchad" },
    { value: "france", label: "France" },
  ];

  const experienceYearsItems = [
    { value: "1 an", label: "1 an" },
    { value: "2 ans", label: "2 ans" },
    { value: "3 ans", label: "3 ans" },
    { value: "4 ans", label: "4 ans" },
    { value: "+5 ans", label: "+5 ans" },
  ];

  const contratsIems = [
    { value: "CDI", label: "CDI" },
    { value: "CDD", label: "CDD" },
  ];

  const jobsItems = [
    { value: "backend-developer", label: "Développeur Back-End" },
    { value: "frontend-developer", label: "Développeur Front-End" },
    { value: "fullstack-developer", label: "Développeur Full Stack" },
  ];

  const cityItems = [
    { value: "fes", label: "Fès" },
    { value: "kenitra", label: "Kénitra" },
    { value: "rabat", label: "Rabat" },
    { value: "casablanca", label: "Casablanca" },
  ];


  const handleGoBack = () => {
    router.back();
  }

  const SkeletonLoader = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  };



  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="px-5 mt-5">
      

      {loading ? (
        <div className="flex justify-between max-w-7xl md:px-4 items-cente mt-4">
          <SkeletonLoader />
        </div>
      ) : (

        <>
          <div className="max-w-7xl text-left mb-8 mt-4">
            <button onClick={handleGoBack} className="flex items-center text-gray-800 font-semibold text-left">
              <svg
                className="h-6 w-6 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Retour
            </button>
          </div>


          {/*  <div className='pb-5 text-left' >
            <span className="text-indigo-600 font-semibold">Modification de vos informations</span>
          </div> */}

          <div className="flex justify-between max-w-7xl md:px-4 items-center p-4 bg-indigo-100 rounded-lg ">
            <span className="text-indigo-600 font-semibold">Informations du compte </span>
          </div>



          <div className="max-w-screen-xl text-gray-600 mt-5">
            <div className="mt-5">



              <form className="space-y-5 text-left" onSubmit={handleSubmit}>


                <div className="grid grid-cols-10 gap-4 mt-3">
                  <div className="col-span-4">
                    <FormField
                      label="Nom"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}

                    />
                  </div>
                  <div className="col-span-6">
                    <FormField
                      label="Prénom"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="custom-form-field"
                    />
                  </div>
                </div>

                <div className='pt-2'>
                  <h6 className="font-medium mb-2">Sexe</h6>
                  <BtnRadioGroupItem plans={sexeItems} selected={formData.sexe} onChange={(value) => setFormData(prevState => ({ ...prevState, sexe: value }))} />
                </div>

                <div>
                  <CvView user={user} formData={formData} />
                </div>

                <div className="flex flex-col items-start gap-y-3 gap-x-6 [&>*]:w-full sm:flex-row pt-2">
                  <div>
                    <FormField
                      label="Date de naissance"
                      type="text"
                      name="date_birth"
                      value={formData.date_birth}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className='pt-2'>
                  <h6 className="font-medium mb-2">État matrimonial</h6>
                  <BtnRadioGroupItem plans={maritalItems} selected={formData.marital_status} onChange={(value) => setFormData(prevState => ({ ...prevState, marital_status: value }))} />
                </div>

               

                <div className="flex justify-between max-w-7xl md:px-4 items-center p-4 bg-indigo-100 rounded-lg ">
                  <span className="text-indigo-600 font-semibold">Préférences d'emploi </span>
                </div>


                <div className="flex flex-col items-start gap-y-3 gap-x-6 [&>*]:w-full sm:flex-row pt-2">
                <div className='pt-2'>
                  <h6 className="font-medium mb-2">Années d'expérience</h6>
                  <SelectItems items={experienceYearsItems} value={formData.experience} onChange={(value) => setFormData(prevState => ({ ...prevState, experience: value }))} />
                </div>

                <div className='pt-2'>
                  <h6 className="font-medium mb-2">Contrat du travail</h6>
                  <SelectItems items={contratsIems} value={formData.contrat} onChange={(value) => setFormData(prevState => ({ ...prevState, contrat: value }))} />
                </div>
                </div>

                <div className='pt-2'>
                  <h6 className="font-medium mb-2">Poste</h6>
                  <SelectItems items={jobsItems} value={formData.job_title} onChange={(value) => setFormData(prevState => ({ ...prevState, job_title: value }))} />
                </div>

                <div className='pt-2'>
                  <h6 className="font-medium mb-2">Qualification</h6>
                  <BtnRadioGroupItem plans={qualificationItems} selected={formData.qualification} onChange={(value) => setFormData(prevState => ({ ...prevState, qualification: value }))} />
                </div>

                <div className="flex justify-between max-w-screen-sm md:px-4 items-center p-4 bg-indigo-100 rounded-lg">
                  <span className="text-indigo-600 font-semibold">Coordonnées</span>
                </div>

                <div className="flex flex-col items-start gap-y-3 gap-x-6 [&>*]:w-full sm:flex-row pt-2">
                  <div>
                    <h6 className="font-medium mb-2">Pays</h6>
                    <SelectItems items={countryItems} value={formData.country} onChange={(value) => setFormData(prevState => ({ ...prevState, country: value }))} />
                  </div>

                  <div>
                    <h6 className="font-medium mb-2">Ville</h6>
                    <SelectItems
                      items={cityItems}
                      value={formData.city}
                      onChange={(value) => setFormData(prevState => ({ ...prevState, city: value }))}
                    />
                  </div>
                </div>


                <div className="flex flex-col items-start gap-y-3 gap-x-6 [&>*]:w-full sm:flex-row pt-2">
                  <div>
                    <FormField
                      label="Adresse"
                      name="street_address"
                      value={formData.street_address}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <FormField
                      label="Code postal"
                      name="postal"
                      value={formData.postal}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-y-3 gap-x-6 [&>*]:w-full sm:flex-row pt-2">
                  <div>
                    <FormField
                      label="Numéro de téléphone"
                      name="phone_num"
                      value={formData.phone_num}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <FormField
                      label="LinkedIn"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-y-3 gap-x-6 [&>*]:w-full sm:flex-row pt-2">
                  <div>
                    <FormField
                      label="Facebook"
                      name="facebook"
                      value={formData.facebook}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <FormField
                      label="Résumé"
                      name="resume"
                      value={formData.resume}
                      onChange={handleChange}
                    />
                  </div>
                </div>



                <div className='pt-2'>
                  <small className="py-5 text-indigo-600 font-semibold">Indiquez aux recruteurs que vous pouvez commencer à travailler dès maintenant.</small><br /><br />
                  <label className="flex items-center py-2">

                    <Switch
                      checked={formData.enable}
                      onChange={(checked) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          enable: checked,
                        }))
                      }
                      className={`${formData.enable ? 'bg-green-600' : 'bg-red-600'} relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                      <span className="sr-only">Enable</span>
                      <span
                        className={`${formData.enable ? 'translate-x-6' : 'translate-x-1'
                          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                      />
                    </Switch>
                    <span htmlFor="availableNow" className="ml-2 text-gray-600 px-2">Je peux commencer immédiatement ( {formData.enable ? 'Disponible' : 'Indisponible'} ) </span>

                  </label> <br /><br />

                </div>
                <SubmitButton
                  isLoading={loading} // ou true si en chargement
                  textSize="text-base" // taille du texte
                  spinnerSize="w-5 h-5" // taille du spinner
                  label="Sauvegarder"

                />
                <br /><br />

              </form>




              <br /><br />

            </div>
          </div>
        </>
      )}
    </main>

  );
}




