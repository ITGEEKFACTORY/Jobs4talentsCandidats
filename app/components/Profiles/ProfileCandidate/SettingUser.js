import { useState } from "react";
import { useAppContext } from '@/app/context/AuthContext';
export default function SettingUser({ onSave }) {

  const [ password_confirm, setPassword_confirm] = useState ('');
  const [ password, setPassword] = useState ('');
  const [ error, setError] = useState (false);
  

  const handleSubmit = () =>{
    alert('hello');

  }
  const { user, isAuthenticated } = useAppContext();

  return (

    <div className="max-w-screen-sm text-gray-800 space-y-4 bg-white p-4 rounded-lg shadow">



{/* <div className="max-w-lg space-y-3 md:text-left">
          <button
              onClick={onSave}
            className="flex items-center text-gray-800 font-semibold text-left"
          >
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
        </div> */}


    
      <div className="mt-5">
        <h3 className="text-gray-800 text-xl font-bold sm:text-xl">Changer votre mot de passe</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
  
        <div className="pt-3">
          <label className="font-medium">Mot de passe actuel</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">Confirmer mot de passe</label>
          <input
            type="password"
            required
            value={password_confirm}
            onChange={(e) => setPassword_confirm(e.target.value)}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
      
       
        <button
          type="submit"
          className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
        >
     Sauvegarder
        </button>
      </form>
     
    </div>
  );
}
