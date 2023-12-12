import React, { useState } from 'react';
import PersonForm from './PersonForm';
import OrgForm from './OrganizationForm.jsx';

const UserForm = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        email: '',
        phone_number: '',
        country: '',
        state: '',
        city: '',
        isOrganization: false,
    });

    const handleCheckboxChange = () => {
        setUserData((prevData) => ({ ...prevData, isOrganization: !prevData.isOrganization }));
    };

    const handleSubmit = (data) => {
        // Adicione a lógica para enviar os dados ao servidor
        console.log(data);
    };

    return (
        <div>
            <form>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                    required
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    required
                />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    required
                />

                <label>Phone Number:</label>
                <input
                    type="text"
                    name="phone_number"
                    value={userData.phone_number}
                    onChange={(e) => setUserData({ ...userData, phone_number: e.target.value })}
                />

                <label>Country:</label>
                <input
                    type="text"
                    name="country"
                    value={userData.country}
                    onChange={(e) => setUserData({ ...userData, country: e.target.value })}
                />

                <label>State:</label>
                <input
                    type="text"
                    name="state"
                    value={userData.state}
                    onChange={(e) => setUserData({ ...userData, state: e.target.value })}
                />

                <label>City:</label>
                <input
                    type="text"
                    name="city"
                    value={userData.city}
                    onChange={(e) => setUserData({ ...userData, city: e.target.value })}
                />

                <label>
                    Is an Organization?
                    <input
                        type="checkbox"
                        checked={userData.isOrganization}
                        onChange={handleCheckboxChange}
                    />
                </label>

                {userData.isOrganization ? (
                    <OrgForm handleSubmit={handleSubmit} />
                ) : (
                    <PersonForm handleSubmit={handleSubmit} />
                )}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
