import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="w-[20%] h-screen bg-white border-r shadow-lg flex flex-col justify-between fixed left-0 top-0 px-6 py-8">
      <div>
        {/* Panthera Logo */}
        <div className="flex items-center justify-center mb-8">
          <img
            src="https://res.cloudinary.com/dt8emxboh/image/upload/v1753535804/w0smz6nikuxhkvtymlzc.png"
            alt="Panthera Logo"
            className="w-36 object-contain"
          />
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Section Heading & Navigation */}
        <div>
          <p className="uppercase text-gray-500 text-xs mb-3 tracking-widest">Data Analytics</p>
          <nav className="flex flex-col gap-3 text-sm">
            <NavLink
              to="/market"
              className={({ isActive }) =>
                `pl-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 border-l-4 border-blue-600 text-blue-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`
              }
            >
              Market View
            </NavLink>
            <NavLink
              to="/acquisition"
              className={({ isActive }) =>
                `pl-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 border-l-4 border-blue-600 text-blue-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`
              }
            >
              Acquisition View
            </NavLink>
            <NavLink
              to="/urls"
              className={({ isActive }) =>
                `pl-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 border-l-4 border-blue-600 text-blue-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`
              }
            >
              URLs
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Chat Option */}
<div className="text-center text-sm mt-8">
  <a
    href="https://chat.openai.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300"
  >
    💬 Chat with AI System
  </a>
</div>

    </div>
  );
}
