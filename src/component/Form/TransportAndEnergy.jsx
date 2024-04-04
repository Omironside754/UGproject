// TransportAndEnergy.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const TransportAndEnergy = () => {
  const [transportEnergyData, setTransportEnergyData] = useState({
    form2TransportEnergyQ27: '',
    form2TransportEnergyQ28: '',
    form2TransportEnergyQ29: '',
    form2TransportEnergyQ30: '',
    form2TransportEnergyQ31: '',
    form2TransportEnergyQ32: '',
    form2TransportEnergyQ33: '',
    form2TransportEnergyQ34: '',
    form2TransportEnergyQ35: '',
    form2TransportEnergyQ36: '',
    form2TransportEnergyQ37: '',
    form2TransportEnergyQ38: '',
    form2TransportEnergyQ39: '',
    form2TransportEnergyQ40: '',
    form2TransportEnergyQ41: '',
    form2TransportEnergyQ42: '',
    form2TransportEnergyQ43: '',
    form2TransportEnergyQ44: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTransportEnergyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    // Handle your form submission logic here
    console.log('Form submitted!');
  };
  return (
    <div className="flex justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full ">
        <h2 className="text-2xl font-semibold mb-4 text-center">Transport and Energy</h2>

        {/* 4g Data */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ27" className="block font-bold mb-1">
            27. 4g data - How many/much do you use GB of 4g data?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ27"
            name="form2TransportEnergyQ27"
            value={transportEnergyData.form2TransportEnergyQ27}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* 5g Data */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ28" className="block font-bold mb-1">
            28. 5g data - How many/much do you use 1 GB of 5g data?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ28"
            name="form2TransportEnergyQ28"
            value={transportEnergyData.form2TransportEnergyQ28}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Air Travel */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ29" className="block font-bold mb-1">
            29. Air travel - How many/much do you travel by air?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ29"
            name="form2TransportEnergyQ29"
            value={transportEnergyData.form2TransportEnergyQ29}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Ceiling Fan */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ30" className="block font-bold mb-1">
            30. Ceiling fan - How many/much do you use a ceiling fan?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ30"
            name="form2TransportEnergyQ30"
            value={transportEnergyData.form2TransportEnergyQ30}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Refrigerator */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ31" className="block font-bold mb-1">
            31. Refrigerator - How many/much do you use a refrigerator?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ31"
            name="form2TransportEnergyQ31"
            value={transportEnergyData.form2TransportEnergyQ31}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Air Cooler */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ32" className="block font-bold mb-1">
            32. Air cooler - How many/much do you use an air cooler?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ32"
            name="form2TransportEnergyQ32"
            value={transportEnergyData.form2TransportEnergyQ32}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Beer Bottle */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ33" className="block font-bold mb-1">
            33. Beer bottle - How many/much do you purchase and consume beer bottles?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ33"
            name="form2TransportEnergyQ33"
            value={transportEnergyData.form2TransportEnergyQ33}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Cigarette Pack */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ34" className="block font-bold mb-1">
            34. Cigarette pack - How many/much do you purchase and consume cigarette packs?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ34"
            name="form2TransportEnergyQ34"
            value={transportEnergyData.form2TransportEnergyQ34}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Toothpaste */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ35" className="block font-bold mb-1">
            35. Toothpaste - How many/much do you purchase and use toothpaste?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ35"
            name="form2TransportEnergyQ35"
            value={transportEnergyData.form2TransportEnergyQ35}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Sunglasses */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ36" className="block font-bold mb-1">
            36. Sunglasses - How many/much do you purchase and use sunglasses?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ36"
            name="form2TransportEnergyQ36"
            value={transportEnergyData.form2TransportEnergyQ36}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Air Conditioner */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ37" className="block font-bold mb-1">
            37. Air conditioner - How many air conditioners do you have?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ37"
            name="form2TransportEnergyQ37"
            value={transportEnergyData.form2TransportEnergyQ37}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Verified Tiles */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ38" className="block font-bold mb-1">
            38. Verified tiles – What is the flooring material used in the home? YES/NO. Area?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ38"
            name="form2TransportEnergyQ38"
            value={transportEnergyData.form2TransportEnergyQ38}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Mineral Water Bottle 1 L */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ39" className="block font-bold mb-1">
            39. Mineral water bottle 1 L - How many/much do you purchase and use 1 L mineral water bottles?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ39"
            name="form2TransportEnergyQ39"
            value={transportEnergyData.form2TransportEnergyQ39}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* 50 kg Cement Bag */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ40" className="block font-bold mb-1">
            40. 50 kg cement bag - How many/much do you purchase and have used cement bags?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ40"
            name="form2TransportEnergyQ40"
            value={transportEnergyData.form2TransportEnergyQ40}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Standard Brick */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ41" className="block font-bold mb-1">
            41. Standard brick - How many/much do you use standard bricks so far?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ41"
            name="form2TransportEnergyQ41"
            value={transportEnergyData.form2TransportEnergyQ41}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* TMT Bar */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ42" className="block font-bold mb-1">
            42. TMT bar - How many/much TMT bars have you used so far in your building and their size?
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ42"
            name="form2TransportEnergyQ42"
            value={transportEnergyData.form2TransportEnergyQ42}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Steel Tap */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ43" className="block font-bold mb-1">
            43. Steel tap - How many/much do you use steel taps? (Enter the count)
          </label>
          <input
            type="text"
            id="form2TransportEnergyQ43"
            name="form2TransportEnergyQ43"
            value={transportEnergyData.form2TransportEnergyQ43}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Food Consumption */}
        <div className="mb-4">
          <label htmlFor="form2TransportEnergyQ44" className="block font-bold mb-1">
            44. What do you usually cook in your house and how much? (Provide details)
          </label>
          <textarea
            id="form2TransportEnergyQ44"
            name="form2TransportEnergyQ44"
            value={transportEnergyData.form2TransportEnergyQ44}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Continue with other questions and inputs */}
         {/* Submit Button */}
         <div className="mt-4 text-right">
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </div>
      </div>
    </div>
  );
};

export default TransportAndEnergy;
