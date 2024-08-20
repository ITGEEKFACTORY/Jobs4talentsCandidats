import React, {useState} from 'react';

const ProfileHearder = () => {

  const [activeTab, setActiveTab] = useState('Présentation');
  return (
    
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Header with Background */}
      <div className="relative w-full h-48 bg-cover bg-center" style={{ backgroundImage: "url('/logo/bg-code.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 ml-8 mb-4 flex items-center">
          <img src="/logo/brahim.jpg" alt="Profile" className="w-20 h-20 rounded-full border-4 border-white" />
          <div className="ml-4 text-white">
            <h2 className="text-2xl font-semibold">Brahim Djiddi Habre</h2>
            <p className="text-sm">@tibestilive</p>
            <p className="text-sm">Développeur full-stack à Kénitra</p>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="w-full max-w-4xl p-4">
        <div className="flex justify-between items-center">
          <div className="text-center">
            <h3 className="text-lg font-semibold">0</h3>
            <p className="text-sm text-gray-500">Vues</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">0</h3>
            <p className="text-sm text-gray-500">J'aimes</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Non classé</h3>
            <p className="text-sm text-gray-500">sur 320 406</p>
          </div>
          <div className="text-center">
            <span className="text-sm text-green-500">● Disponible</span>
            <p className="text-sm text-gray-500">Connecté il y a 10 minutes</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mt-8 border-b border-gray-200">
          {['Présentation', 'Évaluations', 'Références', 'Recommandations', 'Formations'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'Présentation' && <div>Contenu de la présentation</div>}
          {activeTab === 'Évaluations' && <div>Contenu des évaluations</div>}
          {activeTab === 'Références' && <div>Contenu des références</div>}
          {activeTab === 'Recommandations' && <div>Contenu des recommandations</div>}
          {activeTab === 'Formations' && <div>Contenu des formations</div>}
        </div>
      </div>
    </div>
  );
}

export default ProfileHearder;
