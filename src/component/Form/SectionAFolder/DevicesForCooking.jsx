import React from 'react';

function DevicesForCooking({ handleChange }) {
    const devices = [
        'LPG stove',
        'Induction cooker',
        'Electric Heater',
        'Microwave oven',
        'Clay stove',
        'Perisod stove',
        'Wood stove',
        'Sawdust stove',
        'Other handy stove',
        'Thermos boxes'
    ];

    return (
        <div className="flex ">
            <div className='Devices used for cooking border-1 border-black py-2 px-2 mx-2'>
                <h1 className='text-lg font-medium mb-4 mt-2'>3. Devices used for cooking</h1>
                <table className='m-auto'>
                    <thead>
                        <tr className='border-2'>
                            <th className='border-r-2'>Devices</th>
                            <th className='border-r-2 px-2'>Yes/No</th>
                            <th className='border-r-2'>Age</th>
                            <th className='border-r-2'>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {devices.map((device, index) => (
                            <tr key={index} className='border-2'>
                                <th className='border-r-2'>{device}</th>
                                <td className='border-r-2'>
                                    <select
                                        id={`Yes/No-${device}-${index}`}
                                        onChange={(e) => handleChange(e, index, 'Select')}
                                        defaultValue=""
                                        className="border-2 rounded-none p-1"
                                    >
                                        <option value="" disabled>Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td className='border-r-2'>
                                    <input
                                        type="number"
                                        id={`age-${device}-${index}`}
                                        onChange={(e) => handleChange(e, index, 'Age')}
                                        className="border-2 rounded-none p-1"
                                    />
                                </td>
                                <td className='border-r-2'>
                                    <input
                                        type="text"
                                        id={`comment-${device}-${index}`}
                                        onChange={(e) => handleChange(e, index, 'Comment')}
                                        className="border-2 rounded-none p-1"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DevicesForCooking;
