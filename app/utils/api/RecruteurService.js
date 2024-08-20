import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api";

export const getRecruteurs = async () => {
  try {
    const response = await axios.get(`${API_URL}/recruteurs`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des recruteur :", error.response?.data || error.message || error);
    throw new Error(error.response?.data?.message || "Une erreur est survenue pendant la récupération des recruteurs.");
  }
};

export const getRecruteurById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/recruteurs/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération du recruteur avec l'ID ${id} :`, error.response?.data || error.message || error);
    throw new Error(error.response?.data?.message || `Une erreur est survenue pendant la récupération du recruteur avec l'ID ${id}.`);
  }
};

export const createRecruteur = async (recruteurData) => {
  try {
    const response = await axios.post(`${API_URL}/recruteurs`, recruteurData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création du recruteur :", error.response?.data || error.message || error);
    throw new Error(error.response?.data?.message || "Une erreur est survenue pendant la création du recruteur.");
  }
};

export const updateRecruteur = async (id, recruteurData) => {
  try {
    const response = await axios.put(`${API_URL}/recruteurs/${id}`, recruteurData);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du recruteur avec l'ID ${id} :`, error.response?.data || error.message || error);
    throw new Error(error.response?.data?.message || `Une erreur est survenue pendant la mise à jour du recruteur avec l'ID ${id}.`);
  }
};

export const deleteRecruteur = async (id) => {
  try {
    await axios.delete(`${API_URL}/recruteurs/${id}`);
  } catch (error) {
    console.error(`Erreur lors de la suppression du recruteur avec l'ID ${id} :`, error.response?.data || error.message || error);
    throw new Error(error.response?.data?.message || `Une erreur est survenue pendant la suppression du recruteur avec l'ID ${id}.`);
  }
};
