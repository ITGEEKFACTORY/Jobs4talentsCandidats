
'use client';
import React, { useEffect, useRef } from 'react';
import { useCandidatesContext } from "../../../../../context/CandidateContext";
import DataTable from 'datatables.net-dt';




export default function PageListCandidates() {

  const { candidates, loading, error } = useCandidatesContext();
  const tableRef = useRef(null);

  useEffect(() => {
    let table;

    if (!loading && !error && candidates.length > 0) {
      table = new DataTable(tableRef.current, {
        language: {
          "sEmptyTable": "Aucune donnée disponible dans le tableau",
          "sInfo": " Affichage de _START_ à _END_ sur _TOTAL_ Entrées",
          "sInfoEmpty": "Affichage de 0 à 0 sur 0 entrée",
          "sInfoFiltered": "(filtré à partir de _MAX_Entrées au total)",
          "sInfoPostFix": "",
          "sInfoThousands": ",",
          "sLengthMenu": "Afficher _MENU_  Entrées",
          "sLoadingRecords": "Chargement...",
          "sProcessing": "Traitement...",
          "sSearch": "Rechercher: ",
          "sZeroRecords": "Aucun résultat trouvé",
          "oPaginate": {
            "sFirst": "<",
            "sLast": ">",
            "sNext": "Suivant",
            "sPrevious": "Précédent"
          },
          "oAria": {
            "sSortAscending": ": activer pour trier la colonne par ordre croissant",
            "sSortDescending": ": activer pour trier la colonne par ordre décroissant"
          }
        }
      });

      // Cleanup function to destroy the DataTable instance when the component unmounts
      return () => {
        if (table) {
          table.destroy();
        }
      };
    }
  }, [candidates, loading, error]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 pt-12">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
        
          <p className="text-gray-600 mt-2">
            Voici la liste des candidates avec leurs informations détaillées.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Ajouter un candidat
          </a>
        </div>
      </div>
      <div className="mt-4 shadow-md border rounded-sm overflow-x-auto p-2 bg-gray-50">
        <h4 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Liste des candidates
        </h4>
        <table id="myTable" ref={tableRef} className="display ">
          <thead>
            <tr>
              <th className="text-sm">#</th>
              <th className="text-sm">Nom & Prénom</th>
              <th className="text-sm">Email</th>
              <th className="text-sm">Ville & Pays</th>
              <th className="text-sm">N° Téléphone</th>
              <th className="text-sm">Poste</th>
              <th className="text-sm">Expérience</th>
              <th className="text-sm">Qualification</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={candidate.id}>
                <td className="text-center">{index + 1}</td>
                <td className="flex items-center px-2">
                  <img  src={`http://127.0.0.1:8000/${candidate.avatar}`}  className="w-8 h-8 rounded-full" alt="Avatar" />
                  <div className="ml-2 text-sm">
                    <span className="block text-gray-700">{candidate.firstName} {candidate.lastName}</span>
                  </div>
                </td>
                <td className="text-sm">{candidate.user.email}</td>
                <td className="text-sm">{`${candidate.city}, ${candidate.country}`}</td>
                <td className="text-sm">{candidate.phone_num}</td>
                <td className="text-sm">{candidate.job_title}</td>
                <td className="text-sm">{candidate.experience}</td>
                <td className="text-sm">{candidate.qualification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}