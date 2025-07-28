import React, { useState } from "react";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
    const navigate = useNavigate()
    const [formData, setFormdata] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem("userData")) || {};
        return {
            userName: savedData.userName || "",
            password: "",
        };
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({ ...prev, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const savedUser = JSON.parse(localStorage.getItem("userData")) || {};

        if (
            formData.userName === savedUser.userName &&
            formData.password === savedUser.password
        ) {
            alert("Login Successfully")
            navigate('/dashboard')
        } else {
            alert("Invalid Username or Password")
        }


    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="signin-container bg-auth min-h-screen flex items-center justify-center">
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg max-w-4xl w-full">

                <div className="right-signup w-full md:w-1/2 p-10 ">
                    <h2 className="text-black font-bold flex justify-start py-2 mb-5 text-4xl">Sign In</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center relative w-full mb-3  mr-2 outline-none h-10 ">
                            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-6 h-6 pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd" />
                            </svg>

                            <input
                                type="text"
                                name="userName"
                                placeholder="Enter User Name"
                                onChange={handleChange}
                                value={formData.userName}
                                className="w-full h-10 p-2 pl-11 text-black border border-gray-400 rounded-lg mb-3 self-baseline"
                            />
                        </div>

                        <div className="flex items-center relative w-full mb-3  mr-2 outline-none h-10 ">
                            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-6 h-6 pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd" />
                            </svg>

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter Password"
                                onChange={handleChange}
                                value={formData.password}
                                className="w-full h-10 p-2 pl-11 pr-10 text-black border border-gray-400 rounded-lg mb-3 self-baseline"
                            />

                            <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </span>
                        </div>
                        <button type="submit" className="bg-red-400 text-white py-3 px-4 rounder hover:bg-red-500 flex justify-start">
                            Sign In

                        </button>
                        <p className="text-sm mt-4 text-center text-black flex justify-start">
                            Don't have an account?{" "}
                            <span
                                className="text-blue-600 cursor-pointer ml-1"
                                onClick={() => navigate("/signup")}>
                                Create One
                            </span>

                        </p>
                    </form>
                </div>

                <div className="image-side w-1/2 hidden md:flex justify-right items-center">
                    <img
                        src="/assets/signin-illustration.jpg"
                        alt="signin-illustration"
                        className="w-[80%] h-[90%]"
                    />
                </div>

            </div>
        </div>
    )
};

export default SignIn;