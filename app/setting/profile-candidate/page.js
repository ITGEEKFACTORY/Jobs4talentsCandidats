'use client'
import { useEffect, useState } from 'react';
import * as Tabs from "@radix-ui/react-tabs";
import ProfileContainer from '../../components/profileContainer';
import dynamic from 'next/dynamic';
import Loading from '../../components/Loading';

import SettingUser from '../../components/Profiles/ProfileCandidate/SettingUser';

import OffresRecommander from '../../components/offres';
import ModalCV from '../../components/modal';

export default function ProfileUpload() {

  const EditUser = dynamic(() => import('../../components/Profiles/ProfileCandidate/EditCandidate'));
  const ViewUser = dynamic(() => import('../../components/Profiles/ProfileCandidate/ViewCandidate'));

  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useState('ViewUser');
  const handleSwitchView = (view) => {
    
    setLoading(true);
    setTimeout(() => {
      setCurrentView(view);
      setLoading(false);
    }, 1000);
  }

  const renderView = () => {

    switch (currentView) {
      case 'EditUser':
        return <EditUser onSave={() => handleSwitchView('ViewUser')} />;
      case 'ViewUser':
        return <ViewUser onEdit={() => handleSwitchView('EditUser')} />;
      default:
        return <ViewUser onEdit={() => handleSwitchView('EditUser')} />;
    }
  };



  return (
    <div>
      <meta name="csrf-token" content="{{ csrf_token() }}" />

      <Tabs.Root className="max-w-screen-xl mx-auto px-4 md:px-8" defaultValue="Profile">

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

        {/*   <Tabs.Trigger
            className="group outline-none py-1.5 border-b-2 border-white text-gray-500 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
            value="Applications"
          >
            <div className="flex items-center gap-x-2 py-1.5 px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M4 4h16v16H4V4zm0-2C2.9 2 2 2.9 2 4v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm4 12h8v2H8v-2zm0-4h8v2H8v-2zm0-4h8v2H8V6z" />
              </svg>
              <h2 className=" font-semibold text-left">
                Mes offres candidatures
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

          <Tabs.Trigger
            className="group outline-none py-1.5 border-b-2 border-white text-gray-500 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
            value="Jobs"
          >
            <div className="flex items-center gap-x-2 py-1.5 px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M6 2h12c1.1 0 2 .9 2 2v2h-2V4H6v2H4V4c0-1.1.9-2 2-2zm12 6H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 8h-4v-2h4v2zm4-4H8v-2h8v2z" />
              </svg>

              Trouver recruteurs
            </div>
          </Tabs.Trigger> */}

        </Tabs.List>

        <Tabs.Content value="Profile" className="py-2">
          {loading ? (
            <div>Chargement...</div>
          ) : (
            renderView()
          )}
        </Tabs.Content>

        <Tabs.Content value="Jobs" className="py-2">
          <OffresRecommander />
        </Tabs.Content>

        <Tabs.Content value="Applications" className="py-2">
          <ModalCV />
        </Tabs.Content>

        <Tabs.Content value="Settings" className="py-4">
          <SettingUser />
        </Tabs.Content>

      </Tabs.Root>
    </div>
  );
}



/* export default function Page() {
  return (
    <div> Hello</div>
  );
} */

