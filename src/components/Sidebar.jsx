import React, { useState } from "react";
import { ImagePlus, Trash2, LayoutDashboard, ClipboardCheck, ClipboardList, LayoutList, Settings, CircleQuestionMark, LogOut } from 'lucide-react';
import { NavLink } from "react-router-dom";


const Sidebar = () => {
    const [user, setUser] = useState(() => {

        return JSON.parse(localStorage.getItem("userData")) || {};
    });

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const updatedUser = { ...user, avatar: reader.result }
            setUser(updatedUser)
            localStorage.setItem("userData", JSON.stringify(updatedUser))
        }
        if (file) {
            reader.readAsDataURL(file)
        };
    };

    const triggerFileInput = () => {
        document.getElementById("avatarUpload").click();
    };
    let avatarDisplay;
    if (user.avatar) {
        avatarDisplay = (
            <div className="relative mb-1 mt-0 group flex flex-col items-center">


                <div
                    className="relative cursor-pointer"
                    onClick={triggerFileInput}
                    title="Remove or Replace Image">

                    <img
                        src={user.avatar}
                        alt="user avatar"
                        className="w-[105px] h-[105px] rounded-full mb-4  shadow-md object-cover" />

                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity mb-4">
                        <span className="text-xs text-white text-center px-2">
                            Replace Image
                        </span>
                        <Trash2
                            onClick={(e) => {
                                e.stopPropagation(); // ✅ Prevent file input trigger
                                const updatedUser = { ...user, avatar: null };
                                setUser(updatedUser);
                                localStorage.setItem("userData", JSON.stringify(updatedUser));
                            }}
                            className="w-4 h-4 mt-1 text-white hover:text-white cursor-pointer"
                        />
                    </div>


                </div>
            </div>
        );
    } else {
        let initial = "U"
        if (user.userName) {
            initial = user.userName[0].toUpperCase();

        }

        avatarDisplay = (
            <div
                onClick={triggerFileInput}
                className="w-20 h-20 rounded-full bg-gray-400 text-white flex flex-col items-center justify-center mb-4 cursor-pointer group"
                title="Upload Avatar"
            >
                <span className="text-3xl font-bold leading-none">
                    {initial}
                </span>
                <ImagePlus className="w-5 h-5 mt-1 text-white opacity-80 group-hover:opacity-100 hidden" />
                <div className="absolute bottom-0 translate-y-full text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    Upload Image
                </div>

            </div>
        );
    }
    return (
        <div className="w-64 h-full bg-[#ff6a6b] text-white flex flex-col py-6 shadow-lg rounded-r-lg">
            <div className="flex flex-col items-center mb-6">

                {avatarDisplay}
                <p className="text-sm font-medium mb-1 font-mono">
                    {/* {user.userName || "User"} */}
                    {user.firstName || "Firstname"}
                    {user.lastName || "LastName"}
                </p>
                <p className="text-xs font-normal mt-0 font-sans underline decoration-solid ">
                    {user.email || "example@gmail.com"}
                </p>
                <div>
                    <input
                        type="file"
                        accept="image/*"
                        id="avatarUpload"
                        onChange={handleImageUpload}
                        className="mb-6 text-sm hidden"
                    />
                </div>
            </div>


            <nav className="flex flex-col gap-2 px-4 text-left flex-1">

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center gap-2 p-2 m-2 rounded-lg font-medium ${isActive
                            ? "bg-white text-[#ff6a6b]"
                            : "hover:bg-red-300 text-white"
                        }`}
                >
                    <LayoutDashboard />
                    <span>Dashboard</span>
                </NavLink>


                <NavLink
                    to="/vital-task"
                    className={({ isActive }) =>
                        `flex items-center gap-2 p-2 m-2 rounded-lg font-medium ${isActive
                            ? "bg-white text-[#ff6a6b]"
                            : "hover:bg-red-300 text-white"
                        }`}>
                    <ClipboardList />
                    <span>Vital Task</span>

                </NavLink>

                <NavLink
                    to="/my-task"
                    className={({ isActive }) =>
                        `flex items-center gap-2 p-2 m-2 rounded-lg font-medium ${isActive
                            ? "bg-white text-[#ff6a6b]"
                            : "hover:bg-red-300 text-white"
                        }`}>
                    <ClipboardCheck />
                    <span>My Task</span>

                </NavLink>


                <NavLink
                    to="/task-categories"
                    className={({ isActive }) =>
                        `flex items-center gap-2 p-2 m-2 rounded-lg font-medium ${isActive
                            ? "bg-white text-[#ff6a6b]"
                            : "hover:bg-red-300 text-white"
                        }`}>

                    <LayoutList />
                    <span>Task Categories</span>
                </NavLink>

                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `flex items-center gap-2 p-2 m-2 rounded-lg font-medium ${isActive
                            ? "bg-white text-[#ff6a6b]"
                            : "hover:bg-red-300 text-white"
                        }`}>
                    <Settings />
                    <span>Settings</span>
                </NavLink>

                <NavLink
                    to="/help"
                    className={({ isActive }) =>
                        `flex items-center gap-2 p-2 m-2 rounded-lg font-medium ${isActive
                            ? "bg-white text-[#ff6a6b]"
                            : "hover:bg-red-300 text-white"
                        }`}>
                    <CircleQuestionMark />
                    <span>Help</span>

                </NavLink>

            </nav>
            <div className="px-4 mt-auto">

                <NavLink
                    to="/signin"
                    className={({ isActive }) =>
                        `flex items-center align-bottom gap-2 p-2 m-2 rounded-lg font-medium ${isActive
                            ? "bg-white text-[#ff6a6b]"
                            : "hover:bg-red-300 text-white"
                        }`}>

                    <LogOut />
                    <span>Logout</span>
                </NavLink>
            </div>

        </div>
    )
}
export default Sidebar