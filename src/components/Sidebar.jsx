import React, { useState } from "react";


const Sidebar = () => {
    const [user, setUser] = useState(() => {

        return JSON.parse(localStorage.getItem("userData")) || {};
    });

    const handleImageUpload = (e) => {
        const file = e.target.file[0];
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

    let avatarDisplay;
    if (user.avatar) {
        avatarDisplay = (
            <div className="relative mb-4">

                <img
                    src={user.avatar}
                    alt="user avatar"
                    className="w-20 h-20 rounded-full mb-4 border-4 border-white shadow-md object-cover" />

                <label htmlFor="avatarUpload">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-up-icon lucide-image-up"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"/><path d="m14 19.5 3-3 3 3"/><path d="M17 22v-5.5"/><circle cx="9" cy="9" r="2"/></svg>
                </label>
            </div>
        );
    } else {
        let initial = "U"
        if (user.userName) {
            initial = user.userName[0].toUpperCase();
        }

        avatarDisplay = (
            <div className="w-20 h-20 rounded-full bg-gray-400 text-white flex items-center justify-center text-3xl font-bold mb-4">
                {initial}
            </div>
        )
    }
    return (
        <div className="w-64 h-screen bg-[#ff6a6b] text-white flex flex-col items-center py-6 shadow-lg rounded-r-lg">
            {avatarDisplay}
            <p className="text-md font-medium mb-1 font-mono">
                {user.userName || "User"}
            </p>
            <p className="text-xs font-normal mt-0 font-sans">
                {user.email || "example@gmail.com"}
            </p>
            <div>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mb-6 text-sm"
                />
            </div>
            <div className="flex flex-col items-center mb-10">
                <img src="" alt="" />
            </div>

        </div>
    )
}
export default Sidebar