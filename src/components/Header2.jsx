import React, { useState, useEffect } from "react";
import { Bell, CalendarDays, Search, Menu } from 'lucide-react';
import { useTasks } from "./TaskContext";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Header = ({onMenuClick}) => {

    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const now = new Date();
        const day = now.toLocaleDateString("en-US", { weekday: "long" }); // e.g., Monday
        const date = now.toLocaleDateString("en-GB"); // e.g., 21/07/2025
        setCurrentDate({ day, date });
    }, []);

    const [calendarOpen, setCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());


    const [searchQuery, setSearchQuery] = useState("");
    // const { filterTasksByQuery } = useTasks();


    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        filterTasksByQuery(query);
    };

    const handleSearchClick = () => {
        filterTasksByQuery(searchQuery);
    }


    // notification handling
    const [showNotifications, setShowNotifications] = useState(false);
    const { notifications } = useTasks();
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 bg-white shadow w-screen items-baseline">
            {/* logo */}
            <div className="flex items-center gap-1 text-2xl font-bold">
            <button 
            onClick={onMenuClick}
            className="px-1 py-3 text-red-400 rounded-r-lg bg-transparent  xl:hidden ">
                <Menu size={24} />
            </button>
                <span className="text-red-400 ">To</span>
                <span className="text-black ">Do</span>
            </div>

            {/*search bar*/}
            <div className="md:flex items-center rounded-l-lg max-w-3xl mx-auto">
                <input
                    type="text"
                    placeholder="Search your task here..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="flex-grow px-4 py-2 rounded-l-lg bg-transparent focus:outline-none shadow-md text-black" />


                <button
                    onClick={handleSearchClick}
                    className="bg-red-400 px-2 py-4 text-white rounded-r-lg mb-2 shadow-md hover:bg-red-500">
                    <Search size={18} />
                </button>
            </div>
            {/* icons and date */}
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end w-full md:w-auto">
                <button
                    onClick={() => setShowNotifications(prev => !prev)}
                    className="bg-red-400 p-2 rounded-lg text-white hover:bg-red-500">
                    <Bell size={18} />
                </button>

                {showNotifications && (
                    <div className="absolute top-16 bg-white right-10 shadow-2xl p-4 rounded-lg w-96 z-50 max-h-80 overflow-y-auto">
                        <p className="text-sm font-semibold mb-2 text-black text-center justify-center flex"><Bell size={18} fill="black" className="mr-2" />Notifications</p>
                        <ul className="text-black list-disc ml-6">
                            {notifications.length === 0 ? (
                                <li>No notifications</li>
                            ) : (
                                notifications.map(note => (
                                    <li key={note.id} className="mb-2">{note.message}
                                        <span className="ml-2 text-gray-500 text-sm">
                                            {new Date(note.timestamp).toLocaleTimeString()}
                                        </span>
                                    </li>

                                ))

                            )}
                        </ul>

                    </div>
                )}
                <div className="relative">

                    <button
                        className="bg-red-400 p-2 rounded-lg white"
                        onClick={() => setCalendarOpen(!calendarOpen)}>
                        <CalendarDays size={18} />
                    </button>

                    {calendarOpen && (
                        <div className="absolute top-12 right-0 z-50 bg-white p-3 rounded-lg shadow-lg">
                            <ReactDatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                inline
                            />
                        </div>
                    )}
                </div>
                <div className="text-right">
                    <div className="text-sm font-medium text-gray-700">{currentDate.day}</div>
                    <div className="text-xs text-blue-500">{currentDate.date}</div>
                </div>

            </div>
        </div>



    )
}

export default Header