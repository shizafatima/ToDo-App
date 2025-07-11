import React from "react";

const TaskCard = ({ title, desc, status, date, completed = false }) => {
    const statusColor = {
        "Not Started": "text-red-500",
        "In Progress": "text-blue-500",
        Completed: "text-green-500",
    }[status];
    return (
        <div  className="bg-white p-4 rounded-xl shadow flex gap-4">
            <div className="flex-1">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
                <div className="mt-2 text-sm">
                    <span className={`${statusColor} font-medium`}>Status: {status}</span>
                    <span className="ml-2 text-gray-400">• {completed ? `Completed ${date}` : `Created on ${date}`}</span>
                </div>
            </div>
        </div>
    )
}
export default TaskCard