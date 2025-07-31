import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';

export default function Navbar({ darkMode, toggleTheme }) {
  const [user, setUser] = useState(null);

  return (
    <div className={`px-6 py-3 flex items-center justify-between shadow-sm sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>Dashboard</h2>

      <div className="flex gap-4 items-center">
        {/* Notification Icon */}
        <button title="Notifications">🔔</button>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} title="Toggle Theme">
          {darkMode ? '🌞' : '🌙'}
        </button>

        {/* Info Icon */}
        <button title="Information">ℹ️</button>

        {/* Auth Section */}
        {!user ? (
          <>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                setUser(decoded);
              }}
              onError={() => console.log('Login Failed')}
            />
            {/* <img
              src="https://img.icons8.com/?size=100&id=108652&format=png&color=000000"
              alt="Default User"
              className="w-8 h-8 rounded-full"
              title="Default User Icon"
            /> */}
          </>
        ) : (
          <img
            src={user.picture}
            alt={user.name}
            className="w-8 h-8 rounded-full cursor-pointer"
            title="Click to logout"
            onClick={() => {
              googleLogout();
              setUser(null);
            }}
          />
        )}
      </div>
    </div>
  );
}
