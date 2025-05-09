import React from "react";
import Header from "../../components/medecinComponent/MedecinHeader";
import Sidebar from "../../components/medecinComponent/MedecinSidebar";

const ProfileMedecin = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <div className="p-6">
                    <h1 className="text-xl font-bold">Mes Patients</h1>
                    <p>(À implémenter)</p>
                </div>
            </div>

            
        </div>
     
    );
  };
  export default ProfileMedecin;
  