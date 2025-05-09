import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar  from '../../components/medecinComponent/MedecinSidebar';
import Header  from '../../components/medecinComponent/MedecinHeader';

const DossierMedicalPatient = () => {
  const { id } = useParams(); // id = patientId
  const [dossier, setDossier] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/users/dossier/${id}`)
      .then(res => {
        setDossier(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement du dossier...</p>;
  if (!dossier) return <p>Aucun dossier trouvé.</p>;

  return (
    <div className='flex h-screen'>
        <Sidebar />
            <div className="flex-1 flex flex-col">
            <Header />
            <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Dossier Médical du Patient #{id}</h2>
            <div className="bg-white p-4 rounded shadow">
                <p><strong>Antécédents :</strong> {dossier.antecedents || 'Non renseignés'}</p>
                <p><strong>Traitements :</strong> {dossier.traitements || 'Non renseignés'}</p>
                {/* Tu peux ajouter les prescriptions, examens, etc. ici */}
            </div>
            </div>
        </div>
    </div>
    
  );
};

export default DossierMedicalPatient;
