import axios from 'axios';

 const API_URL = "http://127.0.0.1:8000/api";

// Récupérer tous les candidats
export const getCandidates = async () => {
  try {
    const response = await axios.get(`${API_URL}/candidates`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch candidates');
  }
};

// Récupérer un candidat par son ID
export const getCandidateById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/candidates/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch candidate');
  }
};

// Créer un nouveau candidat
export const createCandidate = async (candidateData) => {
  try {
    const response = await axios.post(`${API_URL}/candidates`, candidateData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create candidate');
  }
};

// Mettre à jour un candidat existant
export const updateCandidate = async (id, candidateData) => {
  try {
    const response = await axios.post(`${API_URL}/candidates/${id}`, candidateData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update candidate');
  }
};

// Supprimer un candidat
export const deleteCandidate = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/candidates/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete candidate');
  }
};
