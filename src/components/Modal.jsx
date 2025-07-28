import React from "react";

function Modal({ title, buttonLabel, inputValue, setInputValue, onClose, onSubmit, newTask, setNewTask, isEditing, taskPriorities = [], taskStatuses = [], mode = "task" }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (mode === "task") {
            setNewTask((prev) => ({ ...prev, [name]: value }));
        } else {
            setInputValue(value)
        }
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">{title ? title : (isEditing ? "Edit Task" : "Add Task")}</h2>
                {mode === "task" ? (
                    <>
                        <input
                            type="text"
                            name="title"
                            className="w-full border px-3 py-2 rounded mb-3"
                            value={newTask.title}
                            onChange={handleChange}
                            placeholder="Enter title" />


                        <input
                            type="text"
                            name="desc"
                            className="w-full border px-3 py-2 rounded mb-3"
                            value={newTask.desc}
                            onChange={handleChange}
                            placeholder="Enter description" />


                        <input
                            type="text"
                            name="date"
                            className="w-full border px-3 py-2 rounded mb-3"
                            value={newTask.date}
                            onChange={handleChange}
                            placeholder="Enter date" />

                        <select

                            name="status"
                            className="w-full border px-3 py-4 rounded mb-3"
                            value={newTask.status}
                            onChange={handleChange}
                        >
                            {taskStatuses.map((item) => (
                                <option key={item.id} value={item.label}>{item.label}</option>
                            ))}
                        </select>

                        <select
                            name="priority"
                            className="w-full border px-3 py-2 rounded mb-3"
                            value={newTask.priority}
                            onChange={handleChange}
                        >
                            {taskPriorities.map((item) => (
                                <option key={item.id} value={item.label}>{item.label}</option>
                            ))}
                        </select>

                    </>
                ) : (
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded mb-3 text-black"
                        placeholder="Enter value"
                    />
                )}

                <div className="flex justify-end gap-2">
                    <button className="px-3 py-1 bg-gray-400 text-black rounded-md hover:bg-gray-300"
                        onClick={onClose}>
                        Cancel
                    </button>
                    <button className="px-3 py-1 bg-orange-600 rounded-md hover:bg-orange-700"
                        onClick={onSubmit}>
                        {buttonLabel ? buttonLabel : (isEditing ? "Update Task" : "Add Task")}
                    </button>
                </div>
            </div>
        </div>

    )
}
export default Modal;