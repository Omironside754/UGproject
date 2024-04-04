import React, { useState } from 'react';

function TransportQuestion({ handleChange }) {
    const [usePublicTransport, setUsePublicTransport] = useState('');
    const [reason, setReason] = useState('');

    const handleSelectChange = (e) => {
        const value = e.target.value;
        setUsePublicTransport(value);

        // Call the handleChange function passed from the parent component
        handleChange(e);

        // Reset the reason if the user changes their answer to 'Yes'
        if (value === 'Yes') {
            setReason('');
        }
    };

    const handleReasonChange = (e) => {
         handleChange(e);
        setReason(e.target.value);
    };

    return (
        <div className='mx-2 m-4 border-2'>
            <label className='pr-2 p-2'>Do you use public transport? </label>
            <select className='border-2 px-2' value={usePublicTransport} onChange={handleSelectChange} id='Do you use public transport?'>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            {usePublicTransport === 'No' && (
                <div>
                    <label className='pr-2 p-2'>If No, why not? </label>
                    <input
                        className='mx-2 border-2 px-2'
                        type="text"
                        value={reason}
                        id ='why not public transport'
                        onChange={handleReasonChange}
                        placeholder="Enter reason"
                    />
                </div>
            )}
        </div>
    );
}

export default TransportQuestion;
