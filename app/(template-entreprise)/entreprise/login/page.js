'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAppContext } from '@/app/context/AuthContext';
import SubmitButton from '../../../components/SubmitButton'



export default function LoginPageEntreprise() {
  const { login } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await login(email, password);
      if (response.success) {

        setTimeout(() => {
          router.push('/entreprise/dashboard');
        }, 5000);
      } else {
        setError(response.message || 'Une erreur est survenue.');
        setIsLoading(false);
      }
    } catch (error) {
      setError(error.message || 'Une erreur est survenue.');
      setIsLoading(false);
    }
  };


  return (
    <main className="w-full h-screen flex flex-col items-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center p-5">
          <img src="/logo/logo-entreprise.png" width={375} height={75} alt="Logo" />
        </div>
        {/* <div className="mt-5">
          <h3 className="text-gray-800 text-2xl font-bold sm:text-2xl">Espace Entreprise</h3>
        </div> */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Mot de passe</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-x-3">
              <input type="checkbox" id="remember-me-checkbox" className="checkbox-item peer hidden" />
              <label
                htmlFor="remember-me-checkbox"
                className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
              ></label>
              <span>Se rappeler de moi</span>
            </div>
            <a href="javascript:void(0)" className="text-center text-indigo-600 hover:text-indigo-500">Mot de passe oublié?</a>
          </div>

          <SubmitButton
            isLoading={isLoading}
            textSize="text-base"
            spinnerSize="w-5 h-5"
            label="Se connecter"

          />

        </form>
       {/*  <p className="text-center">Vous n'avez pas de compte ?
          <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500 mx-3">Créer compte</a>
        </p> */}
      </div>
    </main>
  );
}
