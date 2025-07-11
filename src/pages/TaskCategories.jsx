import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function TaskCategories() {
    return (
        <div className="h-screen flex flex-col text-white pt-3 max-w-screen-xl w-full">
            <div className="max-w-screen-xl mx-auto w-full">
                <Header />

            </div>


            {/* Main content area */}
            <div className="flex flex-1 min-h-0 overflow-hidden">
                <Sidebar />

                <div className="flex-1 overflow-y-auto p-4">
                    {/* Your page content here */}
                </div>
            </div>
        </div>
    );
}
export default TaskCategories