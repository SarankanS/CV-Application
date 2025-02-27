import React, { useState } from 'react';
import "../styles/form.css"

function GeneralInfo({ data, onSubmit }) {
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState(data);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, 
            [name]: value,
        })); 
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(formData);
        setEditMode(false);
    }

    return (
        <div className="general-info form-info">
          <h2>Personal Details</h2>
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <label for="name">Name: </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label for="email">Email: </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label for="phone">Phone Number: </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label for="addresss">Address: </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          ) : (
            <button onClick={() => setEditMode(true)}>Edit Personal Details</button>
          )}
        </div>
    );
}

export default GeneralInfo;