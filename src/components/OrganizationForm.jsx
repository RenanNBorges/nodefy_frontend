import React, { useState } from 'react';
import axios from 'axios';

const OrganizationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        phone: '',
        country: '',
        state:'',
        city:'',
        org_name: '',
        org_type: '',
        org_area: '',
        org_site: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = { ...formData, is_org: true };
            const response = await axios.post('http://localhost:5000/api/users', dataToSend);
            console.log('Resposta da API:', response.data);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Cadastro de Organização</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" name="username" onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" name="password" onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" name="email" onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input type="phone" name="phone" onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country:</label>
                    <input type="text" name="country" onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State:</label>
                    <input type="text" name="state" onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City:</label>
                    <input type="text" name="city" onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="org_name" className="form-label">Nome da Organização:</label>
                    <input type="text" name="org_name" onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="org_area" className="form-label">Tipo da Organização:</label>
                    <input type="text" name="org_type" onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="org_area" className="form-label">Tipo da Organização:</label>
                    <input type="text" name="org_area" onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="org_site" className="form-label">Tipo da Organização:</label>
                    <input type="site" name="org_site" onChange={handleChange} className="form-control" required/>
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
};

export default OrganizationForm;
