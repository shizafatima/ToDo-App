import React, { useEffect, useState } from "react";
import { FileClock } from 'lucide-react';
import TaskCard from "./TaskCard";

function DashboardContent() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userData"));
        if (storedUser) {
            setUser(storedUser)
        }
    }, []);


    return (
        <div className="flex-1 bg-white text-black p-6 overflow-y-auto">
            <div>

                <h1 className="text-3xl text-left font-bold mb-4">Welcome Back, {user.firstName || "User"}</h1>
            </div>
            <div className="grid grid-cols-[2_minmax(600px,_1fr) grid-rows-2 md:grid-cols-3 gap-7 border border-gray-400 w-full">
                {/* left to do */}
                <div className="border">
                    <h2 className="flex text-red-400 font-semibold">
                        <FileClock className="text-gray-500" /> To Do</h2>
                    <div className="shadow md border row-span-2">
                        <TaskCard
                            title="Attend Nischal's Birthday Party"
                            desc="Buy gifts and pick up cake (6 PM | Fresh Elements)"
                            status="Not Started"
                            date="20/06/2023"
                        />

                        <TaskCard
                            title="Attend Nischal's Birthday Party"
                            desc="Buy gifts and pick up cake (6 PM | Fresh Elements)"
                            status="Not Started"
                            date="20/06/2023"
                        />
                    </div>
                    <div>
                        <TaskCard
                            title="Attend Nischal's Birthday Party"
                            desc="Buy gifts and pick up cake (6 PM | Fresh Elements)"
                            status="Not Started"
                            date="20/06/2023"
                        />

                    </div>
                </div>
                <div className="col-span-2">
                    <h2 className="flex text-red-400 font-semibold">
                        <FileClock className="text-gray-500" /> To Do</h2>
                    <TaskCard
                        title="Attend Nischal's Birthday Party"
                        desc="Buy gifts and pick up cake (6 PM | Fresh Elements)"
                        status="Not Started"
                        date="20/06/2023"
                    />
                    <div className="row-span-2">

                    <h2 className="flex text-red-400 font-semibold">
                        <FileClock className="text-gray-500" /> To Do</h2>
                    <TaskCard
                        title="Attend Nischal's Birthday Party"
                        desc="Buy gifts and pick up cake (6 PM | Fresh Elements)"
                        status="Not Started"
                        date="20/06/2023"
                    />
                    </div>
                </div>

            </div>

        </div>
    )
    
}

export default DashboardContent;