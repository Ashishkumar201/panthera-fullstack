// import { useState, useEffect } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
// import MarketView from './pages/MarketView';
// import AcquisitionView from './pages/AcquisitionView';
// import URLsView from './pages/URLView';

// export default function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode);
//   }, [darkMode]);

//   return (
//     <div className={`flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#f7f9fc] text-black'}`}>
//       <Sidebar />
//       <div className="ml-[20%] w-[80%] min-h-screen flex flex-col">
//         <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(prev => !prev)} />
//         <div className="flex-1 overflow-y-auto p-6">
//           <Routes>
//             <Route path="/" element={<Navigate to="/market" />} />
//             <Route path="/market" element={<MarketView />} />
//             <Route path="/acquisition" element={<AcquisitionView />} />
//             <Route path="/urls" element={<URLsView />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MarketView from './pages/MarketView';
import AcquisitionView from './pages/AcquisitionView';
import URLsView from './pages/URLView';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#f7f9fc] text-black'}`}>
      <Sidebar />
      <div className="ml-[20%] w-[80%] min-h-screen flex flex-col">
        <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode((prev) => !prev)} />
        <div className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/market" />} />
            <Route path="/market" element={<MarketView />} />
            <Route path="/acquisition" element={<AcquisitionView />} />
            <Route path="/urls" element={<URLsView />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
