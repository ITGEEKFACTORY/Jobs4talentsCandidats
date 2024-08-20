'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { getRecruteurs, getRecruteurById, createRecruteur, updateRecruteur, deleteRecruteur } from '../utils/api/RecruteurService';

const RecruteursContext = createContext();

export const useRecruteursContext = () => {
  return useContext(RecruteursContext);
};

export const RecruteursProvider = ({ children }) => {
  const [recruteurs, setRecruteurs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecruteurs = async () => {
      try {
        const data = await getRecruteurs();
        setRecruteurs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecruteurs();
  }, []);

  const addRecruteur = async (recruteurData) => {
    try {
      const newRecruteur = await createRecruteur(recruteurData);
      setRecruteurs((prevRecruteurs) => [...prevRecruteurs, newRecruteur]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editRecruteur = async (id, recruteurData) => {
    try {
      const updatedRecruteur = await updateRecruteur(id, recruteurData);
      setRecruteurs((prevRecruteurs) =>
        prevRecruteurs.map(recruteur =>
          recruteur.id === id ? updatedRecruteur : recruteur
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const removeRecruteur = async (id) => {
    try {
      await deleteRecruteur(id);
      setRecruteurs((prevRecruteurs) =>
        prevRecruteurs.filter(recruteur => recruteur.id !== id)
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchRecruteurById = async (id) => {
    try {
      const recruteur = await getRecruteurById(id);
      return recruteur;
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <RecruteursContext.Provider value={{
      recruteurs,
      loading,
      error,
      addRecruteur,
      editRecruteur,
      removeRecruteur,
      fetchRecruteurById
    }}>
      {children}
    </RecruteursContext.Provider>
  );
};
