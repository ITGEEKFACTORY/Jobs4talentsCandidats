export default function pageDashbardRecruteur() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-black-500 mb-4">Tableau de bord</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 text-blue-900 rounded-lg p-4 flex items-center">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20l9-5-9-5-9 5 9 5zm0-10l9-5-9-5-9 5 9 5z"
              />
            </svg>
          </div>
          <div>
            <h2 className="font-semibold">Offres d'Emploi</h2>
            <p className="text-xl">0</p>
          </div>
        </div>

        <div className="bg-yellow-100 text-yellow-900 rounded-lg p-4 flex items-center">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20l9-5-9-5-9 5 9 5zm0-10l9-5-9-5-9 5 9 5z"
              />
            </svg>
          </div>
          <div>
            <h2 className="font-semibold">Candidates</h2>
            <p className="text-xl">0</p>
          </div>
        </div>

        <div className="bg-red-100 text-red-900 rounded-lg p-4 flex items-center">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20l9-5-9-5-9 5 9 5zm0-10l9-5-9-5-9 5 9 5z"
              />
            </svg>
          </div>
          <div>
            <h2 className="font-semibold">Recrutements</h2>
            <p className="text-xl">0</p>
          </div>
        </div>

        <div className="bg-gray-200 text-gray-700 rounded-lg p-4 flex items-center">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20l9-5-9-5-9 5 9 5zm0-10l9-5-9-5-9 5 9 5z"
              />
            </svg>
          </div>
          <div>
            <h2 className="font-semibold">Entretiens</h2>
            <p className="text-xl">0</p>
          </div>
        </div>

        <div className="bg-blue-100 text-blue-900 rounded-lg p-4 flex items-center">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20l9-5-9-5-9 5 9 5zm0-10l9-5-9-5-9 5 9 5z"
              />
            </svg>
          </div>
          <div>
            <h2 className="font-semibold">Documents</h2>
            <p className="text-xl">0</p>
          </div>
        </div>

        <div className="bg-white text-gray-700 rounded-lg p-4 flex items-center shadow">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20l9-5-9-5-9 5 9 5zm0-10l9-5-9-5-9 5 9 5z"
              />
            </svg>
          </div>
          <div>
            <h2 className="font-semibold">Adhérents</h2>
            <p className="text-xl">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
