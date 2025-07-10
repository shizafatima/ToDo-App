import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col text-white pt-3 max-w-screen-xl w-full">
            <div className="max-w-screen-xl mx-auto w-full">
                <Header/>
            </div>
            <div>
                
                <Sidebar />
            </div>
        </div>
    )
}
export default Dashboard
// import React from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";

// function Dashboard() {
//   return (
//     <div className="min-h-screen bg-white text-black">
//       {/* Fixed Header */}
//       <div className="fixed top-0 left-0 right-0 z-30">
//         <Header />
//       </div>

//       {/* Sidebar and Main Content Below Header */}
//       <div className="flex pt-[72px] relative">
//         {/* Sidebar */}
//         <div className="w-64 relative z-10 pt-12">
//           <Sidebar />
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-6">
//           <h1 className="text-2xl font-bold">Welcome</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

