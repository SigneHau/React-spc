import { createClient } from '@supabase/supabase-js'
import { useState } from 'react';
import { SUPABASE_PROJECT_URL, SUPABASE_APIKEY } from './apiConfig.js';


const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_APIKEY)


export default function SignUp( { onClose }) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    // Håndterer form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Forhindrer reload
        signUpNewUser();
    };

    async function signUpNewUser() {
        console.log(userName, password)
        const { data, error } = await supabase.auth.signUp({
            email: userName,
            password: password,
        })
        console.log(data, error)
        if (data) {
            console.log("Du er tilmeldt");
            console.log("data", data);
            // Luk modal
            if (onClose) onClose();
        }
        else {
            console.log("Du har fejlet", error)
        }
    }

    return (

        /* Formular til at indtaste oplysninger */ /* UserName */
        <form onSubmit={handleSubmit} className="signUp-form space-y-4 mb-8">
            <div className="form-group flex flex-col">
                <label htmlFor="userName" className="form-label text-sm text-gray-700 font-semibold mb-1">Brugernavn:</label>
                <input
                    id="UserName"
                    type="email"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="form-input p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                    required
                />
            </div>

            {/* password*/}
            <div className="form-group flex flex-col">
                <label htmlFor="password" className="form-label text-sm text-gray-700 font-semibold mb-1">Password:</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                    required
                />
            </div>

            <button className="modal-submit-btn w-full bg-rose-400 hover:bg-rose-900 text-white font-bold py-2 rounded-md transition-colors"  >
                Opret ny bruger
            </button>

        </form>
    );
};


