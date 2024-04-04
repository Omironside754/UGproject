// HouseholdItems.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const HouseholdItems = () => {
  const [householdData, setHouseholdData] = useState({
    form2HouseholdItemQ11: '',
    form2HouseholdItemQ12: '',
    form2HouseholdItemQ13: '',
    form2HouseholdItemQ14: '',
    form2HouseholdItemQ15: '',
    form2HouseholdItemQ16: '',
    form2HouseholdItemQ17: '',
    form2HouseholdItemQ18: '',
    form2HouseholdItemQ19: '',
    form2HouseholdItemQ20: '',
    form2HouseholdItemQ21: '',
    form2HouseholdItemQ22: '',
    form2HouseholdItemQ23: '',
    form2HouseholdItemQ24: '',
    form2HouseholdItemQ25: '',
    form2HouseholdItemQ26: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setHouseholdData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full ">
        <h2 className="text-2xl font-semibold mb-4 text-center">Household Items</h2>

        {/* Plastic Water Bottle */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ11" className="block font-bold mb-1">
            11. Plastic water bottle - How many/much do you purchase and use plastic water bottles?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ11"
            name="form2HouseholdItemQ11"
            value={householdData.form2HouseholdItemQ11}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Smartphone */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ12" className="block font-bold mb-1">
            12. Smartphone - How many smartphones have you purchased in a year?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ12"
            name="form2HouseholdItemQ12"
            value={householdData.form2HouseholdItemQ12}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Laptop */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ13" className="block font-bold mb-1">
            13. Laptop - How many laptops have you purchased?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ13"
            name="form2HouseholdItemQ13"
            value={householdData.form2HouseholdItemQ13}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* TV */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ14" className="block font-bold mb-1">
            14. TV – What is the size of your TV and how much TV have you purchased in a year?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ14"
            name="form2HouseholdItemQ14"
            value={householdData.form2HouseholdItemQ14}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* T-shirt */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ15" className="block font-bold mb-1">
            15. T-shirt - How many/much do you purchase T-shirts and how many do you purchase in a month?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ15"
            name="form2HouseholdItemQ15"
            value={householdData.form2HouseholdItemQ15}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Shirt */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ16" className="block font-bold mb-1">
            16. Shirt - How many/much do you purchase and wear shirts?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ16"
            name="form2HouseholdItemQ16"
            value={householdData.form2HouseholdItemQ16}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Bed Sheet */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ17" className="block font-bold mb-1">
            17. Bed sheet - How many/much do you purchase and use bed sheets?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ17"
            name="form2HouseholdItemQ17"
            value={householdData.form2HouseholdItemQ17}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Pair of Jeans */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ18" className="block font-bold mb-1">
            18. Pair of Jeans - How many/much do you purchase and wear jeans?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ18"
            name="form2HouseholdItemQ18"
            value={householdData.form2HouseholdItemQ18}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Towel */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ19" className="block font-bold mb-1">
            19. Towel - How many/much do you purchase and use towels?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ19"
            name="form2HouseholdItemQ19"
            value={householdData.form2HouseholdItemQ19}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Leather Shoes */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ20" className="block font-bold mb-1">
            20. Leather shoes - How many/much do you purchase and wear leather shoes?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ20"
            name="form2HouseholdItemQ20"
            value={householdData.form2HouseholdItemQ20}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Sports Shoes */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ21" className="block font-bold mb-1">
            21. Sports shoes - How many/much do you purchase and wear sports shoes?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ21"
            name="form2HouseholdItemQ21"
            value={householdData.form2HouseholdItemQ21}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Saree */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ22" className="block font-bold mb-1">
            22. Saree - How many/much do you purchase and wear sarees?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ22"
            name="form2HouseholdItemQ22"
            value={householdData.form2HouseholdItemQ22}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Razor Blade */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ23" className="block font-bold mb-1">
            23. Razor blade - How many/much do you purchase and use razor blades?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ23"
            name="form2HouseholdItemQ23"
            value={householdData.form2HouseholdItemQ23}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Ball Pen */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ24" className="block font-bold mb-1">
            24. Ball pen - How many/much do you purchase and use ball pens?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ24"
            name="form2HouseholdItemQ24"
            value={householdData.form2HouseholdItemQ24}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Notebook */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ25" className="block font-bold mb-1">
            25. Notebook - How many/much do you purchase and use notebooks?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ25"
            name="form2HouseholdItemQ25"
            value={householdData.form2HouseholdItemQ25}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Book */}
        <div className="mb-4">
          <label htmlFor="form2HouseholdItemQ26" className="block font-bold mb-1">
            26. Book - How many/much do you purchase and read books?
          </label>
          <input
            type="text"
            id="form2HouseholdItemQ26"
            name="form2HouseholdItemQ26"
            value={householdData.form2HouseholdItemQ26}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Continue with other questions and inputs */}
      </div>
    </div>
  );
};

export default HouseholdItems;
