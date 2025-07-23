import React, {useState} from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";

function Dashboard() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="h-screen flex flex-col text-white w-full">
            <div className="max-w-screen-xl w-full">
                <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

            </div>


            {/* Main content area */}
            <div className="flex flex-1 min-h-0 overflow-hidden relative">

                <div className={`absolute z-20 h-full transition-transform duration-300 
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    xl:relative xl:translate-x-0 xl:block absolute`}>
                    <Sidebar />
                </div>

                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10 xl:hidden overflow-auto"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}
              

                <div className="flex-1 p-4 overflow-auto">
                    {/* Your page content here */}
                    <DashboardContent />
                </div>
            </div>
        </div>
    );
}
export default Dashboard


