import { useState } from "react";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

export default function Header() {
  // 'activeForm' kan være: null (lukket), 'login', eller 'signup'
  const [activeForm, setActiveForm] = useState(null); 

  // Funktion til at lukke modalen
  const handleCloseModal = () => setActiveForm(null);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow w-full">
      <h1 className="text-xl font-bold text-rose-700">Du kan oprette dig som bruger eller logge ind</h1>

      {/* Højre side med knapper */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setActiveForm('login')} 
          className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-md"> 
          Log ind 
        </button> 

        <button 
          onClick={() => setActiveForm('signup')} 
          className="bg-rose-400 hover:bg-rose-900 text-white px-4 py-2 rounded-md">
          Opret bruger
        </button>
      </div>

      {/* Modal til signup / login */}
      {activeForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"> 
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative"> 
            
            {/* Kryds-ikon til at lukke modalen (Placeret absolut i hjørnet) */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors"
              onClick={handleCloseModal}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Dynamisk Overskrift */}
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              {activeForm === 'login' ? 'Log ind' : 'Opret bruger'}
            </h2>

            {/* Viser den rigtige formular baseret på state */}
            {activeForm === 'login' && <LogIn onClose={handleCloseModal} />}
            {activeForm === 'signup' && <SignUp onClose={handleCloseModal} />}
            
          </div>
        </div>
      )}
    </header>
  );
}