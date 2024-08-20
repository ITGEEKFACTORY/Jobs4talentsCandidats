import { useState } from 'react';
import axios from 'axios';

const useUpdateFileForm = (initialUrl) => {
  const [uploadLoading, setUploadLoading] = useState(false);
  const [error, setUploadError] = useState(null);

  const updateFormFile = async ({ keyName, selectFile }) => {

    if (!selectFile) {
      console.error('Aucun fichier sélectionné');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append(keyName, selectFile);

    setUploadLoading(true);
    setUploadError(null);

    try {
      const response = await axios.post(initialUrl, formDataToSend);
      console.log('Réponse du serveur:', response.data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error.response?.data?.message || error.message);
      setUploadError(error.response?.data?.message || error.message);
    } finally {
      setUploadLoading(false);
    }
  };

  return { updateFormFile, uploadLoading, error };
};


export default useUpdateFileForm;
