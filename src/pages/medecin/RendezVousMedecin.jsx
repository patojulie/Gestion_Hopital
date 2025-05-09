import React , {useState, useEffect} from "react";
import axios from "axios";
import Header from "../../components/medecinComponent/MedecinHeader";
import Sidebar from "../../components/medecinComponent/MedecinSidebar";

const RendezvousMedecin = () => {
    const [rendezvous, setRendezvous] = useState([]);
    const [loading, setLoading] = useState(true);
    const medecinId = 2  //localStorage.getItem("medecinId");

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users/${medecinId}/rendezvous`)
        .then(res =>{
            setRendezvous(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.error("Erreur chargement rendezvous",err);
            setLoading(false);
        });
    },[]);

    if(loading) {
        return <p className="p-6">Chargement des rendez-vous...</p>;
    }
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">Mes Rendez-vous</h1>
                    {rendezvous.length === 0 ? (
                    <p>Aucun rendez-vous trouvé.</p>
                    ) : (
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rendezvous.map(rdv => (
                        <li key={rdv.id} className="card bg-white p-4 shadow-md rounded-lg">
                            <p><strong>Date :</strong> {new Date(rdv.date).toLocaleString()}</p>
                            <p><strong>Motif :</strong> {rdv.motif || "Non précisé"}</p>
                            <p><strong>Patient ID :</strong> {rdv.patientId}</p>
                            <p><strong>Type :</strong> {rdv.type}</p>
                            <p><strong>Statut :</strong> {rdv.status || "en attente"}</p>
                        </li>
                        ))}
                    </ul>
                    )}
                </div>
            </div>

        </div>
     
    );
  };
  export default RendezvousMedecin;
  