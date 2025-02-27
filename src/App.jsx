import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import exampleData from './exampleData';
import Education from './components/Education';
import Experience from './components/Experience';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: exampleData.personalInfo.fullName,
    email: exampleData.personalInfo.email,
    phone: exampleData.personalInfo.phoneNumber,
    address: exampleData.personalInfo.address,

  });
  const [educationInfo, setEducationInfo] = useState(exampleData.sections.educations)
  const [experienceInfo, setExperienceInfo] = useState(exampleData.sections.experiences)
  return (
    <div className="app">
      <div className="resume-edit">
        <div className="edit-container">
          <GeneralInfo
            data={generalInfo}
            onSubmit={(data) => setGeneralInfo(data)}
          />
          <Education 
            data={educationInfo}
            onSubmit={(data) => setEducationInfo(data)}
          />
          <Experience 
            data={experienceInfo}
            onSubmit={(data) => setExperienceInfo(data)}
          />
        </div>
      </div>
      <div className="resume-preview">
        <div className="resume-page">
          <div className="resume-header">
            <div className='personal-details'>
              <h2>{generalInfo.name}</h2>
              <div className="personal-subdetails">
                <p><i className="fa fa-envelope"></i> {generalInfo.email}</p>
                <p><i className="fa fa-phone"></i> {generalInfo.phone}</p>
                <p><i className="fa fa-location-pin"></i> {generalInfo.address}</p>
              </div>
            </div>
          </div>
          <div className="resume-subinfo">
            <div className="education-details">
              <h2 className='header-text'>Education</h2>
              {educationInfo.map((data) => (
                  <div className='education-info' key={data.id}>
                    <div className="education-info-group date-location">
                      <p>{data.startDate} - {data.endDate}</p>
                      <p>{data.location}</p>
                    </div>
                    <div className="education-info-group">
                      <p><b>{data.schoolName}</b></p>
                      <p>{data.degree}</p>
                    </div>
                    
                  
                </div>
              ))}
            </div>
            <div className="experience-details">
              <h2 className='header-text'>Experience</h2>
              {experienceInfo.map((data) => (
                <div className='experience-info' key={data.id}>
                  <div className="experience-info-group date-location">
                    <p>{data.startDate} - {data.endDate}</p>
                    <p>{data.location}</p>
                  </div>
                  <div className="experience-info-group date-location">
                    <p><b>{data.companyName}</b></p>
                    <p>{data.position}</p>
                    <p>{data.description}</p>

                    
                  </div>
                </div>
              ))} 
            </div>
          </div>
        </div>
      </div>
    </div>    
  );
};

export default App;