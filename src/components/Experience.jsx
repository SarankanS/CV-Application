import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Experience({ data, onSubmit }) {
  const [formData, setFormData] = useState(
    data.map((item) => ({
      ...item,
      id: item.id || uuidv4(),
    }))
  );
  const [editMode, setEditMode] = useState(false);

  function handleChange(e, id) {
    const { name, value } = e.target;
    setFormData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
    setEditMode(false);
  }

  function handleAdd() {
    const newEntry = {
      id: uuidv4(),
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    };
    setFormData([...formData, newEntry]);
    setEditMode(true);
  }

  return (
    <div className="experience-info-form form-info">
      <h2>Experience</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          {formData.map((item) => (
            <div key={item.id}>
              <label htmlFor="companyName">Company Name: </label>
              <input
                type="text"
                name="companyName"
                value={item.companyName}
                onChange={(e) => handleChange(e, item.id)}
                placeholder="Company Name"
                required
              />
              <label htmlFor="position">Position: </label>
              <input
                type="text"
                name="position"
                value={item.position}
                onChange={(e) => handleChange(e, item.id)}
                placeholder="Position"
                required
              />
              <label htmlFor="startDate">Start Date: </label>
              <input
                type="date"
                name="startDate"
                value={item.startDate || ""}
                onChange={(e) => handleChange(e, item.id)}
                required
              />
              <label htmlFor="endDate">End Date: </label>
              <input
                type="date"
                name="endDate"
                value={item.endDate || ""}
                onChange={(e) => handleChange(e, item.id)}
                required
              />
              <label htmlFor="location">Location: </label>
              <input
                type="text"
                name="location"
                value={item.location}
                onChange={(e) => handleChange(e, item.id)}
                placeholder="Location"
                required
              />
              <label htmlFor="description">Description: </label>
              <textarea
                name="description"
                value={item.description}
                onChange={(e) => handleChange(e, item.id)}
                placeholder="Describe your role..."
                required
              />
            </div>
          ))}
          <button type="submit">Submit</button>
          <button type="button" onClick={handleAdd}>+ Experience</button>
        </form>
      ) : (
        <div>
          <button onClick={() => setEditMode(true)}>Edit Experience Details</button>
        </div>
      )}
    </div>
  );
}

export default Experience;