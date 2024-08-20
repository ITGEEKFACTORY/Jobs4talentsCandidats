import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import SubmitButton from './SubmitButton'; // Assurez-vous que le chemin est correct pour votre composant SubmitButton

export default function ModalCV({ isOpen, setIsOpen, selectedFile, setSelectedFile, updateFormFile }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null); // Réinitialiser l'erreur

    try {
      await updateFormFile({ keyName: 'file_cv', selectFile: selectedFile });
      setIsOpen(false); 
      window.location.reload();
    } catch (err) {
      console.error('Erreur lors de la mise à jour:', err);
      setError('Une erreur est survenue lors de la mise à jour.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">
          <div className="bg-white rounded-md shadow-lg px-4 py-6">
            <Dialog.Title className="text-lg font-medium text-gray-800 text-center my-3">
              Ajouter votre CV
            </Dialog.Title>

            <Dialog.Description className="mt-1 text-sm leading-relaxed text-center text-gray-500">
              <div className="border-dashed border-2 border-gray-300 rounded-lg p-3 text-center max-w-md mx-auto">
                <input
                  type="file"
                  accept=".pdf"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileChange}
                />
               
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center cursor-pointer"
                >
                  <div className="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={80} height={80}>
                      <title>{"cloud_upload"}</title>
                      <g fill="none" fillRule="evenodd">
                        <path d="M0-4h24v24H0z" />
                        <path
                          fill="#aaaa"
                          d="M19.35 6.04A7.49 7.49 0 0 0 12 0C9.11 0 6.6 1.64 5.35 4.04A5.994 5.994 0 0 0 0 10c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96ZM14 9v4h-4V9H7l4.65-4.65c.2-.2.51-.2.71 0L17 9h-3Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <p className="text-gray-600 font-semibold">Cliquez pour insérer votre CV</p>
                  <p className="mt-2 text-sm text-gray-500">Maximum un fichier</p>
                </label>
                {selectedFile && (
                  <div className="mt-4 text-gray-700 flex items-center justify-center">
                    <p className="text-black-800 font-bold mr-2 text-[15px]">{selectedFile.name}</p>
                    <button onClick={handleFileRemove}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={14} height={14}>
                        <path
                          fill="#f70200" stroke="#f702000"
                          fillRule="evenodd"
                          d="M11 2a1 1 0 0 0-1 1v1h4V3a1 1 0 0 0-1-1h-2Zm5 2V3a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H3a1 1 0 0 0 0 2h.105l1.703 15.331A3 3 0 0 0 7.79 24h8.42a3 3 0 0 0 2.982-2.669L20.895 6H21a1 1 0 1 0 0-2h-5Zm2.883 2H5.117l1.68 15.11a1 1 0 0 0 .993.89h8.42a1 1 0 0 0 .994-.89L18.883 6ZM10 9a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </Dialog.Description>
            <div className="items-center gap-5 mt-3 text-sm">

               <form onSubmit={handleFormSubmit}>
              <div className="items-center gap-5 mt-3 text-sm flex">
                <Dialog.Close asChild>
                  <button
                   className={`w-full px-4 py-2.5 font-medium rounded-lg duration-150 bg-gray-100  flex items-center justify-center`}
                
                  >
                    Annuler
                  </button>
                </Dialog.Close>

                <SubmitButton
                  disabled={loading}
                  isLoading={loading} 
                  textSize="text-base"
                  spinnerSize="w-8 h-5"
                  label="Déposer maintenant"
                />
              </div>
              
            </form>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
