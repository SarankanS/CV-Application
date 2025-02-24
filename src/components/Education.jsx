import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Education({ data, onSubmit }) {
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
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    };
    setFormData([...formData, newEntry]);
    setEditMode(true);
  }

  return (
    <div className="education-info form-info">
      <h2>Education</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          {formData.map((item) => (
            <div key={item.id}>
              <input
                type="text"
                name="schoolName"
                value={item.schoolName}
                onChange={(e) => handleChange(e, item.id)}
                placeholder="School Name"
                required
              />
              <input
                type="text"
                name="degree"
                value={item.degree}
                onChange={(e) => handleChange(e, item.id)}
                placeholder="Degree"
                required
              />
              <input
                type="date"
                name="startDate"
                value={item.startDate}
                onChange={(e) => handleChange(e, item.id)}
                required
              />
              <input
                type="date"
                name="endDate"
                value={item.endDate}
                onChange={(e) => handleChange(e, item.id)}
                required
              />
              <input
                type="text"
                name="location"
                value={item.location}
                onChange={(e) => handleChange(e, item.id)}
                placeholder="Location"
                required
              />
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          {formData.map((data) => (
            <div key={data.id}>
              <p>School: {data.schoolName}</p>
              <p>Degree: {data.degree}</p>
              <p>Start Date: {data.startDate}</p>
              <p>End Date: {data.endDate}</p>
              <p>Location: {data.location}</p>
            </div>
          ))}
          <button onClick={() => setEditMode(true)}>Edit Education Details</button>
        </div>
      )}
      <button onClick={handleAdd}>+ Education</button>
    </div>
  );
}

export default Education;
