import React, { useState } from 'react';
import PersonForm from './components/PersonForm.jsx';
import OrganizationForm from './components/OrganizationForm.jsx';

function App() {
    const [showPersonForm, setShowPersonForm] = useState(false);
    const [showOrganizationForm, setShowOrganizationForm] = useState(false);

    const handleShowPersonForm = () => {
        setShowPersonForm(true);
        setShowOrganizationForm(false);
    };

    const handleShowOrganizationForm = () => {
        setShowPersonForm(false);
        setShowOrganizationForm(true);
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center mb-4">
                <button className="btn btn-primary me-2" onClick={handleShowPersonForm}>Cadastrar Pessoa</button>
                <button className="btn btn-primary" onClick={handleShowOrganizationForm}>Cadastrar Organização</button>
            </div>

            {showPersonForm && <PersonForm />}
            {showOrganizationForm && <OrganizationForm />}
        </div>
    );
}

export default App;
