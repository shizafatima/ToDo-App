import React, { useEffect, useState, useRef } from "react";
import { FileClock, FileCheck2, FileCheck, Plus } from 'lucide-react';
import TaskCard from "./TaskCard";
import TaskStatus from "./TaskStatus";
import { useTasks } from "./TaskContext";
import { useTaskMeta } from "./TaskMetaContext";

function DashboardContent() {

    const [showModal, setShowModal] = useState(false);
    const { taskStatuses, taskPriorities } = useTaskMeta();

    const [newTask, setNewTask] = useState({
        title: "",
        desc: "",
        priority: taskPriorities?.[1]?.label || "Low", // default
        status: taskStatuses?.[0]?.label || "Not Started", // default
        date: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prev) => ({
            ...prev,
            [name]: value,
        }));
    };



    const [user, setUser] = useState({});
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userData"));
        if (storedUser) {
            setUser(storedUser)
        }
    })
    const { tasks, addTask, editTask, deleteTask } = useTasks();

    const statuses = [
        { status: "Completed", color: "green", label: "Completed" },
        { status: "In Progress", color: "blue", label: "In Progress" },
        { status: "Not Started", color: "red", label: "Not Started" },
    ];
    return (

        <div className="flex-1 bg-white text-black p-6">
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg relative">
                        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <input
                                type="text"
                                name="title"
                                value={newTask.title}
                                onChange={handleInputChange}
                                placeholder="Title"
                                className="border p-2 rounded" />

                            <input
                                type="text"
                                name="desc"
                                value={newTask.desc}
                                onChange={handleInputChange}
                                placeholder="Add description.."
                                className="border p-2 rounded" />

                            <input
                                type="text"
                                name="date"
                                value={newTask.date}
                                onChange={handleInputChange}
                                placeholder="add date"
                                className="border p-2 rounded" />
                            <select
                                name="status"
                                value={newTask.status}
                                onChange={handleInputChange}
                                className="border p-2 rounded"
                            >
                                {taskStatuses.map((item) => (
                                    <option key={item.id} value={item.label}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>
                            <select
                                name="priority"
                                value={newTask.priority}
                                onChange={handleInputChange}
                                className="border p-2 rounded"
                            >
                                {taskPriorities.map((item) => (
                                    <option key={item.id} value={item.label}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>

                            <div className="flex justify-end gap-2 mt-2">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-3 py-1 bg-gray-400 text-black rounded-md hover:bg-gray-300">Cancel</button>
                                    
                                <button
                                    onClick={() => {
                                        if (!newTask.title || !newTask.desc) return;
                                        const id = Date.now();
                                        addTask({ id, ...newTask });
                                        setNewTask({ title: "", desc: "", priority: "Moderate", status: "Not Started", date: "" });
                                        setShowModal(false);
                                    }}
                                    className="px-3 py-1 bg-orange-600 rounded-md hover:bg-orange-700">
                                    Add Task

                                </button>
                            </div>



                        </div>
                    </div>
                </div>
            )}
            <div className="flex justify-between items-center px-6 mt-8">
                <h1 className="text-3xl text-left font-bold mb-4">Welcome Back, {user.firstName || "User"}</h1>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex justify-items-left gap-1 bg-transparent text-gray-500 px-2 py-2 rounded-md text-sm"
                >
                    <Plus size={15} className="text-orange-600" /> Add New Task
                </button>
            </div>
            <div className="border border-gray-400 h-full grid grid-cols-2 gap-4 p-4">
                <div>
                    <h4 className="text-red-400 text-left ml-5 font-medium flex"><FileClock className="text-gray-400 mr-2" /> To Do</h4>
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
                                    onEdit={() => {
                                        setNewTask(task); // preload the task in modal
                                        setShowModal(true);
                                    }}
                                    onDelete={() => deleteTask(task.id)}
                                />
                            </div>
                        ))}

                </div>

                <div className="flex flex-col gap-4">
                    <div>
                        <h2 className="text-left text-red-400 ml-5 font-medium flex"> <FileCheck2 className="text-gray-400 mr-2" /> Task Status</h2>
                        <div className="flex gap-1 justify-start mt-2 shadow-md rounded-lg m-5 p-5">

                            {statuses.map((s, i) => (
                                <TaskStatus key={i} {...s} />
                            ))}
                        </div>
                    </div>


                    {/* completed task */}
                    <div >
                        <h4 className="text-left text-red-400 ml-5 font-medium flex"><FileCheck className="text-gray-400 mr-2" />Completed Tasks</h4>
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
                                        onEdit={() => {
                                            setNewTask(task); // preload the task in modal
                                            setShowModal(true);
                                        }}
                                        onDelete={() => deleteTask(task.id)}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default DashboardContent;