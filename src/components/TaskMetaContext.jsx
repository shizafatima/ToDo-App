import React, { createContext, useContext, useState } from "react";

const TaskMetaContext = createContext();

export const TaskMetaProvider = ({ children }) => {
    const [taskStatuses, setTaskStatuses] = useState([
        { id: 1, label: "Not Started", color: "red" },
        { id: 2, label: "In Progress", color: "blue" },
        { id: 3, label: "Completed", color: "green" },
    ], []);

    const [taskPriorities, setTaskPriorities] = useState([
        { id: 1, label: "Extreme", color: "red" },
        { id: 2, label: "Moderate", color: "blue" },
        { id: 3, label: "Low", color: "Green" },

    ], []);


    return (
        <TaskMetaContext.Provider
            value={{ taskStatuses, setTaskStatuses, taskPriorities, setTaskPriorities }}>{children}</TaskMetaContext.Provider>
    );
};

export const useTaskMeta = () => useContext(TaskMetaContext)