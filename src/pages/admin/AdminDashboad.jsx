import Header from "../../components/adminComponents/Header";
import Sidebar from "../../components/adminComponents/SideBar";
export default function AdminDashboard() {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
            <main className="ml-64 mt-20 p-6 bg-white min-h-screen">
                {/* Contenu à venir ici */}
            <section id="dashboard" className="mb-8">
                <h3 className="text-xl text-blue-800 mb-4">Indicateurs Clés</h3>
                <div className="flex gap-4 flex-wrap">
                <div className="bg-blue-100 border-l-4 border-green-500 p-4 rounded w-56">📅 Rendez-vous aujourd'hui: <strong>42</strong></div>
                <div className="bg-blue-100 border-l-4 border-green-500 p-4 rounded w-56">💻 Téléconsultations: <strong>18</strong></div>
                <div className="bg-blue-100 border-l-4 border-green-500 p-4 rounded w-56">🎟️ Bons vendus cette semaine: <strong>120</strong></div>
                <div className="bg-blue-100 border-l-4 border-green-500 p-4 rounded w-56">🩸 Dons de sang récents: <strong>10</strong></div>
                <div className="bg-blue-100 border-l-4 border-yellow-500 p-4 rounded w-56">⏳ Demandes de sang en attente: <strong>2</strong></div>
                </div>
            </section>
            </main>
        </div>
      </div>
    );
  }
  