'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { login, register, logout } from '@/app/utils/api/AuthService';

const AppContext = createContext({
  isAuthenticated: false,
  user: null,
  isLoading: true,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
});

export function AppWrapper({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Charger l'utilisateur depuis localStorage si disponible
    const loadUser = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('userToken');

        if (storedUser && token) {
          setUser(JSON.parse(storedUser));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Failed to load user from localStorage', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const userData = await login(email, password);
      if (userData) {
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('userToken', userData.token);
        return { success: true };
      } else {
        console.error('No user data received');
        return { success: false, message: 'Aucune donnée utilisateur reçue.' };
      }
    } catch (error) {
      console.error('Login failed', error);
      return { success: false, message: error.response?.data?.message || 'Mauvaises informations d\'identification.' };
    }
  };

  const handleRegister = async (name, email, password,  password_confirmation) => {
    try {
      const userData = await register(name, email, password, password_confirmation);
      if (userData) {
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('userToken', userData.token);
        return { success: true };
      } else {
        console.error('No user data received after registration');
        return { success: false, message: 'Aucune donnée utilisateur reçue après l\'inscription.' };
      }
    } catch (error) {
      console.error('Registration failed', error);
      return { success: false, message: error.response?.data?.message || 'Échec de l\'inscription.' };
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      console.log('Logout successful');
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('user');
      localStorage.removeItem('userToken');
      return { success: true };
    } catch (error) {
      console.error('Logout failed', error);
      return { success: false, message: 'Échec de la déconnexion.' };
    }
  };

  return (
    <AppContext.Provider value={{ isAuthenticated, user, isLoading, login: handleLogin, register: handleRegister, logout: handleLogout }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
