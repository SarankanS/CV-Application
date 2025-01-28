import { v4 as uuidv4 } from 'uuid';

const exampleData = {
  personalInfo: {
    fullName: "Ava Harrison",
    email: "ava.harrison@mail.com",
    phoneNumber: "+1 202 555 0199",
    address: "San Francisco, CA, USA",
  },

  sections: {
    educations: [
      {
        degree: "Bachelors in Computer Science",
        schoolName: "University of California, Berkeley",
        location: "Berkeley, CA, USA",
        startDate: "09/2018",
        endDate: "05/2022",
        id: uuidv4(),
      },
      {
        degree: "Master's Degree in Data Science",
        schoolName: "Stanford University",
        location: "Stanford, CA, USA",
        startDate: "09/2022",
        endDate: "present",
        id: uuidv4(),
      },
    ],

    experiences: [
      {
        companyName: "Pixel Innovations",
        positionTitle: "Senior Data Scientist",
        location: "San Francisco, CA, USA",
        description:
          "Led data analysis and predictive modeling efforts to support product development in various tech-driven industries, including e-commerce, fintech, and healthcare.",
        startDate: "06/2022",
        endDate: "present",
        id: uuidv4(),
      },
      {
        companyName: "QuantumTech Solutions",
        positionTitle: "Junior Data Analyst",
        location: "Seattle, WA, USA",
        description:
          "Worked on data cleaning and visualization projects, contributing to the development of machine learning models for predictive analytics.",
        startDate: "01/2020",
        endDate: "05/2022",
        id: uuidv4(),
      },
    ],
  },
};

export default exampleData;
