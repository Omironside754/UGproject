// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const questions = [
    { id: 'rainHarvestingPit', question: 'Is there any rain harvesting pit?', type: 'yes_no' },
    { id: 'soakingPit', question: 'Is there any soaking pit?', type: 'yes_no' },
    { id: 'detergentUsageMonthly', question: 'Detergent usage-monthly', type: 'text' },
    { id: 'detergentSoapUseMonthly', question: 'Detergent Soap Use Monthly', type: 'text' },
    { id: 'bathSoapUsageMonthly', question: 'Bath Soap Use Monthly', type: 'text' },
    { id: 'laundrySoapUsageMonthly', question: 'Laundry soap usage monthly', type: 'text' },
    { id: 'lotionsMonthly', question: 'Lotions monthly', type: 'text' },
    { id: 'chemicalFertilizers', question: 'Do you use chemical fertilizers?', type: 'yes_no' },
    { id: 'chemicalPesticides', question: 'Do you use chemical pesticides?', type: 'yes_no' },
    { id: 'herbicides', question: 'Do you use herbicides?', type: 'yes_no' },
    { id: 'organicFertilizers', question: 'Do you use organic fertilizers?', type: 'yes_no' },
    { id: 'governmentScheme', question: 'Are you benefiting from any government scheme? If yes then mention the name of the scheme below:', type: 'text' },
    { id: 'television', question: 'Do you have a television?', type: 'yes_no', followUp: { id: 'televisionType', question: 'What type of television?', type: 'options', options: ['CRT screen', 'LCD', 'LED'] } },
    { id: 'desktopComputer', question: 'Do you have a desktop computer?', type: 'yes_no' },
    { id: 'laptop', question: 'Do you have a laptop?', type: 'yes_no', followUp: { id: 'laptopCount', question: 'How many?', type: 'text' } },
    { id: 'mobilePhones', question: 'Mobile phones', type: 'yes_no', followUp: { id: 'mobilePhoneCount', question: 'How many?', type: 'text' } },
    { id: 'tablets', question: 'Tablets', type: 'yes_no', followUp: { id: 'tabletCount', question: 'How many?', type: 'text' } },
    { id: 'cultivatingVegetable', question: 'Are you cultivating any vegetable?', type: 'yes_no' },
    { id: 'roofFarming', question: 'Do you use roof for farming?', type: 'yes_no' },
    { id: 'pets', question: 'Do you have any pets in your house?', type: 'yes_no' },
];

export default function OhtertypeQn({ handleChange }) {
    const [answers, setAnswers] = useState({});
   
    const handleInputChange = (id, value) => {
        handleChange({ target: { id, value } });
        setAnswers(prev => ({ ...prev, [id]: value }));
    };


    return (
        <div>
            {questions.map((q, index) => {
                return (
                    <div className='mx-4' key={q.id}>
                        <p>{index + 6}. {q.question}</p>
                        {q.type === 'yes_no' && (
                            <>
                                <div className='mx-4'>
                                    <label>
                                        <input type="radio" id={q.id} value="yes" onChange={(e) => handleInputChange(q.id, e.target.value)} /> Yes
                                    </label>
                                    <label>
                                        <input type="radio" id={q.id} value="no" onChange={(e) => handleInputChange(q.id, e.target.value)} /> No
                                    </label>
                                </div>
                            </>
                        )}
                        {q.type === 'text' && (
                            <input className='border-2 mx-3 mb-1' type="text" id={q.id} onChange={(e) => handleInputChange(q.id, e.target.value)} />
                        )}
                        {q.followUp && answers[q.id] === 'yes' && (
                            <div>
                                <p>{q.followUp.question}</p>
                                <input className='border-2 mx-3 mb-1' type="text" id={q.followUp.id} onChange={(e) => handleInputChange(q.followUp.id, e.target.value)} />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
