import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import HelpContent from "../components/HelpContent";

function Help() {
    return (
        <div className="h-screen flex flex-col text-white w-full">
            <div className="max-w-screen-xl w-full">
                <Header />

            </div>


            {/* Main content area */}
            <div className="flex flex-1 min-h-0 overflow-hidden">
                <Sidebar />

                <div className="flex-1 bg-white text-black p-6">
                    {/* Your page content here */}
                    <HelpContent/>
                </div>
            </div>
        </div>
    );
}
export default Help