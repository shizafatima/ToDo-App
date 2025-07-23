import React, { useEffect, useState, } from "react";
import { FileClock, FileCheck2, FileCheck, Plus } from 'lucide-react';
import TaskCard from "./TaskCard";
import TaskStatus from "./TaskStatus";
import { useTasks } from "./TaskContext";
import { useTaskMeta } from "./TaskMetaContext";
import Modal from "./Modal";

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

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setNewTask((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };



    const [isEditing, setIsEditing] = useState(false);
    const [editingTaskId, setEditingTaskId] = useState(null);


    const [user, setUser] = useState({});
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userData"));
        if (storedUser) {
            setUser(storedUser)
        }
    }, []);
    const { tasks, filteredTasks, addTask, editTask, deleteTask, addNotification } = useTasks();
    useEffect(() => {
        const today = new Date();
        tasks.forEach(task => {
            if (!task.date) return;

            const dueDate = new Date(task.date);
            const diffDays = Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));

            if (diffDays === 2) {
                addNotification(`Task "${task.title}" is due in 2 days`)
            }

        });
    }, [tasks])

    const statuses = [
        { status: "Completed", color: "green", label: "Completed" },
        { status: "In Progress", color: "blue", label: "In Progress" },
        { status: "Not Started", color: "red", label: "Not Started" },
    ];
    return (

        <div className="flex-1 bg-white text-black p-4 sm:p-6">

            {showModal && (
                <Modal
                    title={isEditing ? "Edit Task" : "Add New Task"}
                    newTask={newTask}
                    setNewTask={setNewTask}
                    onClose={() => {
                        setShowModal(false);
                        setIsEditing(false);
                        setEditingTaskId(null);
                    }}

                    onSubmit={() => {
                        if (!newTask.title || !newTask.desc) return;

                        if (isEditing) {
                            editTask(editingTaskId, newTask);
                            addNotification(`Task "${newTask.title}" was updated`)
                        } else {
                            const id = Date.now();
                            addTask({ id, ...newTask });
                            addNotification(`New Task "${newTask.title}" was added`)
                        }

                        setNewTask({
                            title: "",
                            desc: "",
                            priority: taskPriorities?.[1].label || "Low",
                            status: taskStatuses?.[0].label || "Not Started",
                            date: "",

                        });

                        setShowModal(false);
                        setIsEditing(false);
                        setEditingTaskId(null);
                    }}

                    isEditing={isEditing}
                    taskStatuses={taskStatuses}
                    taskPriorities={taskPriorities}

                />

            )}
            <div className="flex justify-between items-center px-6 mt-8">
                <h1 className="text-2xl sm:text-3xl text-left font-bold mb-4">Welcome Back, {user.firstName || "User"}</h1>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex justify-items-left gap-1 bg-transparent text-gray-500 px-2 py-2 rounded-md text-sm"
                >
                    <Plus size={15} className="text-orange-600" /> Add New Task
                </button>
            </div>
            <div className="border border-gray-400 h-full grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
                <div>
                    <h4 className="text-red-400 text-left ml-5 font-medium flex"><FileClock className="text-gray-400 mr-2" /> To Do</h4>
                    {filteredTasks
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
                                        setIsEditing(true);
                                        setEditingTaskId(task.id)
                                        setNewTask({
                                            title: task.title,
                                            desc: task.desc,
                                            priority: task.priority,
                                            status: task.status,
                                            date: task.date
                                        }); // preload the task in modal
                                        setShowModal(true);
                                    }}
                                    onDelete={() => deleteTask(task.id)}
                                />
                            </div>
                        ))}

                </div>

                <div className="flex flex-col gap-4">
                    <div>
                        <h2 className="text-left text-red-400 ml-5 font-medium flex"> <FileCheck2 className="text-gray-400 mr-2 " /> Task Status</h2>
                        <div className="flex flex-col xl:flex-row gap-4 justify-around mt-2 shadow-md rounded-xl m-2 p-6">

                            {statuses.map((s, i) => (
                                <TaskStatus key={i} {...s} />
                            ))}
                        </div>
                    </div>


                    {/* completed task */}
                    <div >
                        <h4 className="text-left text-red-400 ml-5 font-medium flex"><FileCheck className="text-gray-400 mr-2" />Completed Tasks</h4>
                        {filteredTasks
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
                                            setIsEditing(true);
                                            setEditingTaskId(task.id);
                                            setNewTask({
                                                title: task.title,
                                                desc: task.desc,
                                                priority: task.priority,
                                                status: task.status,
                                                date: task.date,
                                            });
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