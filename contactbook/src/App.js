import './App.css';
import MainContent from './MainContent';
import { ContactProvider } from './ContactContext';


function App() {
    return (

        <ContactProvider>
            <MainContent />
        </ContactProvider>
    );
}


export default App;