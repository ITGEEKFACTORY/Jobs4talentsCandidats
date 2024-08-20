import React, { useEffect, useState } from 'react';
import { useCandidatesContext } from '@/app/context/CandidateContext';

const CandidateDetail = () => {
  const { getCandidate, loading, error } = useCandidatesContext();
  const [candidate, setCandidate] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  const candidateId = 3; // ID du candidat par défaut

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const fetchedCandidate = await getCandidate(candidateId);
        setCandidate(fetchedCandidate);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
        setCandidate(null);
      }
    };

    fetchCandidate();
  }, [candidateId, getCandidate]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      {fetchError && <p>Erreur : {fetchError}</p>}
      {candidate && (
        <div>
          <h2>{candidate.firstName} {candidate.lastName}</h2>
          <p>Email: {candidate.user.email}</p>
          <p>Phone: {candidate.phone_num}</p>
          {/* Ajoutez plus de détails sur le candidat ici */}
        </div>
      )}
    </div>
  );
};

export default CandidateDetail;
