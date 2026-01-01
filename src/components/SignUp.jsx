import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormdata] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agree: false
    });


    const handleChange = (e) => {
        const name = e.target.name;
        let value;

        if (e.target.type === 'checkbox') {
            value = e.target.checked;
        } else {
            value = e.target.value;
        }

        setFormdata({
            ...formData,
            [name]: value,
        });

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [errors, setErrors] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log((formData));

        const newErrors = {};
        const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

        if (!formData.firstName.trim()) {
            newErrors.firstName = "*First name is required";

        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "*Last name is required";

        }

        if (!formData.userName.trim()) {
            newErrors.userName = "*Username is Required"

        }

        if (!emailRegEx.test(formData.email)) {
            newErrors.email = "*Please enter valid Email Address"

        }

        if (!passwordRegEx.test(formData.password)) {
            newErrors.password = "*Password must be at least 8 characters and include uppercase, lowercase, number, and special character."

        }
        if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "*Passwords do not match."

        }
        if (!formData.agree) {
            newErrors.agree = "*You must agree to the terms."

        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        localStorage.setItem("userData", JSON.stringify(formData));
        alert("Registered successfully");
        navigate("/signin")
    };

    return (
        <div className="signup-container bg-auth min-h-screen flex items-center justify-center">
            {/* Outer white card with two sides */}
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg max-w-xl w-full mx-2 md:mx-0 my-6 overflow-hidden px-4 md:px-0">


                {/* Left Side - Image */}
                <div className="image-side w-1/2 hidden md:flex justify-left items-center">
                    <img
                        src="/assets/signup-illustration.png"
                        alt="signup illustration"
                        className="w-[80%] h-[90%]"
                    />
                </div>

                {/* Right Side - Form*/}
                <div className="right-signup w-full md:w-1/2 pr-5 pl-5 md:pl-1 py-6">
                    <h2 className="text-black font-bold flex justify-center py-2 mb-4 text-3xl">Sign Up</h2>

                    {/* Add form here */}
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="flex items-center relative w-full mb-2 outline-none h-10 ">
                            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-6 h-6 pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z" clip-rule="evenodd" />
                            </svg>


                            <input
                                type="text"
                                name="firstName"
                                placeholder="Enter First Name"
                                onChange={handleChange}
                                required
                                className="w-full h-10 p-2 pl-9 md:pl-11 text-black border border-gray-400 rounded-lg mb-3 self-baseline"
                            />
                        </div>
                        {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1 text-left w-full">{errors.firstName}</p>
                        )}



                        <div className="flex items-center relative w-full mb-2 outline-none h-10 ">
                            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-6 h-6 pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z" />
                            </svg>


                            <input
                                type="text"
                                name="lastName"
                                placeholder="Enter Last Name"
                                onChange={handleChange}
                                className="w-full h-10 p-2 pl-9 md:pl-11 text-black border border-gray-400 rounded-lg mb-3 self-baseline"
                            />
                        </div>
                        {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1 text-left w-full">{errors.lastName}</p>
                        )}

                        <div className="flex items-center relative w-full mb-2 outline-none h-10 ">
                            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-6 h-6 pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd" />
                            </svg>

                            <input
                                type="text"
                                name="userName"
                                placeholder="Enter User Name"
                                onChange={handleChange}
                                className="w-full h-10 p-2 pl-9 md:pl-11 text-black border border-gray-400 rounded-lg mb-3 self-baseline"
                            />
                        </div>
                        {errors.userName && (
                            <p className="text-red-500 text-sm mt-1 text-left w-full">{errors.userName}</p>
                        )}


                        <div className="flex items-center relative w-full mb-2 outline-none h-10 ">

                            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5 pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                                <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                            </svg>



                            <input
                                type="text"
                                name="email"
                                placeholder="Enter Email"
                                onChange={handleChange}
                                className="w-full h-10 p-2 pl-9 md:pl-11 text-black border border-gray-400 rounded-lg mb-3 self-baseline"
                            />
                        </div>
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1 text-left w-full">{errors.email}</p>
                        )}

                        <div className="flex items-center relative w-full mb-2 outline-none h-10">
                            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-6 h-6 pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd" />
                            </svg>

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter Password"
                                onChange={handleChange}
                                value={formData.password}
                                className="w-full h-10 p-2 pl-9 md:pl-11 text-black border border-gray-400 rounded-lg mb-3 self-baseline"
                            />

                            <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </span>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1 text-left w-full">{errors.password}</p>
                        )}

                        <div className="flex items-center relative w-full mb-2 outline-none h-10">
                            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-6 h-6 pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
                            </svg>

                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Enter Confirm Password"
                                onChange={handleChange}
                                value={formData.confirmPassword}
                                className="w-full h-10 p-2 pl-9 md:pl-11 text-black border border-gray-400 rounded-lg mb-3 self-baseline"
                            />

                            <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </span>

                        </div>
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1 text-left w-full">{errors.confirmPassword}</p>
                        )}

                        <div className="flex items-center mb-2 pl-2">
                            <input
                                type="checkbox"
                                name="agree"
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <label className="text-black">I agree to all terms</label>

                        </div>
                        {errors.agree && (
                            <p className="text-red-500 text-sm mt-1 text-left w-full">{errors.agree}</p>
                        )}

                        <button type="submit" className="bg-red-400 text-white py-2 px-2 ml-2 rounded-md hover:bg-red-500 flex justify-start">
                            Register

                        </button>
                        <p className="text-sm mt-2 ml-2 text-center text-black flex justify-start">
                            Already have an account?{" "}
                            <span
                                className="text-blue-600 cursor-pointer ml-1"
                                onClick={() => navigate("/signin")}>
                                Sign In
                            </span>
                        </p>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default SignUp;
