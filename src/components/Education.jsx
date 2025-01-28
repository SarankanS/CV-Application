import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function Education({data, onSubmit}){
    const [formData, setFormData] = useState(
        data.map((item) =>({
            ...item, 
            id: item.id || uuidv4()
        }))
    );
    const [editMode, setEditMode] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) =>
          prevData.map((item) =>
            item.id === currentId ? { ...item, [name]: value } : item
          )
        );
      }
    function handleSubmit(e){
        e.preventDefault();
        onSubmit(formData);
        setEditMode(false);
    }

    function handleEdit(id){
        setEditMode(true);
        setCurrentId(id);
    }

    return(
        <div className="education-info">
            <h2>Education</h2>
            {editMode ? (
            <form onSubmit={handleSubmit}>
                {formData
                .filter((item) => item.id === currentId)
                .map((item) => (
                    <div key={item.id}>
                    <input
                        type="text"
                        name="schoolName"
                        value={item.schoolName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="degree"
                        value={item.degree}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="startDate"
                        value={item.startDate}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="endDate"
                        value={item.endDate}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="location"
                        value={item.location}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Submit</button>
                    </div>
                ))}
            </form>
        ) : (
            <div>
                {formData.map((data)=>{
                        return (
                            <div key={data.id}>
                                <p>School: {data.schoolName}</p>
                                <p>Degree: {data.degree}</p>
                                <p>Start Date: {data.startDate}</p>
                                <p>End Date: {data.endDate}</p>
                                <p>Location: {data.location}</p>
                                <button onClick={() => handleEdit(data.id)}>Edit</button>
                            </div>
                        );
                })}
            </div>  
        )}
        <button onClick={handleAdd}>+ Education</button>
      </div>
    );
}

export default Education;