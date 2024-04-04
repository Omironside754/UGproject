import React from 'react';

const col = ['Fuel', 'Yes/No', 'if yes, then consumption detail', 'Number of days'];
const fuel = ['LPG', 'electricity', 'kerosene oil', 'BioGas', 'clay stove '];
const yesNoOptions = ['Yes', 'No'];

function FuelConsumption({ handleChange }) {
    const getFuelType = (rowIndex) => {
        // Ensure rowIndex is within the bounds of the fuel array
        if (rowIndex >= 0 && rowIndex < fuel.length) {
            return fuel[rowIndex];
        } else {
            return '';
        }
    };

    return (
        <div className='Devices used for cooking border-1 border-black py-2 px-2 mx-2 '>
            <h1> 2. Fuel Consumption for cooking </h1>
            <table className="table-auto border-2">
                <thead>
                    <tr className="border-2">
                        {col.map((column, index) => (
                            <th key={index} className="border-2 border-gray-300 p-1">{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {fuel.map((fuelType, rowIndex) => (
                        <tr key={rowIndex}>
                            <td className="border-2 border-gray-300 p-1">{fuelType}</td>
                            <td className="border-2 border-gray-300 p-1  ">
                                <select
                                    className='mx-4 border-2 rounded-none mb-2'
                                    id={`${getFuelType(rowIndex)}-${rowIndex}`}
                                    defaultValue={""} // Use defaultValue instead of selected
                                    onChange={(e) => handleChange(e, rowIndex)} // Pass the event and rowIndex to handleChange
                                >
                                    <option value="" disabled>select</option>
                                    {yesNoOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>

                            </td>
                            <td className="border-2 border-gray-300 p-1  ">
                                <input
                                    type="text"
                                    className='border-2 rounded-none mx-1'
                                    placeholder='details'
                                    id={`${getFuelType(rowIndex)}-${rowIndex}`}
                                    onChange={(e) => handleChange(e, rowIndex)} // Pass the event and rowIndex to handleChange
                                />
                            </td>
                            <td className="border-2 border-gray-300 p-1  ">
                                <input
                                    type="number"
                                    className='border-2 rounded-none mx-1'
                                    placeholder='NO.'
                                    id={`${getFuelType(rowIndex)}-${rowIndex}`}
                                    onChange={(e) => handleChange(e, rowIndex)} // Pass the event and rowIndex to handleChange
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FuelConsumption;
