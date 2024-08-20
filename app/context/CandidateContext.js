'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { getCandidates, getCandidateById, createCandidate, updateCandidate, deleteCandidate } from '@/app/utils/api/CandidateService';

const CandidatesContext = createContext();

export const useCandidatesContext = () => {
  const context = useContext(CandidatesContext);
  if (!context) {
    throw new Error('useCandidatesContext must be used within a CandidatesProvider');
  }
  return context;
};

export const CandidatesProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      setLoading(true);
      try {
        const data = await getCandidates();
        setCandidates(data);
      } catch (err) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const addCandidate = async (candidateData) => {
    try {
      const newCandidate = await createCandidate(candidateData);
      setCandidates((prevCandidates) => [...prevCandidates, newCandidate]);
    } catch (err) {
      setError(err.message || 'Unknown error');
    }
  };

  
  const editCandidate = async (id, candidateData) => {
    setLoading(true);
    try {
      const updatedCandidate = await updateCandidate(id, candidateData);
      setCandidates((prevCandidates) =>
        prevCandidates.map((candidate) =>
          candidate.id === id ? updatedCandidate : candidate
        )
      );
      return updatedCandidate; // Retourner les données mises à jour
    } catch (err) {
      setError(err.message || 'Unknown error');
      throw err; // Propager l'erreur pour que les composants consommateurs puissent la gérer
    } finally {
      setLoading(false);
    }
  };

  const removeCandidate = async (id) => {
    try {
      await deleteCandidate(id);
      setCandidates((prevCandidates) =>
        prevCandidates.filter((candidate) => candidate.id !== id)
      );
    } catch (err) {
      setError(err.message || 'Unknown error');
    }
  };

  const getCandidate = async (id) => {
    try {
      return await getCandidateById(id);
    } catch (err) {
      setError(err.message || 'Unknown error');
    }
  };

  return (
    <CandidatesContext.Provider value={{
      candidates,
      loading,
      error,
      addCandidate,
      editCandidate,
      removeCandidate,
      getCandidate
    }}>
      {children}
    </CandidatesContext.Provider>
  );
};
