'use client';
import React from 'react';
import { formatDate } from '../components/formatDate';
import useDestroyFile from '@/app/utils/functions/destroyFile';

const PdfViewer = ({ fileUrl, formData, user }) => {
  const fileUrlCv = `http://127.0.0.1:8000/${fileUrl}`;
  const formattedDate = formatDate(formData?.updated_at);

  const { destroyFile, destroyLoading, error } = useDestroyFile();



  const handleDelete = async () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce fichier?')) {
      const result = await destroyFile(`http://127.0.0.1:8000/api/candidates/destroy/${user?.id}`);
      if (result.success) {
        window.location.reload();
      } else {
        alert(`Échec de la suppression du fichier: ${result.message}`);
      }
    }
  };



  return (
    <div className="items-center">
      <div className="rounded-lg bg-white shadow">
        {fileUrl ? (
              <div className="bg-yellow-50 p-2 rounded-lg">
                <div>
                  <div className="flex items-center justify-between">

                    <div className="flex items-center justify-start">
                      <a
                        href={fileUrlCv}
                        target="_blank"
                        className={fileUrl ? "cursor-pointer" : "cursor-not-allowed"}
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M26 1.09384C26 0.489727 26.4897 0 27.0938 0C27.674 0 28.2305 0.230486 28.6408 0.640755L43.3592 15.3592C43.7695 15.7695 44 16.326 44 16.9062C44 17.5103 43.5103 18 42.9062 18H28C26.8954 18 26 17.1046 26 16L26 1.09384Z"
                            fill="#D4D2D0"
                          ></path>
                          <path
                            d="M0 2C0 0.895431 0.895431 0 2 0H27C28.1046 0 29 0.895431 29 2V13C29 14.1046 29.8954 15 31 15H42C43.1046 15 44 15.8954 44 17V62C44 63.1046 43.1046 64 42 64H2C0.895431 64 0 63.1046 0 62V2Z"
                            fill="#E4E2E0"
                          ></path>
                          <path
                            d="M6 7C6 6.44772 6.44772 6 7 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H7C6.44772 8 6 7.55228 6 7Z"
                            fill="#D4D2D0"
                          ></path>
                          <path
                            d="M6 11C6 10.4477 6.44772 10 7 10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H7C6.44772 12 6 11.5523 6 11Z"
                            fill="#D4D2D0"
                          ></path>
                          <path
                            d="M6 15C6 14.4477 6.44772 14 7 14H21C21.5523 14 22 14.4477 22 15C22 15.5523 21.5523 16 21 16H7C6.44772 16 6 15.5523 6 15Z"
                            fill="#D4D2D0"
                          ></path>
                          <path
                            d="M6 21C6 20.4477 6.44772 20 7 20H37C37.5523 20 38 20.4477 38 21C38 21.5523 37.5523 22 37 22H7C6.44772 22 6 21.5523 6 21Z"
                            fill="#D4D2D0"
                          ></path>
                          <path
                            d="M6 25C6 24.4477 6.44772 24 7 24H37C37.5523 24 38 24.4477 38 25C38 25.5523 37.5523 26 37 26H7C6.44772 26 6 25.5523 6 25Z"
                            fill="#D4D2D0"
                          ></path>
                          <path
                            d="M6 29C6 28.4477 6.44772 28 7 28H37C37.5523 28 38 28.4477 38 29C38 29.5523 37.5523 30 37 30H7C6.44772 30 6 29.5523 6 29Z"
                            fill="#D4D2D0"
                          ></path>
                          <path
                            d="M6 33C6 32.4477 6.44772 32 7 32H37C37.5523 32 38 32.4477 38 33C38 33.5523 37.5523 34 37 34H7C6.44772 34 6 33.5523 6 33Z"
                            fill="#D4D2D0"
                          ></path>
                          <path d="M0 44H44V62C44 63.1046 43.1046 64 42 64H2C0.895431 64 0 63.1046 0 62V44Z" fill="#2557a7"></path>
                          <text aria-hidden="true" className="css-jhzhrd e1wnkr790">
                            <tspan x="10" y="58">PDF</tspan>
                          </text>
                        </svg>
                      </a>

                      <div className="ml-4">
                      <h3 className='text-lg font-medium'>
                        Cv_{formData?.firstName}</h3>
                      <p className="text-sm text-gray-500">Mise à jour le {formattedDate}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(user?.id)}
                      disabled={destroyLoading}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <svg
                        viewBox="0 0 72.434 72.437"
                        width="20"
                        height="20"
                        className="text-red-500"
                      >
                        <path
                          fill="currentColor"
                          d="M36.22,0C16.212,0,0,16.215,0,36.223c0,19.999,16.212,36.214,36.22,36.214
                        s36.214-16.215,36.214-36.214C72.434,16.215,56.228,0,36.22,0z M51.812,48.083l-4.565,4.565l-11.02-11.021L24.86,52.995
                        l-4.565-4.565l11.367-11.367L20.639,26.04l4.568-4.565l11.02,11.02l11.349-11.343l4.565,4.565L40.792,37.063L51.812,48.083z"
                        />
                      </svg>
                    </button>
                  </div>

                </div>

              </div>
        ) : (
          <div className="text-gray-500 p-4">Aucun CV ajouté</div>
        )}
      </div>
    </div>
  );

};

export default PdfViewer;


