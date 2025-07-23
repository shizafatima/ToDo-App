import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from 'lucide-react';


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
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        if (newPassword && confirmPassword && newPassword === confirmPassword) {
            setPasswordError("");
        }
    }, [newPassword, confirmPassword]);

    useEffect(() => {
        if (userNameSuccess) {
            const timeout = setTimeout(() => {
                setUserNameSuccess("");
            }, 3000);
            return () => clearTimeout(timeout);
        }

        if (passwordSuccess) {
            const timeout = setTimeout(() => {
                setPasswordSuccess("");
            }, 3000);
            return () => clearTimeout(timeout);
        }


    }, [userNameSuccess, passwordSuccess]);


    const [user, setUser] = useState(() => {

        return JSON.parse(localStorage.getItem("userData")) || {};
    });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userData"));
        if (storedUser && storedUser.userName) {
            setUserName(storedUser.userName);
            // setUser(storedUser); // Optional: keep `user` state in sync
        }
    }, []);


    // update username 
    const handleUserNameChange = (e) => {
        e.preventDefault();
        // if (!newUserName.trim()) {
        //     setUserNameError("Username can not be empty.");
        //     return;
        // }
        const updatedUser = { ...user, userName: newUserName };
        localStorage.setItem("userData", JSON.stringify(updatedUser));
        // localStorage.setItem("username", newUserName);
        setUser(updatedUser)
        setUserName(newUserName);
        setNewUserName("");
        setUserNameSuccess("Username updated.");
        setUserNameError("");
    };




    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    const handlePasswordChange = (e) => {
        e.preventDefault();

        // if (!newPassword.trim() || !confirmPassword.trim()) {
        //     setPasswordError("Password fields cannot be empty.");
        //     setPasswordSuccess("");
        //     return;
        // }

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
        setConfirmPasswordError("");
        setPasswordSuccess("Password changed successfully.");
        setPasswordError("")
    }

    return (
        <div className="flex-1 bg-white text-black p-6">
            <h2 className="text-3xl font-bold flex items-center gap-2 text-black">Account Settings</h2>

            {/* Change username */}
            <form onSubmit={handleUserNameChange} className="space-y-2">
                <h3 className="text-xl font-semibold mt-4 mb-4 flex items-center gap-2 text-black underline underline-offset-2">Change Username</h3>

                <p className="text-sm text-gray-600 mb-1">
                    Current Username: <span className="font-medium text-black">{userName}</span>
                </p>
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
                    <p className="text-sm font-bold text-left text-green-600 ">{userNameSuccess}</p>
                )}
                <button className="bg-red-400 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={!newUserName.trim()}>
                    Update Username

                </button>
            </form>



            {/* Set New Password */}
            <form onSubmit={handlePasswordChange} className="space-y-2">
                <h3 className="text-xl font-semibold mt-4 mb-4 flex items-center gap-2 text-black underline underline-offset-2">Change Password</h3>

                <div className="relative">

                    <input
                        type={showNewPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full p-2 border rounded text-black" />

                    <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                        {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </span>
                </div>

                {passwordError && (
                    <p className="text-sm font-bold text-left text-red-600">{passwordError}</p>
                )}

                <div className="relative">

                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 border rounded text-black" />

                    <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </span>
                </div>

                {confirmPasswordError && (
                    <p className="text-sm font-bold text-left text-red-600">{confirmPasswordError}</p>
                )}
                {passwordSuccess && (
                    <p className="text-sm font-bold text-left text-green-600">{passwordSuccess}</p>
                )}
                <button className="bg-red-400 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={!newPassword.trim() || !confirmPassword.trim()}>
                    Change Password

                </button>
            </form>

        </div>
    )
}

export default AccountSettings