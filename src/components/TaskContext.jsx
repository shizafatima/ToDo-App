
import React, { createContext, useContext, useState } from "react";


const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);


    const addTask = (tasks) => {
        setTasks(prev => [...prev, tasks]);
    };


    return (
        <TaskContext.Provider value={{ tasks, setTasks, addTask }}>
            {children}
        </TaskContext.Provider>
    )
}
