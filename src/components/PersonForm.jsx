import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const PersonForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        birthDate: null,
        country: '',
        state:'',
        city:'',

    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, birthDate: date });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = { ...formData, is_org: false };
            // Envie os dados do formulário para a API Flask
            const response = await axios.post('http://localhost:5000/api/users', dataToSend);
            console.log('Resposta da API:', response.data);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Cadastro de Pessoa</h2>
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
                    <label htmlFor="firstname" className="form-label">First Name:</label>
                    <input type="text" name="firstname" onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name:</label>
                    <input type="text" name="lastname" onChange={handleChange} className="form-control" required/>
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
                    <label htmlFor="birthDate" className="form-label">Birth Date:</label>
                    <DatePicker
                        selected={formData.birthDate}
                        onChange={handleDateChange}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={15}
                        placeholderText="Selecione a data"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
};

export default PersonForm;
