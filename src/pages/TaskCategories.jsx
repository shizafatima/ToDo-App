import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import { SquarePen, Trash2, Plus } from 'lucide-react';

function TaskCategories() {
    const [taskStatuses, setTaskStatuses] = useState([
        { id: 1, label: "Completed" },
        { id: 2, label: "In Progress" },
        { id: 3, label: "Not Started" },
    ]);

    const [taskPriorities, setTaskPriorities] = useState([
        { id: 1, label: "Extreme" },
        { id: 2, label: "Moderate" },
        { id: 3, label: "Low" },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [inputValue, setInputValue] = useState("")


    // Task Status Handling 
    const handleAddStatus = () => {
        setModalType("add-status");
        setInputValue("");
        setEditingId(null);
        setIsModalOpen(true);
    };

    const handleEditStatus = (id) => {
        const item = taskStatuses.find(item => item.id === id);
        if (!item) return;
        setModalType("edit-status");
        setInputValue(item.label);
        setEditingId(id);
        setIsModalOpen(true);
    }

    const handleDeleteStatus = (id) => {
        setTaskStatuses(prev => prev.filter(item => item.id !== id));
    };

    // Task Priority Handling 

    const handleAddPriority = () => {
        setModalType("add-priority");
        setInputValue("");
        setEditingId(null);
        setIsModalOpen(true);
    };

    const handleEditPriority = (id) => {
        const item = taskPriorities.find(item => item.id === id);
        if (!item) return;
        setModalType("edit-priority");
        setInputValue(item.label);
        setEditingId(id);
        setIsModalOpen(true);
    };

    const handleDeletePriority = (id) => {
        setTaskPriorities(prev => prev.filter(item => item.id !== id));
    };


    // modal submission handling 
    const handleModalSubmit = () => {
        if (!inputValue.trim()) return;

        if (modalType === "add-status") {
            const newItem = { id: Date.now(), label: inputValue };
            setTaskStatuses(prev => [...prev, newItem]);
        } else if (modalType === "edit-status") {
            setTaskStatuses(prev =>
                prev.map(item => item.id === editingId ? { ...item, label: inputValue } : item)
            )
        } else if (modalType === "add-priority") {
            const newItem = { id: Date.now(), label: inputValue };
            setTaskPriorities(prev => [...prev, newItem]);
        } else if (modalType === "edit-priority") {
            setTaskPriorities(prev =>
                prev.map(item => item.id === editingId ? { ...item, label: inputValue } : item)
            )
        };

        setIsModalOpen(false);
        setModalType("");
        setEditingId(null);
        setInputValue("");
    };

    // {
    //     isModalOpen && (
    //         <Modal
    //             title={`${modalType.includes("add") ? "Add" : "Edit"} ${modalType.includes("status") ? "Task Status" : "Task Priority"}`}
    //             inputValue={inputValue}
    //             setInputValue={setInputValue}
    //             onClose={() => setIsModalOpen(false)}
    //             onSubmit={handleModalSubmit}
    //         />
    //     )
    // }
    return (
        <div className="h-screen flex flex-col text-white w-full">
            <div className="max-w-screen-xl w-full">
                <Header />

            </div>


            {/* Main content area */}
            <div className="flex flex-1 min-h-0 overflow-hidden">
                <Sidebar />

                <div className="flex-1 p-4">
                    {/* Your page content here */}
                    {
                        isModalOpen && (
                            <Modal
                                title={`${modalType.includes("add") ? "Add" : "Edit"} ${modalType.includes("status") ? "Task Status" : "Task Priority"}`}
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                                onClose={() => setIsModalOpen(false)}
                                onSubmit={handleModalSubmit}
                            />
                        )
                    }
                    <div className="border border-gray-100 h-full shadow-lg shadow-gray-400 rounded-xl">
                        <div className="text-left">
                            <h2 className="text-black ml-6 mt-4 font-semibold text-2xl"> <span className="w-1/2 h-5 underline decoration-orange-600 decoration-2 underline-offset-8">Task </span>Categories</h2>
                            <button className="bg-orange-600 text-white ml-6 mt-4 px-2 py-1 rounded-md">Add Category</button>
                        </div>
                        <div>
                            <div className="flex justify-between items-center px-6 mt-8">
                                <h3 className="text-black font-medium text-sm text-left text-md">
                                    <span className="underline decoration-orange-600 decoration-2 underline-offset-8">Task</span> Status
                                </h3>
                                <button className="flex justify-items-left gap-1 bg-transparent text-gray-500 px-2 py-2 rounded-md text-sm" onClick={() => handleEditStatus(item.id)}>
                                    <Plus size={15} stroke="orange" fill="none" /> Add Task Status
                                </button>

                            </div>
                            <div className="rounded-2xl overflow-hidden border border-gray-300 m-5">


                                <table className="text-black ">
                                    <colgroup>
                                        <col className="w-auto" />
                                        <col className="w-1/2" />
                                        <col className="w-1/2" />
                                    </colgroup>
                                    <thead className="w-full">
                                        <tr className="w-full">
                                            <th className="px-4 py-4 border-b text-center border-r">SN</th>
                                            <th className="px-4 py-4 border-b text-center border-r">Task Status</th>
                                            <th className="px-4 py-4 border-b text-center border-r">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {taskStatuses.map((item, index) => (
                                            <tr key={item.id}>
                                                <td className="px-4 py-4 border-b-none text-center border-r">{index + 1}</td>
                                                <td className="px-4 py-4 border-b-none text-center border-r">{item.label}</td>
                                                <td className="px-4 py-3 border-b-none">
                                                    <div className="flex gap-2 justify-center">
                                                        <button className="flex items-center gap-1 bg-orange-600 text-white px-2 py-2 rounded-md hover:bg-orange-700 text-sm" onClick={() => handleEditStatus(item.id)}>
                                                            <SquarePen size={15} stroke="white" fill="none" /> Edit
                                                        </button>
                                                        <button className="flex items-center gap-1 bg-orange-600 text-white px-3 py-1 rounded-md hover:bg-orange-700 text-sm" onClick={() => handleDeleteStatus(item.id)}>
                                                            <Trash2 size={15} /> Delete
                                                        </button>
                                                    </div>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* second table */}
                        <div>
                            <div className="flex justify-between items-center px-6 mt-8">
                                <h3 className="text-black font-medium text-sm text-left text-md">
                                    <span className="underline decoration-orange-600 decoration-2 underline-offset-8">Task</span> Priority
                                </h3>
                                <button className="flex justify-items-left gap-1 bg-transparent text-gray-500 px-2 py-2 rounded-md text-sm" onClick={() => handleEditStatus(item.id)}>
                                    <Plus size={15} stroke="orange" fill="none" /> Add Task Priority
                                </button>

                            </div>

                            <div className="rounded-2xl overflow-hidden border border-gray-300 m-5">


                                <table className="text-black ">
                                    <colgroup>
                                        <col className="w-auto" />
                                        <col className="w-1/2" />
                                        <col className="w-1/2" />
                                    </colgroup>
                                    <thead className="w-full">
                                        <tr className="w-full">
                                            <th className="px-4 py-4 border-b text-center border-r">SN</th>
                                            <th className="px-4 py-4 border-b text-center border-r">Task Priority</th>
                                            <th className="px-4 py-4 border-b text-center border-r">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {taskPriorities.map((item, index) => (


                                            <tr key={item.id}>
                                                <td className="px-4 py-4 border-b-none text-center border-r">{index + 1}</td>
                                                <td className="px-4 py-4 border-b-none text-center border-r">{item.label}</td>
                                                <td className="px-4 py-3 border-b-none">
                                                    <div className="flex gap-2 justify-center">
                                                        <button className="flex items-center gap-1 bg-orange-600 text-white px-2 py-2 rounded-md hover:bg-orange-700 text-sm" onClick={() => handleEditPriority(item.id)}>
                                                            <SquarePen size={15} stroke="white" fill="none" /> Edit
                                                        </button>
                                                        <button className="flex items-center gap-1 bg-orange-600 text-white px-3 py-1 rounded-md hover:bg-orange-700 text-sm" onClick={() => handleDeletePriority(item.id)}>
                                                            <Trash2 size={15} /> Delete
                                                        </button>
                                                    </div>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </div>
    );
}
export default TaskCategories