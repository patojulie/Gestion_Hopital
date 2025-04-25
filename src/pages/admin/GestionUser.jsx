import Header from "../../components/adminComponents/Header";
import Sidebar from "../../components/adminComponents/SideBar";
import UserManagement from "./UserManagement";
export default function AdminDashboard() {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
            <main className="ml-64 mt-20 p-6 bg-white min-h-screen">
                <UserManagement/>
            </main>
        </div>
      </div>
    );
  }
  