
export default function ItemRecruteurs({ recruteurs}) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="items-start pl-2 justify-between sm:flex">
        <div>
          <h3 className="text-gray-800 text-xl font-bold sm:text-xl">Trouvez des recruteurs</h3>
          <p className="mt-2 text-gray-600 text-base sm:text-sm">
            Trouvez des recruteurs et prenez contact avec eux facilement.
          </p>

        </div>
        
      </div>
      <ul className="mt-5 divide-y">
      {recruteurs.map((recruteur, idx) => (

            <li key={idx} className="py-5 flex items-start justify-between">
              <div className="flex gap-3">
                <img src={recruteur.avatar} className="flex-none w-12 h-12 rounded-full" />
                <div>
                  <span className="block text-sm text-gray-700 font-semibold">{recruteur.user.name}</span>
                  <span className="block text-sm text-gray-600">{recruteur.user.email}</span>
                </div>
              </div>
              <a href="javascript:void(0)" className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 bg-white hover:bg-gray-100">Contacter</a>
            </li>

          ))}
      </ul>
    </div>
  );
};