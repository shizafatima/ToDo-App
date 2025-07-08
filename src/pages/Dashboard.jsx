import React from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {
    return (
        <div className="min-h-screen flex text-white w-64 min-h-screen pt-3">
            <div className="w-64 bg-white shadow-lg">

                <Sidebar />
            </div>
        </div>
    )
}
export default Dashboard