import React, { useEffect, useState, useRef } from "react";
import { FileClock, FileCheck2, FileCheck  } from 'lucide-react';
import TaskCard from "./TaskCard";
import TaskStatus from "./TaskStatus";
import { useTasks } from "./TaskContext";

function DashboardContent() {
    const [user, setUser] = useState({});
    const { tasks, addTask } = useTasks();
    const hasInitialized = useRef(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userData"));
        if (storedUser) {
            setUser(storedUser)
        }

        if (!hasInitialized.current) {
            addTask({
                id: 1,
                title: "Attend Nischal's Birthday Party",
                desc: "Buy gifts and pick up cake",
                priority: "Moderate",
                status: "Not Started",
                date: "20/06/2023",
            });

            addTask({
                id: 2,
                title: "Finish the UI Design",
                desc: "Wrap up remaining screens",
                priority: "Moderate",
                status: "In Progress",
                date: "22/06/2023",
            });
            addTask({
                id: 3,
                title: "Landing Page Design for TravelDays",
                desc: "Get the work done by EOD and sicuss with client before leaving. (4 PM | Meeting Room",
                priority: "Moderate",
                status: "In Progress",
                date: "22/06/2023",
            });
            addTask({
                id: 4,
                title: "Presentation on Final Product",
                desc: "Make sure everything is functioning and all necessities are properly met. Prepare the team and get the documents ready.",
                priority: "Moderate",
                status: "Not Started",
                date: "22/06/2023",
            });
            addTask({
                id: 5,
                title: "Walk the Dog",
                desc: "Take the dog to the park and bring treats as well",
                status: "Completed",
            });

            addTask({
                id: 5,
                title: "Walk the Dog",
                desc: "Take the dog to the park and bring treats as well",
                status: "Completed",
            });


            hasInitialized.current = true;
        }
    }, []);

    const statuses = [
        { status: "Completed", color: "green", label: "Completed" },
        { status: "In Progress", color: "blue", label: "In Progress" },
        { status: "Not Started", color: "red", label: "Not Started" },
    ];
    return (
        <div className="flex-1 bg-white text-black p-6">
            <div>
                <h1 className="text-3xl text-left font-bold mb-4">Welcome Back, {user.firstName || "User"}</h1>
            </div>
            <div className="border border-gray-400 h-full grid grid-cols-2 grid-rows-2">
                <div className="p-5 m-5 row-start-1 row-end-3 gap-2">
                    <h4 className="text-red-400 text-left ml-5 font-medium flex"><FileClock className="text-gray-400 mr-2"/> To Do</h4>
                    {tasks
                        .filter(task => task.status !== "Completed")
                        .map((task) => (
                            <div className="m-2" key={task.id}>
                                <TaskCard
                                    title={task.title}
                                    desc={task.desc}
                                    priority={task.priority}
                                    status={task.status}
                                    date={task.date}
                                />
                            </div>
                        ))}

                </div>

                <div className="pt- mt-5">
                    <h2 className="text-left text-red-400 ml-5 font-medium flex"> <FileCheck2 className="text-gray-400 mr-2"/> Task Status</h2>
                    <div className="flex gap-1 justify-start mt-2 shadow-md rounded-lg m-5 p-5">

                        {statuses.map((s, i) => (
                            <TaskStatus key={i} {...s} />
                        ))}
                    </div>
                </div>
                <div className="col-start-2 col-end-3">
                    <h4 className="text-left text-red-400 ml-5 font-medium flex"><FileCheck className="text-gray-400 mr-2"/>Completed Tasks</h4>
                    {tasks
                        .filter(task => task.status === "Completed")
                        .map(task => (
                            <div className="m-2" key={task.id}>
                                <TaskCard
                                    title={task.title}
                                    desc={task.desc}
                                    priority={task.priority}
                                    status={task.status}
                                    date={task.date}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )

}

export default DashboardContent;