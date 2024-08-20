import { useState } from 'react';
import axios from 'axios';

const useDestroyFile = () => {
  const [destroyLoading, setDestroyLoading] = useState(false);
  const [error, setDestroyError] = useState(null);

  const destroyFile = async (initialUrl) => {
    if (!initialUrl) {
      console.error('Aucun URL fourni pour la suppression');
      return { success: false, message: 'Aucun URL fourni pour la suppression' };
    }

    setDestroyLoading(true);
    setDestroyError(null);

    try {
      const response = await axios.post(initialUrl);

      console.log('Réponse du serveur:', response.data);

      // Assumer que la réponse contient un champ "success" pour indiquer le succès
      return { success: response.data.success ?? true, message: response.data.message || 'Fichier supprimé avec succès.' };
    } catch (error) {
      console.error('Erreur lors de la suppression:', error.response?.data?.message || error.message);
      setDestroyError(error.response?.data?.message || error.message);
      return { success: false, message: error.response?.data?.message || error.message };
    } finally {
      setDestroyLoading(false);
    }
  };

  return { destroyFile, destroyLoading, error };
};

export default useDestroyFile;
