import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useAppContext } from '../../context/AuthContext';

const Sidebar = () => {
  const { user, logout, isAuthenticated } = useAppContext();
  const router = useRouter();
  const { pathname } = router; // Obtenez le chemin actuel

  const handleLogout = async () => {
    await logout();
    router.push('/auth/login');
  };

  const handleSetting = async () => {
    router.push('/recruteur/setting/profile');
  };

  const handleDashboard = async () => {
    router.push('/recruteur/dashboard');
  };

  const handleListCandidates = async () => {
    router.push('/recruteur/dashboard/page/candidates');
  };

  const handleRecrutement = async () => {
    router.push('/recruteur/dashboard/page/recrutement');
  };

  const handleEntretient = async () => {
    router.push('/recruteur/dashboard/page/entretient');
  };

  const navigation = [
    {
      href: '/recruteur/dashboard',
      name: 'Dashboard',
      onClick: handleDashboard,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h4v8H3v-8zm6-4h4v12H9V9zm6-2h4v14h-4V7z" />
        </svg>
      ),
    },
    {
      href: '/recruteur/dashboard/page/offres',
      name: 'Offres d\'Emploi',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      ),
    },
    {
      href: '/recruteur/dashboard/page/candidates',
      name: 'Candidates',
      onClick: handleListCandidates,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM5 20c0-2.21 3.13-4 7-4s7 1.79 7 4" />
        </svg>
      ),
    },
    {
      href: '/recruteur/dashboard/page/recrutement',
      name: 'Recrutement',
      onClick: handleRecrutement,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M7 4h10v16H7V4z" />
        </svg>
      ),
    },
    {
      href: '/recruteur/dashboard/page/entretient',
      name: 'Entretiens',
      onClick: handleEntretient,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v13l3-3h7l3 3V4" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-full border-r bg-white space-y-8">
      <div className="flex flex-col h-full">
        <div className='h-16 flex items-center px-4 bg-indigo-600'>
          <div>
            <Link href="/" legacyBehavior>
              <a > 
                <img className='rounded-md'
                  src="/logo/logo-recruteur.png"
                  width={280}
                  height={60}
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="flex-1 flex flex-col h-full overflow-auto mt-5">
          <ul className="px-4 text-sm font-medium flex-1">
            {navigation.map((item, idx) => (
              <li key={idx} className="mb-5">
                <a
                
                  onClick={item.onClick}
                  className={`flex items-center gap-x-3 p-2 text-base border-b duration-150 ${pathname === item.href ? 'bg-gray-100 text-gray-900' : 'text-dark-600 bg-gray-25 hover:bg-gray-50 active:bg-gray-100'}`}
                >
                  <div className="text-dark-500">{item.icon}</div>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div>
            <ul className="px-4 pb-4 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150"
                 
                >
                  <div className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  Aides
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150"
                  onClick={handleSetting}
                >
                  <div className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.004.827a1.125 1.125 0 01.261 1.431l-1.295 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456a1.095 1.095 0 00-1.074.125c-.074.045-.146.087-.22.127-.331.184-.682.49-.644.865l.213 1.281c.09.542-.26.94-.81.94H10.704c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a1.755 1.755 0 00-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.003-.827c.293-.24.438-.613.431-.992 0-.079.004-.158.01-.236a1.124 1.124 0 01-.43-.99l-1.004-.827a1.125 1.125 0 01-.261-1.431l1.295-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.134.751.072 1.075-.124.074-.04.147-.083.22-.127.332-.184.682-.486.645-.87l-.213-1.281z" />
                    </svg>
                  </div>
                  Paramètres
                </a>
              </li>

              <li>
                  <a
                    href="#"
                    className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150"
                    onClick={handleLogout} >
                    <div className="text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                    </div>
                    Se déconnecter
                  </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    
  );
};

export default Sidebar;
