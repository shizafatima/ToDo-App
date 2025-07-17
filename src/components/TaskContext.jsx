import React, { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const stored = localStorage.getItem("tasks");
        return stored ? JSON.parse(stored) : [];
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks(prev => [...prev, task]);
    };

    const editTask = (updatedTask) => {
        setTasks(prev => 
            prev.map (task => 
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id))
    }

    return (
        <TaskContext.Provider value={{ tasks, setTasks, addTask, editTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

