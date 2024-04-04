// FoodItems.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const FoodItems = () => {
  const [foodData, setFoodData] = useState({
    form2FoodItemQ1: '',
    form2FoodItemQ2: '',
    form2FoodItemQ3: '',
    form2FoodItemQ4: '',
    form2FoodItemQ5: '',
    form2FoodItemQ6: '',
    form2FoodItemQ7: '',
    form2FoodItemQ8: '',
    form2FoodItemQ9: '',
    form2FoodItemQ10: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFoodData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center ">
      <div className="bg-white p-8 rounded shadow-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Food Items</h2>

        {/* Wheat Flour */}
        <div className="mb-4">
          <label htmlFor="form2FoodItemQ1" className="block font-bold mb-1">
            1. Wheat flour - How many/much and how much do you purchase and consume of wheat flour? (kg)
          </label>
          <input
            type="text"
            id="form2FoodItemQ1"
            name="form2FoodItemQ1"
            value={foodData.form2FoodItemQ1}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Vegetable Oil */}
        <div className="mb-4">
          <label htmlFor="form2FoodItemQ2" className="block font-bold mb-1">
            2. 1 liter of vegetable oil - How many/much do you purchase and consume of vegetable oil? (Kg)
          </label>
          <input
            type="text"
            id="form2FoodItemQ2"
            name="form2FoodItemQ2"
            value={foodData.form2FoodItemQ2}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Detergent */}
        <div className="mb-4">
          <label htmlFor="form2FoodItemQ3" className="block font-bold mb-1">
            3. Detergent - How many/much and how much you purchase and use detergent? (kg)
          </label>
          <input
            type="text"
            id="form2FoodItemQ3"
            name="form2FoodItemQ3"
            value={foodData.form2FoodItemQ3}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Soap */}
        <div className="mb-4">
          <label htmlFor="form2FoodItemQ4" className="block font-bold mb-1">
            4. Soap - How many soap is used per month and how much in grams is it? (g)
          </label>
          <input
            type="text"
            id="form2FoodItemQ4"
            name="form2FoodItemQ4"
            value={foodData.form2FoodItemQ4}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Shampoo */}
        <div className="mb-4">
          <label htmlFor="form2FoodItemQ5" className="block font-bold mb-1">
            5. Shampoo - How many/much do you purchase and use a ml shampoo? (L/ml)
          </label>
          <input
            type="text"
            id="form2FoodItemQ5"
            name="form2FoodItemQ5"
            value={foodData.form2FoodItemQ5}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Salt Pack */}
        <div className="mb-4">
          <label htmlFor="form2FoodItemQ6" className="block font-bold mb-1">
            6. Salt pack - How much do you purchase and consume salt? (kg)
          </label>
          <input
            type="text"
            id="form2FoodItemQ6"
            name="form2FoodItemQ6"
            value={foodData.form2FoodItemQ6}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Sugar */}
        <div className="mb-4">
          <label htmlFor="form2FoodItemQ7" className="block font-bold mb-1">
            7. Sugar - How much purchase and consume 1 kg of sugar? (kg)
          </label>
          <input
            type="text"
            id="form2FoodItemQ7"
            name="form2FoodItemQ7"
            value={foodData.form2FoodItemQ7}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Bread */}
        <div className="mb-4">
          <label htmlFor="form2FoodItemQ8" className="block font-bold mb-1">
            8. Bread - How many/much do you purchase and the quantity of bread? (kg)
          </label>
          <input
            type="text"
            id="form2FoodItemQ8"
            name="form2FoodItemQ8"
            value={foodData.form2FoodItemQ8}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Pack of Biscuit */}
        <div className="mb-4">
          <label htmlFor="form2FoodItemQ9" className="block font-bold mb-1">
            9. Pack of biscuit - How many/much and how much packs of biscuits? (kg)
          </label>
          <input
            type="text"
            id="form2FoodItemQ9"
            name="form2FoodItemQ9"
            value={foodData.form2FoodItemQ9}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Cold Drinks */}
        <div className="mb-4">
          <label htmlFor="form2FoodItemQ10" className="block font-bold mb-1">
            10. Cold drinks - How many liters of Coca-Cola? (L)
          </label>
          <input
            type="text"
            id="form2FoodItemQ10"
            name="form2FoodItemQ10"
            value={foodData.form2FoodItemQ10}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Continue with other questions and inputs */}
      </div>
    </div>
  );
};

export default FoodItems;
