'use client'
import { useEffect, useState } from 'react';
import * as Tabs from "@radix-ui/react-tabs";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Sidebar from '../../../../components/ui/Sidebar'
import AppBar from '../../../../components/AppBar'



export default function PageProfileRecruteur() {

  const EditRecruteur = dynamic(() => import('../../../../components/Profiles/ProfileRecruteur/EditRecruteur'));
  const ViewRecruteur = dynamic(() => import('../../../../components/Profiles/ProfileRecruteur/ViewRecruteur'));

  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useState('ViewCandidate');
  const handleSwitchView = (view) => {

    setLoading(true);
    setTimeout(() => {
      setCurrentView(view);
      setLoading(false);
    }, 1000);
  }

  const renderView = () => {

    switch (currentView) {
      case 'editer-infos-recruteur':
        return <EditRecruteur />;
      case 'ViewRecruteur':
        return <ViewRecruteur />;
      default:
        return <ViewRecruteur />;
    }
  };



  return (
    <div className="flex h-screen text-gray-900">


      <div className="flex-1">
    
        <div className="max-w-screen-xl mx-auto px-8">
          {/* <div className="items-start justify-between py-4 border-b md:flex">
            <div>

              <h3 className="text-gray-800 text-xl font-bold">
                Dashboard recruteur
              </h3>
            </div>

            <div className="items-center gap-x-3 mt-6 md:mt-0 sm:flex">
              <a
                href="javascript:void(0)"
                className="block px-4 py-2 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
              >
                Personnaliser mon CV
              </a>
              <a
                href="javascript:void(0)"
                className="block px-4 py-2 mt-3 text-center text-gray-700 duration-150 font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 sm:mt-0 md:text-sm"
              >
                Inserer mon CV
              </a>
            </div>
          </div> */}
        </div>

        <Tabs.Root className="max-w-screen-xl mx-auto px-4 md:px-4" defaultValue="Profile">

          <Tabs.List
            className="w-full border-b flex items-center gap-x-3 overflow-x-auto text-sm"
            aria-label="Manage your account">

            <Tabs.Trigger
              className="group outline-none py-1.5 border-b-2 border-white text-gray-500 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
              value="Profile">

              <div className="flex items-center gap-x-2 py-1.5 px-1 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <h2 className=" font-semibold text-left">
                  Mon profile
                </h2>
              </div>
            </Tabs.Trigger>

           

            <Tabs.Trigger
              className="group outline-none py-1.5 border-b-2 border-white text-gray-500 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
              value="Settings"
            >
              <div className="flex items-center gap-x-2 py-1.5 px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M3.34 17a10.018 10.018 0 01-.978-2.326 3 3 0 00.002-5.347A9.99 9.99 0 014.865 4.99a3 3 0 004.631-2.674 9.99 9.99 0 015.007.002 3 3 0 004.632 2.672A9.99 9.99 0 0120.66 7c.433.749.757 1.53.978 2.326a3 3 0 00-.002 5.347 9.99 9.99 0 01-2.501 4.337 3 3 0 00-4.631 2.674 9.99 9.99 0 01-5.007-.002 3 3 0 00-4.632-2.672A10.018 10.018 0 013.34 17zm5.66.196a4.993 4.993 0 012.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0115 17.197a4.993 4.993 0 013.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0118 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 00-.75-1.298A4.993 4.993 0 0115 6.804a4.993 4.993 0 01-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 019 6.803a4.993 4.993 0 01-3.525.565 7.99 7.99 0 00-.748 1.298A4.993 4.993 0 016 12a4.99 4.99 0 01-1.273 3.334 8.126 8.126 0 00.75 1.298A4.993 4.993 0 019 17.196zM12 15a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z"></path>
                </svg>
                <h2 className=" font-semibold text-left">
                  Paramètres
                </h2>
              </div>
            </Tabs.Trigger>

           

          </Tabs.List>

          <Tabs.Content value="Profile" className="py-2">
            {loading ? (
              <div>Chargement...</div>
            ) : (
              renderView()
            )}
          </Tabs.Content>
    
  

        </Tabs.Root>
      </div>
    </div>


  );
}



