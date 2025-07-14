import React from "react";
import { useTasks } from "./TaskContext";

function TaskStatus({status, color, label}) {
    const { tasks } = useTasks();

    const total = tasks.length;
    // const completed = tasks.filter(t => t.status === 'Completed').length;
      const count = tasks.filter(t => t.status === status).length;

    let percent;

    if (total === 0) {
        percent = 0;
    } else {
        percent = Math.round((count / total) * 100)
    }

    // const color = "green";
    // const label = " Completed";

    const ringColor = {
        green: "text-green-500",
        red: "text-red-500",
        blue: "text-blue-500",
    }[color];

    const circleLength = 138;
    const strokeOffset = circleLength - (percent / 100) * circleLength;
    return (
        <div className="flex flex-col flex-wrap items-center justify-center p-6 gap-4">
            <div className="relative w-full aspect-square max-w-sm">
                <svg className="w-full h-full" viewBox="0 0 56 56">
                    <circle
                        className="text-gray-200"
                        strokeWidth="5"
                        fill="transparent"
                        r="22"
                        cx="28"
                        cy="28"
                        stroke="currentColor"
                    />
                    {/* Foreground Progress */}
                    <circle
                        className={ringColor}
                        strokeWidth="5"
                        fill="transparent"
                        r="22"
                        cx="28"
                        cy="28"
                        stroke="currentColor"
                        strokeDasharray={circleLength}
                        strokeDashoffset={strokeOffset}
                        strokeLinecap="round"
                    />
                </svg>

                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-800"> {percent}%</span>

                <span className="mt-4 text-xl font-medium text-gray-700">{label}</span>
            </div>
        </div>
    )
}
export default TaskStatus;