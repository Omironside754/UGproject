import React from 'react'
const col = ['Questions', 'yes/No'];
const questions = [
    "Do you switch off the light after use?",
    "Do you use council, thermos box etc Food cooking?",
    "Have you heard about Energy Management Center and ANERT which works on energy conservation and renewable energy?",
    "Have you heard about LED bulbs, BLDC fans and inverter refrigerators which consume less energy than conventional lights, fans and refrigerators?",
    "If energy efficient appliances like the above are given to you with the help of a loan, are you willing to pay it back in installments?",
    "Do you know about star labeling?"
];

function AwarenessForEnergyConsumption({ handleChange }) {
    return (
        <div className='mx-2 border-2'>
            <h1>6. Awareness For Energy Consumption</h1>
            <table>
                <thead>
                    <tr className="border-2">
                        {col.map((column, index) => (
                            <th key={index} className="border-2 border-gray-300 p-1">{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question, index) => (
                        <tr key={index}>
                            <td className="border-2 border-gray-300 p-1">{question}</td>
                            <td className="border-2 border-gray-300 p-1">
                                <select className="border-2 rounded-none p-1" id={`AwarenessForEnergyConsumption-${questions[index]}`} defaultValue="" onChange={(e) => handleChange(e, index, 'select')}>
                                    <option value="" disabled>Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AwarenessForEnergyConsumption