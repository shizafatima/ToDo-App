import React from "react";

function Modal({title, inputValue, setInputValue, onClose, onSubmit}){
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Add Task</h2>
                <input 
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4 text-black"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your task here...." />

                <div className="flex justify-end gap-2">
                    <button className="px-3 py-1 bg-gray-400 text-black rounded-md hover:bg-gray-300"
                    onClick={onClose}>
                        Cancel
                    </button>
                    <button className="px-3 py-1 bg-orange-600 rounded-md hover:bg-orange-700"
                    onClick={onSubmit}>
                        Save
                    </button>
                </div>
            </div>
        </div>

    )
}
export default Modal;