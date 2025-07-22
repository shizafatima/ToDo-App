import { div, p } from "framer-motion/client";
import React, { useState, useEffect } from "react";


function AccountSettings() {
    const [userName, setUserName] = useState("");
    const [newUserName, setNewUserName] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userNameSuccess, setUserNameSuccess] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [passwordSuccess, setPasswordSuccess] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    useEffect(() => {
        const savedUsername = localStorage.getItem("username") || "User";
        setUserName(savedUsername);
    }, []);

    // update username 
    const handleUserNameChange = (e) => {
        e.preventDefault();
        if (!newUserName.trim()) {
            setUserNameError("Username can not be empty.");
            return;
        }
        localStorage.setItem("username", newUserName);
        setUserName(newUserName);
        setNewUserName("");
        setUserNameSuccess("Username updated.");
        setUserNameError("");
    };


    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    const handlePasswordChange = (e) => {
        e.preventDefault();

        if (!passwordRegEx.test(newPassword)) {
            setPasswordError("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
            setPasswordSuccess("");
            return;
        }

        if (newPassword !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            setPasswordSuccess("");
            return;
        }
        console.log("New Password:", newPassword);
        setNewPassword("");
        setConfirmPassword("");
        
        setPasswordSuccess("Password changed successfully.");
        setPasswordError("")
    }

    return (
        <div className="flex-1 bg-white text-black p-6">
            <h2 className="text-3xl font-bold flex items-center gap-2 text-black">Account Settings</h2>

            {/* Change username */}
            <form onSubmit={handleUserNameChange} className="space-y-2">
                <h3 className="text-xl font-semibold mt-4 mb-4 flex items-center gap-2 text-black underline underline-offset-2">Change Username</h3>

                <input
                    type="text"
                    placeholder="Enter new username"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    className="w-full p-2 border rounded text-black" />

                {userNameError && (
                    <p className="text-sm font-bold text-left text-red-600">{userNameError}</p>
                )}
                {userNameSuccess && (
                    <p className="text-sm font-bold text-left text-green-600">{userNameSuccess}</p>
                )}
                <button onClick={handleUserNameChange} className="bg-red-400 text-white px-4 py-2 rounded">
                    Update Username

                </button>
            </form>



            {/* Set New Password */}
            <form onSubmit={handlePasswordChange} className="space-y-2">
                <h3 className="text-xl font-semibold mt-4 mb-4 flex items-center gap-2 text-black underline underline-offset-2">Change Password</h3>

                <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full p-2 border rounded text-black" />
                {passwordError && (
                    <p className="text-sm font-bold text-left text-red-600">{passwordError}</p>
                )}
                {passwordSuccess && (
                    <p className="text-sm font-bold text-left text-green-600">{passwordSuccess}</p>
                )}

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={newPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-2 border rounded text-black" />

                {passwordError && (
                    <p className="text-sm font-bold text-left text-red-600">{passwordError}</p>
                )}
                {passwordSuccess && (
                    <p className="text-sm font-bold text-left text-green-600">{passwordSuccess}</p>
                )}
                <button onClick={handlePasswordChange} className="bg-red-400 text-white px-4 py-2 rounded">
                    Change Password

                </button>
            </form>

        </div>
    )
}

export default AccountSettings