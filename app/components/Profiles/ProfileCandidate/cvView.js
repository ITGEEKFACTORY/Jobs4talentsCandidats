'use client';
import { useState } from 'react';
import axios from 'axios';
import ModalCV from '../../modal';

import PdfViewer from '../../PdfViewer';
import useUpdateFileForm from '@/app/utils/functions/updateFile'




function CvView({ user, formData }) {

  const [selectedFile, setSelectedFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { updateFormFile, uploadLoading, error } = useUpdateFileForm(`http://127.0.0.1:8000/api/candidates/${user?.id}`);

  const [loading, setLoading] = useState(false);


 


  
  const fileUrl = formData.file_cv;

  return (
    <div className="mt-2 bg-gray-100 px-3 py-4 rounded-lg">
    <h2 className="font-semibold text-lg">CV {user?.name}</h2>
   
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-3">
          <svg
            className="text-gray-600"
            width={24}
            height={24}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M4.2 4.2284c-.3905.3906-.3905 1.0237 0 1.4143l1.418 1.418-.0008.0007L7.7896 9.234l.0007-.001 1.4926 1.4927-.0005.001 3.9906 3.9906.0011-.0005 1.4918 1.4918-.001.0007 1.9816 1.9816.001-.0006 1.5318 1.5317c.3905.3905 1.0237.3905 1.4142 0 .3905-.3905.3905-1.0237 0-1.4142l-1.3424-1.3424c1.3363-1.2202 2.5181-2.8273 3.5859-4.7247a.4931.4931 0 000-.4826c-2.5084-4.4573-5.6458-7.3126-9.9375-7.3126-1.7806 0-3.3625.4916-4.7832 1.385l-1.602-1.602c-.3906-.3905-1.0237-.3905-1.4143 0zM9.1987 7.813l1.4886 1.4886a2.9885 2.9885 0 011.3122-.3014c1.6569 0 3 1.3432 3 3 0 .4706-.1083.9158-.3014 1.3122l1.4878 1.4878c.5366-.8007.8495-1.7641.8495-2.8008 0-2.7824-2.2535-5.036-5.0359-5.036-1.0368 0-2.0001.313-2.8008.8496z"
              clipRule="evenodd"
            ></path>
            <path d="M2.062 11.758c.6784-1.2054 1.4027-2.2936 2.1835-3.2399l2.7682 2.7682c-.033.2329-.05.4709-.05.713 0 2.7823 2.2535 5.0358 5.0358 5.0358.2421 0 .4801-.017.713-.05l2.1155 2.1155c-.8842.2963-1.8248.4525-2.8285.4525-4.2916 0-7.429-2.8553-9.9374-7.3125a.4933.4933 0 010-.4826z"></path>
          </svg>
          <div>
            <div className="text-gray-700">Jobs4Talents CV</div>
           {/*  <div className="text-green-800 mt-2">
              Fichier : {selectedFile ? selectedFile.name : 'Aucun fichier sélectionné'}
            </div> */}
          </div>
        </div>
        <a
          role="button"
          onClick={() => setIsOpen(true)}
          className="text-indigo-600 hover:underline cursor-pointer"
        >
        {!formData.file_cv && "Télécharger"}
        </a>
      </div>

      <PdfViewer fileUrl={fileUrl} formData={formData} user={user}/>

      <ModalCV
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        updateFormFile={updateFormFile}
      />
  </div>
  );
}

export default CvView;
