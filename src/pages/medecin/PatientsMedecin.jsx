import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from "../../components/medecinComponent/MedecinHeader";
import Sidebar from "../../components/medecinComponent/MedecinSidebar";

const PatientsMedecin = () => {

  const [patients, setPatients] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const medecinId = 1;

  useEffect( () => {
    axios.get(`http://localhost:3000/api/users/${medecinId}/patients`)
      .then(res => {
        setPatients(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erreur de chargement de patient', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement des patients...</p>;
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">Mes Patients</h1>
                    
                    {patients.length === 0 ? (
                      <p>Aucun patient trouvé.</p>
                    ) : (
                      <div className='grid gap-4'>

                        {patients.map(patient => (
                          <div key={patient.id} className="bg-white p-4 shadow rounded">
                            <p><strong>Nom :</strong> {patient.name} {patient.lastName}</p>
                            <p><strong>Email :</strong> {patient.email}</p>
                            <p><strong>Sexe :</strong> {patient.gender || 'Non renseigné'}</p>

                            <Link
                              to={`/medecin/dossier/${patient.id}`}
                              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                            >
                              Voir Dossier Médical
                            </Link>
                          </div>
                        ))}
                      </div>
                    )
                    }
                </div>
            </div>

            
        </div>
     
    );
  };
  export default PatientsMedecin;
  