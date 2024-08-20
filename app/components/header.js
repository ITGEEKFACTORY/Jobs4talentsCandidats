// app/components/header.js
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../context/AuthContext';



export default function Header() {
  const router = useRouter();
  const { user, isAuthenticated } = useAppContext();

  const navigation = [
    { title: "Jobs", path: "#" },
    { title: "Offres", path: "#" },
    { title: "Contact", path: "/contact" },

  ];


  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/auth/login');
  }


  return (
    <div className="bg-gray-900">
      <header>
        
        <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:justify-between">
          <Link href="/" legacyBehavior>
            <a>
              <img
                src="/logo/logoJob.png"
                width={250}
                height={60}

              />
            </a>
          </Link>



          <ul className="py-4 flex-1 items-center flex justify-center space-x-3 sm:space-x-6 sm:justify-end">

            {navigation.map((item, idx) => (
              <li className="text-gray-200" key={idx}>
                <Link href={item.path} legacyBehavior>
                  <a className="hover:text-gray-400">
                    {item.title}
                  </a>
                </Link>
                {idx !== navigation.length - 1 && (
                  <span className="hidden sm:inline-block text-gray-400 ml-3">|</span>
                )}
              </li>
            ))}

            <span className="hidden sm:inline-block text-gray-400 ml-3">|</span>

            <span className="flex items-center text-gray-200">
                <li className="text-gray-200">
               
                    <a role="button" onClick={handleLogin} className="hover:text-gray-400">
                      Se connecter
                    </a>
              
                </li>
              </span>

              <span className="hidden sm:inline-block text-gray-400 ml-3">|</span>
              <span className="flex items-center text-gray-200">
                <li className="text-gray-200">
                  <Link href="#" legacyBehavior>
                    <a className="hover:text-gray-400">
                      S'inscrire
                    </a>
                  </Link>
                </li>
              </span>

          </ul>
        </nav>

      </header>
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            Trouvez Votre Talent,

            <span className="text-indigo-400"> Trouvez Votre Avenir</span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Jobs4Talents nous a aidés à trouver des talents exceptionnels qui ont eu un impact immédiat sur notre plateforme.
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <Link href="#" legacyBehavior>
              <a className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                Découvrez nos Offres
              </a>
            </Link>
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" className="w-full mx-auto sm:w-10/12 lg:w-full" alt="Illustration" />
        </div>
      </section>
    </div>
  );
}
