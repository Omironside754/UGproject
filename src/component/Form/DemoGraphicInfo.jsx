// Form2.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const DemographicInfo = () => {
  const [formData, setFormData] = useState({
    respondentName: '',
    age: '',
    gender: '',
    occupation: '',
    householdSize: '',
    monthlyIncomeRange: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full ">
        <h2 className="text-2xl font-semibold mb-4 text-center">Demographic Information</h2>

        {/* Name of Respondent */}
        <div className="mb-4">
          <label htmlFor="form2Q1" className="block font-bold mb-1">
            Name of Respondent
          </label>
          <input
            type="text"
            id="form2Q1"
            name="respondentName"
            value={formData.respondentName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label htmlFor="form2Q2" className="block font-bold mb-1">
            Age
          </label>
          <input
            type="number"
            id="form2Q2"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block font-bold mb-1">Gender</label>
          <div className="flex">
            <label htmlFor="form2Q3_Male" className="mr-2">
              <input
                type="radio"
                id="form2Q3_Male"
                name="gender"
                value="Male"
                onChange={handleChange}
              />
              Male
            </label>
            <label htmlFor="form2Q3_Female" className="mr-2">
              <input
                type="radio"
                id="form2Q3_Female"
                name="gender"
                value="Female"
                onChange={handleChange}
              />
              Female
            </label>
            <label htmlFor="form2Q3_Other">
              <input
                type="radio"
                id="form2Q3_Other"
                name="gender"
                value="Other"
                onChange={handleChange}
              />
              Other
            </label>
          </div>
        </div>

        {/* Occupation */}
        <div className="mb-4">
          <label htmlFor="form2Q4" className="block font-bold mb-1">
            Occupation
          </label>
          <input
            type="text"
            id="form2Q4"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Household Size */}
        <div className="mb-4">
          <label htmlFor="form2Q5" className="block font-bold mb-1">
            Household Size
          </label>
          <input
            type="number"
            id="form2Q5"
            name="householdSize"
            value={formData.householdSize}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Monthly Income Range */}
        <div className="mb-4">
          <label className="block font-bold mb-1">Monthly Income Range</label>
          <div className="flex">
            <label htmlFor="form2Q6_0" className="mr-2">
              <input
                type="radio"
                id="form2Q6_0"
                name="monthlyIncomeRange"
                value="< 10000"
                onChange={handleChange}
              />
              &lt; 10000
            </label>
            <label htmlFor="form2Q6_1" className="mr-2">
              <input
                type="radio"
                id="form2Q6_1"
                name="monthlyIncomeRange"
                value="Rs 10000 – Rs20000"
                onChange={handleChange}
              />
              Rs 10000 – Rs20000
            </label>
            <label htmlFor="form2Q6_2" className="mr-2">
              <input
                type="radio"
                id="form2Q6_2"
                name="monthlyIncomeRange"
                value="Rs 20000 – Rs 30000"
                onChange={handleChange}
              />
              Rs 20000 – Rs 30000
            </label>
            <label htmlFor="form2Q6_3" className="mr-2">
              <input
                type="radio"
                id="form2Q6_3"
                name="monthlyIncomeRange"
                value="Rs 30000 – Rs40000"
                onChange={handleChange}
              />
              Rs 30000 – Rs40000
            </label>
            <label htmlFor="form2Q6_4">
              <input
                type="radio"
                id="form2Q6_4"
                name="monthlyIncomeRange"
                value="> Rs 40000"
                onChange={handleChange}
              />
              &gt; Rs 40000
            </label>
          </div>
        </div>

        {/* Continue with other questions and inputs */}
      </div>
    </div>
  );
};

export default DemographicInfo;
