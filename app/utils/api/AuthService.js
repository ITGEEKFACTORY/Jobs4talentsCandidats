// app/utils/api/AuthService.js
import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api";

export async function login(email, password) {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    console.log('API Response:', response.data.user); // Debug
    const { user, token } = response.data;
    if (token) {
      localStorage.setItem('userToken', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return user;
    } else {
      throw new Error("Le jeton reçu est vide.");
    }
  } catch (error) {
    console.error("Erreur lors de la connexion :", error.response?.data || error.message || error);
    throw new Error(error.response?.data?.message || "Une erreur est survenue pendant le processus de connexion.");
  }
}

export async function register(name, email, password, password_confirmation) {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password, 
      password_confirmation
    });

    const { token, user } = response.data;

    if (token) {
      localStorage.setItem('userToken', token); // Utilisation de 'userToken'
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return user;
    } else {
      throw new Error("Le jeton reçu est vide.");
    }
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error.response?.data || error.message || error);
    throw new Error(error.response?.data?.message || "Une erreur est survenue pendant le processus d'inscription.");
  }
}

export async function logout() {
  try {
    localStorage.removeItem('userToken'); // Utilisation de 'userToken'
    delete axios.defaults.headers.common['Authorization'];
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
    throw new Error("Une erreur est survenue pendant le processus de déconnexion.");
  }
}
