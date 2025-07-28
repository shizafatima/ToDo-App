import React, {useState} from "react";
import Header2 from "../components/Header2";
import Sidebar from "../components/Sidebar";
import HelpContent from "../components/HelpContent";

function Help() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="h-screen flex flex-col text-white w-full">
            <div className="max-w-screen-xl w-full">
                <Header2 onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

            </div>


            {/* Main content area */}
            <div className="flex flex-1 min-h-0 overflow-hidden relative">

                <div className={`fixed top-0 left-0 h-full w-64 bg-[#ff6a6b] z-30 transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0 lg:z-0`}>
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
                    <HelpContent/>
                </div>
            </div>
        </div>
    );
}
export default Help