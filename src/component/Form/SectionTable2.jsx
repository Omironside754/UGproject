import React from 'react';

const columns = ['S.NO', 'Places', 'Fan', 'Refrigerator', 'Radio', 'Ironbox', 'Mixer', 'Washing Machine', 'Induction Cooker', 'Grinder', 'Water Heater', 'Microwave Oven'];
const places = ['Varanda', 'Living Room', 'Bedroom', 'Bathroom', 'Reading Room', 'Dining Room', 'Kitchen', 'Work Area', 'Store Room'];
const fanOptions = ['RR', 'ER', 'NR', 'SL', 'PF', 'WF'];
const refOptions = ['sl', 'inv'];
const op = ['Yes', 'No'];
function SectionTable2({ handleChange }) {
    return (
        <div>
            <table className="table-auto border-2">
                <thead>
                    <tr className="border-2">
                        {columns.map((column, index) => (
                            <th key={index} className="border-2 border-gray-300 p-1">{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {places.map((place, rowIndex) => (
                        <tr key={rowIndex}>
                            <td className="border-2 border-gray-300 p-1">{rowIndex + 1}</td>
                            <td className="border-2 border-gray-300 p-1">{place}</td>
                            <td className="border-2 border-gray-300 p-1">
                                <select className='mx-4 border-2 rounded-none' id={`fanOptions-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>type</option> {fanOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                <input type="number" className='border-2 rounded-none' id={`fanNo-${rowIndex}`} onChange={handleChange} />
                            </td>
                            <td className="border-2 border-gray-300 p-1">
                                <select className='mx-4 border-2 rounded-none' id={`refOptions-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>type</option> {refOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                <input type="number" className='border-2 rounded-none' id={`refOption-${rowIndex}`} onChange={handleChange} />
                            </td>
                            <td className='border-2'>
                                <select className='mx-4 border-2 rounded-none' id={`radio-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>Yes/No</option> {op.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                            <td className='border-2'>
                                <select className='mx-4 border-2 rounded-none' id={`Ironbox-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>Yes/No</option>
                                    {op.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                            <td className='border-2'>
                                <select className='mx-4 border-2 rounded-none' id={`Mixer-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>Yes/No</option>
                                    {op.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                            <td className='border-2'>
                                <select className='mx-4 border-2 rounded-none' id={`Washine Machine-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>Yes/No</option>
                                    {op.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                            <td className='border-2'>
                                <select className='mx-4 border-2 rounded-none' id={`Induction Cooker-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>Yes/No</option>
                                    {op.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                            <td className='border-2'>
                                <select className='mx-4 border-2 rounded-none' id={`Grinder-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>Yes/No</option>
                                    {op.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                            <td className='border-2'>
                                <select className='mx-4 border-2 rounded-none' id={`Water Heater-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>Yes/No</option>
                                    {op.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                            <td className='border-2'>
                                <select className='mx-4 border-2 rounded-none' id={`Microwave Oven-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>Yes/No</option>
                                    {op.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SectionTable2;
