import React, { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const stored = localStorage.getItem("tasks");
        return stored ? JSON.parse(stored) : [];
    });

    // notifactions handling 

    const [notifications, setNotifications] = useState(() => {
        const stored = localStorage.getItem("notifications");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("notifications", JSON.stringify(notifications));
    }, [notifications]);

    const addNotification = (message) => {
        const id = Date.now();
        const timestamp = new Date();

        const formattedDate = timestamp.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
        const newNote = { id, message, formattedDate };
        setNotifications(prev => [newNote, ...prev.slice(0, 4)]);

        // setTimeout(() => {
        //     setNotifications((prev) => prev.filter((note) => note.id !== id))
        // }, 5000);
    };
    const [filteredTasks, setFilteredTasks] = useState(tasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        setFilteredTasks(tasks)
    }, [tasks]);


    const filterTasksByQuery = (query) => {
        if (!query.trim()) {
            setFilteredTasks(tasks);
        } else {
            const lower = query.toLowerCase();
            const result = tasks.filter(task =>
                task.title.toLowerCase().includes(lower) ||
                task.desc.toLowerCase().includes(lower)
            );
            setFilteredTasks(result);
        }
    };

    const addTask = (task) => {
        setTasks(prev => [...prev, task]);
    };

    const editTask = (id, updatedTask) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, ...updatedTask } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id))
    }


    return (
        <TaskContext.Provider value={{ tasks, setTasks, addTask, editTask, deleteTask, filteredTasks, filterTasksByQuery, notifications, addNotification }}>
            {children}
        </TaskContext.Provider>
    );
};

