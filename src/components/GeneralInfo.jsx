import React, { useState } from 'react';

function GeneralInfo({data, onSubmit}){
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
    })
    function handleChange(e){
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData, 
            [name]:value,
        })) 
    }
    function handleSubmit(e){
        e.preventDefault();
        onSubmit(formData);
        setEditMode(false);
    }

    function handleEdit(){
        setEditMode(true);
    }

    return (
        <div className="general-info">
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
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
            <div>
                <h2>Personal Details</h2>
                <p>Name: {data.name}</p>
                <p>Email: {data.email}</p>
                <p>Phone: {data.phone}</p>
                <p>Address: {data.address}</p>
                <button onClick={handleEdit}>Edit</button>
            </div>
          )}
        </div>
      );
}


export default GeneralInfo;

