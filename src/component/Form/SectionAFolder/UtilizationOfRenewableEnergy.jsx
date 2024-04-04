import React from 'react';

function UtilizationOfRenewableEnergy({ handleChange }) {
    const devices = [
        'Solar power plant',
        'Solar light system',
        'Solar lantern',
        'Solar Water Heater',
        'Solar cooker',
        'Solar water pump',
        'Bio gas plant',
        'Other devices utilizes renewable energy'
    ];


    return (
        <div className="flex ">
            <div className='Devices used for cooking border-1 border-black py-2 px-2 mx-2'>
                <h1 className='text-lg font-medium mb-4 mt-2'>4. Utilization of renewable energy</h1>
                <table className='m-auto'>
                    <thead>
                        <tr className='border-2'>
                            <th className='border-r-2'>Devices</th>
                            <th className='border-r-2 px-2'>Yes/No</th>                         
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

export default UtilizationOfRenewableEnergy;
