import React from 'react';

const col = ['vehicle', 'yes/No'];
const col2 = ['Two-wheeler', 'car', 'Other (auto, Load carrier, Mini bus)'];
const subHeading = ['Vehicle type - Petrol/Diesel', 'Age of vehicle (yrs)', 'Monthly Bill of Fuel Consumption', 'Run how many kms per month'];

const vehicles = [
    'Bike/scooter',
    'Auto Rickshaw',
    'Car',
    'Cycle'
];
const vehicleDetails = [
    ['vehicle type-Petrol/diesel', 'Age of vehicle(yrs)', 'Monthly Bill of Fuel Consumption', 'Run how many kms per month'],
    ['vehicle type-Petrol/diesel', 'Age of vehicle(yrs)', 'Monthly Bill of Fuel Consumption', 'Run how many kms per month'],
    ['vehicle type-Petrol/diesel', 'Age of vehicle(yrs)', 'Monthly Bill of Fuel Consumption', 'Run how many kms per month']
];
function OwnVehicle({ handleChange }) {
    return (
        <div className='m-2 border-3 border-gray-300 overflow-auto'>
            <h1 className="m-2"> 5. Own vehicles</h1>
            <table className="table-auto border-2 mx-2">
                <thead>
                    <tr className="border-2">
                        {col.map((column, index) => (
                            <th key={index} className="border-2 border-gray-300 p-1">{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle, index) => (
                        <tr key={index}>
                            <td className="border-2 border-gray-300 p-1">{vehicle}</td>
                            <td className="border-2 border-gray-300 p-1">
                                <select className="border-2 rounded-none p-1" id={`Yes/No-${vehicle}-${index}`} defaultValue="" onChange={(e) => handleChange(e, index ,'select')}>
                                    <option value="" disabled>Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1 className="m-2"> Vehicle Details</h1>
            <table>
                <thead>
                    <tr className="border-2">
                        {col2.map((column, index) => (
                            <th key={index} colSpan={4} className="border-2 border-gray-300 p-1">{column}</th>
                        ))}
                    </tr>

                    <tr className="border-2">
                        {subHeading.map((column, index) => (
                            <React.Fragment key={`heading_${index}`}>
                                <th key={`Two-wheeler_${index}`} className="border-2 border-gray-300 p-1">{column}</th>
                                <th key={`car_${index}`} className="border-2 border-gray-300 p-1">{column}</th>
                                <th key={`other_${index}`} className="border-2 border-gray-300 p-1">{column}</th>
                            </React.Fragment>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[...Array(3)].map((_, rowIndex) => (
                        <tr key={`row_${rowIndex}`} className='border-2'>
                            {[...Array(12)].map((_, colIndex) => {
                                // Determine the parent heading based on colIndex
                                let parentHeading;
                                if (colIndex >= 0 && colIndex <= 3) {
                                    parentHeading = 'Two-wheeler';
                                } else if (colIndex >= 4 && colIndex <= 7) {
                                    parentHeading = 'car';
                                } else {
                                    parentHeading = 'other';
                                }
                                return (
                                    <th key={`row_${rowIndex}_col_${colIndex}`} className={`border-r-2 ${colIndex % 4 === 0 ? '' : 'border-gray-300'}`}>
                                        <input
                                            id={`Vehicle_Details-${parentHeading}-${subHeading[colIndex % 4]}-${rowIndex}`}
                                            type={colIndex % 4 === 0 ? 'text' : 'number'}
                                            onChange={(e) => handleChange(e, rowIndex, 'Comment')}
                                        />
                                    </th>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
        
        
    );
}

export default OwnVehicle;
