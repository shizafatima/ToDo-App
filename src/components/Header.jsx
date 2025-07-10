import React from "react";
import { Bell, CalendarDays, Search } from 'lucide-react';


const Header = () => {
    return (
        <div className="flex items-center justify-between px-8 py-4 bg-white shadow w-full">
            {/* logo */}
            <div className="text-2xl font-bold">
                <span className="text-red-400 ">Dash</span>
                <span className="text-black ">board</span>
            </div>

            {/*search bar*/}
            <div className="flex items-center bg-gray-100 rounded-l-lg max-w-xl mx-8">
                <input type="text" placeholder="Search your task here..." className="flex-grow px-4 py-2 rounded-l-lg rounded-r-lg bg-transparent focus:outline-none" />
                <button className="bg-red-400 px-2 py-3 text-white rounded-r-lg rounded-l-lg">
                    <Search size={18} />
                </button>
            </div>
            {/* icons and date */}
            <div className="flex items-center gap-4">
                <button className="bg-red-400 p-2 rounded-lg text-white">
                    <Bell size={18} />
                </button>
                <button className="bg-red-400 p-2 rounded-lg white">
                    <CalendarDays size={18} />
                </button>
                <div className="text-right">
                    <div className="text-sm font-medium text-gray-700">Tuesday</div>
                    <div className="text-xs text-blue-500">20/01/2023</div>
                </div>

            </div>
        </div>



    )
}

export default Header