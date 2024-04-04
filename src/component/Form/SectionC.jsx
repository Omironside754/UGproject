import React from 'react';

const SectionC = ({ handleChange }) => {
    const places = ['Varanda', 'Living Room', 'Bedroom', 'Bathroom', 'Reading Room', 'Dining Room', 'Kitchen', 'Work Area', 'Store Room'];
    const columns = ['S.NO', 'Places', 'CFL', 'Incondescent Lamp', 'Tube Light', 'LED Bulb'];
    const appliances = [
        { name: 'CFL', options: ['7w', '11w', '15w', '18w', '22w'] },
        { name: 'Incondescent Lamp', options: ['15', '25', '40', '60', '100'] },
        { name: 'Tube Light', options: ['T12', 'T8', 'T5', 'LED'] },
        { name: 'LED Bulb', options: ['5w', '9w'] }
    ];
    return (
        <table className="table-auto border-2">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index} className="border-4 border-gray-300 text-center">{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {places.map((place, index) => (
                    <tr key={index}>
                        <td className="border-3">{index + 1}</td>
                        <td className="border-3">{place}</td>
                        {appliances.map((appliance, colIndex) => (
                            <td className='border-3' key={colIndex}>
                                <div className='flex'>
                                    <select className='mx-4 border-2 rounded-none' id={`${appliance.name}-${index}`} onChange={handleChange}>
                                        <option value="" disabled selected>Select Option</option>
                                        {appliance.options.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                    <input type="number" className='border-2 rounded-none' id={`${appliance.name}-time-${index}`} onChange={handleChange} placeholder="Time(Hr)" />
                                </div>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SectionC;
