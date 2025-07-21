import React from "react";
import { SquarePen, Trash2 } from 'lucide-react';


const TaskCard = ({ title, desc, status, date, priority, completed = false, onEdit, onDelete, dueInDays }) => {
    const statusColor = {
        "Not Started": "text-red-500",
        "In Progress": "text-blue-500",
        Completed: "text-green-500",
    }[status];
    const priorityColor = {
        "Extreme": "text-red-500",
        "Moderate": "text-blue-500",
        "Low": "text-green-500"
    }[priority]
    return (
        <div className="bg-white p-4 rounded-xl shadow flex gap-4 min-h-[150px]">
            <div className="flex-1 text-left ml-4 mt-2">
                <div className="flex justify-end gap-2 mt-2">
                    <button className="flex items-center gap-1 bg-red-400 text-white px-2 py-2 rounded-md hover:bg-orange-700 text-sm" onClick={onEdit}>
                        <SquarePen size={15} stroke="white" fill="none" />
                    </button>
                    <button className="flex items-center gap-1 bg-red-400 text-white px-3 py-1 rounded-md hover:bg-orange-700 text-sm" onClick={onDelete}>
                        <Trash2 size={15} />
                    </button>
                </div>
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