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
  const [selectedEducationId, setSelectedEducationId] = useState(null);

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
    setSelectedEducationId(null);
  }

  function handleAdd() {
    const newEntry = {
      id: uuidv4(),
      schoolName: "New Education",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    };
    setFormData([...formData, newEntry]);
  }

  function handleEdit(id) {
    setSelectedEducationId(id);
    setEditMode(true);
  }

  return (
    <div className="education-info-form form-info">
      <h2> <i className="fa fa-graduation-cap"></i> Education</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          {formData
            .filter((item) => item.id === selectedEducationId)
            .map((item) => (
              <div key={item.id}>
                <label htmlFor="schoolName">School Name: </label>
                <input
                  type="text"
                  name="schoolName"
                  value={item.schoolName}
                  onChange={(e) => handleChange(e, item.id)}
                  placeholder="School Name"
                  required
                />
                <label htmlFor="degree">Degree: </label>
                <input
                  type="text"
                  name="degree"
                  value={item.degree}
                  onChange={(e) => handleChange(e, item.id)}
                  placeholder="Degree"
                  required
                />
                <label htmlFor="startDate">Start Date: </label>
                <input
                  type="text"
                  name="startDate"
                  value={item.startDate}
                  onChange={(e) => handleChange(e, item.id)}
                  required
                />
                <label htmlFor="endDate">End Date: </label>
                <input
                  type="text"
                  name="endDate"
                  value={item.endDate}
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
              </div>
            ))}
          <button type="submit">Save</button>
        </form>
      ) : (
        <>       
         {formData.map((item) => (
          <button key={item.id} onClick={() => handleEdit(item.id)}>
            {item.schoolName}
          </button>
        ))}
        {/* <button onClick={() => setEditMode(true)}>Edit Education Details</button> */}
        </>
      )}
      
      <button onClick={handleAdd}>+ Education</button>
    </div>
  );
}

export default Education;
