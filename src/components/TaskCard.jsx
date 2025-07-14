import React from "react";

const TaskCard = ({ title, desc, status, date, priority, completed = false }) => {
    const statusColor = {
        "Not Started": "text-red-500",
        "In Progress": "text-blue-500",
        Completed: "text-green-500",
    }[status];
    const priorityColor = {
        "Extreme": "text-red-500",
        "Moderate": "text-blue-500",
        "low" : "text-green-500"
    }[priority]
    return (
        <div  className="bg-white p-4 rounded-xl shadow flex gap-4 min-h-[150px]">
            <div className="flex-1 text-left ml-4 mt-2">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
                <div className="mt-2 text-sm">
                    <span className={`${statusColor} font-medium`}><span className="text-black">Status: </span> {status}</span>
                    <span className={`${priorityColor} font-small ml-2`}><span className="text-black">Priority: </span>{priority}</span>
                    <span className="ml-2 text-gray-400">• {completed ? `Completed ${date}` : `Created on ${date}`}</span>
                </div>
            </div>
        </div>
    )
}
export default TaskCard