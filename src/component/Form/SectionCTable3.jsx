import React from 'react'

const columns = ["S.no", "places", "Air conditioner", "pump set", "pump for agriculture", "Inverter", "mobile charger power", "laptop charger Age", "modem router", "emergency light/torch", "mosquito repellent", "Setup box", "Other music instruments", "dishwasher", "non household devices"];


const places = ['Varanda', 'Living Room', 'Bedroom', 'Bathroom', 'Reading Room', 'Dining Room', 'Kitchen', 'Work Area', 'Store Room'];
const AcOptions = [0.75, 1, 1.5, 2];
const yesNoOptions = ['Yes', 'No'];
const modeOptions = ['Yes', 'No'];
const emergencyOptions = ['Yes', 'No'];
const mosquitoOptions = ['Yes', 'No'];
const setTopOptions = ['Yes', 'No'];
const otherMusicOptions = ['Yes', 'No'];
const dishOptions = ['Yes', 'No'];
const nonBolOptions = ['Yes', 'No'];
function SectionCTable3({ handleChange }) {
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
                                <select className='mx-4 border-2 rounded-none' id={`AC-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>ACtype</option> {AcOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                            <td className="border-2 border-gray-300 p-1 flex items-center">
                                <select className='mx-4 border-2 rounded-none mb-2' id={`Pump set-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>Inv</option>
                                    {yesNoOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>

                                pumpAge: <input type="number" className='border-2 rounded-none ml-2' placeholder='PumpAge' id={`pumpAge-${rowIndex}`} onChange={handleChange} />
                            </td>

                            <td className="border-2 border-gray-300 p-1  ">
                                <div className='flex'>
                                    Power:<input type="number" className='border-2 rounded-none mx-1' placeholder='watt' id={`pumpForAgri(power)-${rowIndex}`} onChange={handleChange} />
                                    Age: <input type="number" className='border-2 rounded-none mx-1' placeholder='age' id={`pumpForAgri(age)-${rowIndex}`} onChange={handleChange} />
                                </div>
                            </td>
                            <td className="border-2 border-gray-300 p-1  ">
                                <div className='flex'>
                                    Power:<input type="number" className='border-2 rounded-none mx-1' placeholder='watt' id={`Invertor(power)-${rowIndex}`} onChange={handleChange} />
                                    Age: <input type="number" className='border-2 rounded-none mx-1' placeholder='age' id={`Invertor(age)-${rowIndex}`} onChange={handleChange} />
                                </div>
                            </td>
                            <td className="border-2 border-gray-300 p-1  ">
                                <div className='flex'>
                                    Power:<input type="number" className='border-2 rounded-none mx-1' placeholder='watt' id={`MobileCharger-${rowIndex}`} onChange={handleChange} />
                                </div>
                            </td>
                            <td className="border-2 border-gray-300 p-1  ">
                                <div className='flex'>
                                    Age: <input type="number" className='border-2 rounded-none mx-1' placeholder='age' id={`LaptopCharger(age)-${rowIndex}`} onChange={handleChange} />
                                </div>
                            </td>
                            <td className="border-2 border-gray-300 p-1  ">
                                <select className='mx-4 border-2 rounded-none mb-2' id={`Modem/router-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>select</option>
                                    {yesNoOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                            <td className="border-2 border-gray-300 p-1  ">
                                <select className='mx-4 border-2 rounded-none mb-2' id={`emergencyLight-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>select</option>
                                    {yesNoOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>

                             <td className="border-2 border-gray-300 p-1  ">
                                <select className='mx-4 border-2 rounded-none mb-2' id={`Mosquito repellent-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>select</option>
                                    {yesNoOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                            <td className="border-2 border-gray-300 p-1  ">
                                <select className='mx-4 border-2 rounded-none mb-2' id={`Set up box-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>select</option>
                                    {yesNoOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                            <td className="border-2 border-gray-300 p-1  ">
                                <select className='mx-4 border-2 rounded-none mb-2' id={`Other music instrument-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>select</option>
                                    {yesNoOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                            <td className="border-2 border-gray-300 p-1  ">
                                <select className='mx-4 border-2 rounded-none mb-2' id={`Dishwasher-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>select</option>
                                    {yesNoOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                            <td className="border-2 border-gray-300 p-1  ">
                                <select className='mx-4 border-2 rounded-none mb-2' id={`Non household devices-${rowIndex}`} onChange={handleChange}>
                                    <option value="" disabled selected>select</option>
                                    {yesNoOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SectionCTable3