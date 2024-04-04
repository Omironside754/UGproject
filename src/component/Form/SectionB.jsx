// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import SectionA from './SectionA';
import OhtertypeQn from './questions/OhtertypeQn';
import SectionC from './SectionC';
import SectionTable2 from './SectionTable2';
import SectionCTable3 from './SectionCTable3';

import FuelConsumption from './SectionAFolder/FuelConsumption';
import DevicesForCooking from './SectionAFolder/DevicesForCooking';
import UtilizationOfRenewableEnergy from './SectionAFolder/UtilizationOfRenewableEnergy';
import OwnVehicle from './SectionAFolder/OwnVehicle.JSX';
import AwarenessForEnergyConsumption from './AwarenessForEnergyConsumption';
import TransportQuestion from './transportQuestion';
const SectionB = () => {
    const [formData, setFormData] = useState({});
    const pets = ['cow', 'bowl', 'buffalo', 'book boat', 'big six', 'dog', 'chicken', 'duck', 'others'];
    const handleChange = (e) => {
        setFormData(prevFormData => {
            const updatedFormData = {
                ...prevFormData,
                [e.target.id]: e.target.value,
            };
            console.log(updatedFormData);
            return updatedFormData;
        });
    };

    return (

        <form className="flex flex-col">
            <SectionA handleChange={handleChange} />
            <FuelConsumption handleChange={handleChange} />
            <DevicesForCooking handleChange={handleChange} />
            <UtilizationOfRenewableEnergy handleChange={handleChange} />
            <OwnVehicle handleChange={handleChange} />
            <TransportQuestion handleChange={handleChange}/>
            <AwarenessForEnergyConsumption handleChange={handleChange} />

            <h1 className="text-2xl font-bold text-center mb-4">SECTION-B</h1>
            <h2 className="text-xl text-center mb-2">Carbon Neutral</h2>
            <p className="text-center mb-4">Household level service on solid liquid waste</p>

            <label className='ml-6'>
                1. Type of house
                <select className='mx-4 border-2 rounded-none' id="houseType" onChange={handleChange}>
                    <option value="independent">Independent</option>
                    <option value="colony">Colony</option>
                    <option value="quarters">Quarters</option>
                    <option value="other">Other</option>
                </select>
            </label>

            <label className='ml-6'>
                2. House ownership
                <select className='mx-4 border-2 rounded-none' id="houseOwnership" onChange={handleChange}>
                    <option value="own">Own</option>
                    <option value="rent">Rent</option>
                    <option value="other">Other</option>
                </select>
            </label>

            <label className='ml-6'>
                3. Does the house have a roof?
                <select className='mx-4 border-2 rounded-none' id="houseRoof" onChange={handleChange}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </label>

            <label className='ml-6'>
                4 . Waste Material
                <div className="overflow-x-auto mx-3">
                    <table className="table-auto border-collapse border-2 border-gray-500 w-full">
                        <thead>
                            <tr>
                                <th className="border-r-2  text-center">S.no</th>
                                <th className="border-r-2 text-center">Waste Material</th>
                                <th colSpan="4" className="border-2 text-center">Quantity (numbers / weight / volume)</th>
                                <th className="text-center">Waste management method* (B, Br, R, C, F, Bg, O)</th>
                            </tr>
                            <tr>
                                <th className="border-r-2 border-b-2 text-center"></th>
                                <th className=" border-b-2  text-center"></th>
                                <th className="border-2 text-center">One Day</th>
                                <th className="border-2 text-center">1 week</th>
                                <th className="border-2 text-center">1 month</th>
                                <th className="border-2 text-center">1 year</th>
                                <th className="border-b-2  text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                "plastic carry bag",
                                "plastic bag",
                                "disposable cup",
                                "disposable plates",
                                "Grass",
                                "milk cover",
                                "oil cover",
                                "ice cream cup/cold drink",
                                "Light drink (PET) bottles",
                                "candy wrapper",
                                "grocery packet",
                                "Multilayered (chips/ledges etc.)",
                                "tea, spice packets",
                                "Toothpaste tube",
                                "Toothbrush",
                                "packet of biscuits",
                                "paan/tobacco packets",
                                "tetra packet",
                                "Tetra Pak Plates",
                                "plastic bucket",
                                "baby diapers",
                                "sanitary napkin",
                                "adult diaper",
                                "series",
                                "plastic lunch box",
                                "plastic water bottles",
                                "plastic shoes",
                                "plastic rexine bag",
                                "foam bed",
                                "plastic toys",
                                "plastic milk bottles",
                                "plastic ware",
                                "plastic bottles (pesticides)",
                                "shampoo sachet",
                                "face cream tube",
                                "Newspaper",
                                "magazine",
                                "cardboard boxes",
                                "Notebook",
                                "aluminum cans",
                                "Aluminum bottles (pesticides)",
                                "Spray cans (body spray)",
                                "spray cans (insecticide)",
                                "glass bottles",
                                "light bulb",
                                "Tube light",
                                "cfl",
                                "batteries",
                                "biodegradable waste",
                                "clothes (in pairs)",
                                "sacks (jute)"
                            ]
                                .map((item, index) => (
                                    <tr key={index} className="border-2 text-center">
                                        <td className="border-2">{index + 1}</td>
                                        <td className="border-2">{item}</td>
                                        <td className="border-2"><input type="text" id={`oneDay${index}`} onChange={handleChange} /></td>
                                        <td className="border-2"><input type="text" id={`oneWeek${index}`} onChange={handleChange} /></td>
                                        <td className="border-2"><input type="text" id={`oneMonth${index}`} onChange={handleChange} /></td>
                                        <td className="border-2"><input type="text" id={`oneYear${index}`} onChange={handleChange} /></td>
                                        <td className="border-2"><input type="text" id={`wasteManagement${index}`} onChange={handleChange} /></td>
                                    </tr>
                                ))}
                        </tbody>

                    </table>

                </div>
            </label>
            <div className='mx-4'>
                <p className=' mb-1'>5. Water consumption</p>
                <label className='ml-6'>
                    a. Agriculture (Source)
                    <select className='mx-4 border-2 rounded-none' id="agricultureSource" onChange={handleChange}>
                        <option value="pipe">Pipe</option>
                        <option value="well">Well</option>
                        <option value="pond">Pond</option>
                        <option value="canal">Canal</option>
                        <option value="others">Others</option>
                    </select>
                </label>

                <label className='ml-6'>
                    b. Domestic consumption (source)
                    <select className='mx-4 border-2 rounded-none' id="domesticConsumptionSource" onChange={handleChange}>
                        <option value="pipe">Pipe</option>
                        <option value="well">Well</option>
                        <option value="pond">Pond</option>
                        <option value="nahan">Nahan</option>
                        <option value="others">Others</option>
                    </select>
                </label>
            </div>
            <OhtertypeQn handleChange={handleChange} />
            <table className='ml-6 mt-4 border-2 border-collapse'>
                <thead>
                    <tr>
                        <th className='border-2 text-center'>Serial Number</th>
                        <th className='border-2 text-center'>Domestic Bids</th>
                        <th className='border-2 text-center'>Quantity</th>
                        <th className='border-2 text-center'>Centre for your pets (Pakka, Kacha, or open)</th>
                        <th className='border-2 text-center'>How do you manage your pet's waste (Waste dumping like a fertiliser or you just throw it in sever?)</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet, index) => (
                        <tr key={index}>
                            <td className='border-2'>{index + 1}</td>
                            <td className='border-2'>{pet}</td>
                            <td className='border-2'><input type='number' id={`quantity${index}`} onChange={handleChange} /></td>
                            <td className='border-2'><input type='text' id={`centre${index}`} onChange={handleChange} /></td>
                            <td className='border-2'><input type='text' id={`wasteManagement${index}`} onChange={handleChange} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <div className="mt-4">
                <div className='ml-6'>
                    <label>
                        1. Do you separate your garbage at home?
                        <select className='mx-4 border-2 rounded-none' id="garbageSeparation" onChange={handleChange}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                </div>

                <div className='ml-6'>
                    <label>
                        2. Do ragpickers come to your house?
                        <select className='mx-4 border-2 rounded-none' id="ragpickers" onChange={handleChange}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                </div>

                <div className='ml-6'>
                    <label>
                        3. Is there a problem of mosquitoes in your house?
                        <select className='mx-4 border-2 rounded-none' id="mosquitoes" onChange={handleChange}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                </div>

                <div className='ml-6'>
                    <label>
                        4. In which month do mosquitoes affect the most?
                        <input className='mx-4 border-2 rounded-none' id="mosquitoesMonth" onChange={handleChange} />
                    </label>
                </div>

                <div className='ml-6'>
                    <label>
                        5. Have you heard about Carbon Neutral Meenangadi Project?
                        <select className='mx-4 border-2 rounded-none' id="meenangadiProject" onChange={handleChange}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                </div>

                <div className='ml-6'>
                    <label>
                        6. Have you heard about the Carbon Neutral Hasuri Ausanpur Project?
                        <select className='mx-4 border-2 rounded-none' id="hasuriAusanpurProject" onChange={handleChange}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                </div>

                <div className='ml-6'>
                    <label>
                        7. What do you think about the said project? Please provide a descriptive answer below.
                        <textarea className='mx-4 border-2 rounded-none' id="projectOpinion" onChange={handleChange} />
                    </label>
                </div>
            </div>
            <div className='m-3 '>
                <h1 className="text-center font-bold m-8 text-2xl">SECTION C</h1>
                <h1 className="text-center font-bold  text-xl">Energy Consumption Form for Households</h1>
                <h1 className="font-bold text-l">1. Details of devices used for Lighting:</h1>
                <SectionC handleChange={handleChange} />
            </div>
            <div className='m-3'>

                <SectionTable2 handleChange={handleChange} />
                <ul className="list-disc ml-8 mt-4">
                    <li>RR - Resistive Regulator</li>
                    <li>ER - Electronic Regulator</li>
                    <li>NR - No Regulator</li>
                    <li>SL - With Star Label</li>
                    <li>PF - Pedestal Fan</li>
                    <li>WF - Wall Fan</li>
                    <li>INV - Inverter</li>
                </ul>
            </div>
            <div>
                <SectionCTable3 handleChange={handleChange} />
            </div>


            <div className="mt-4">

                <CSVLink data={[formData]} filename="SectionB.csv">
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Export to CSV
                    </button>
                </CSVLink>
            </div>

        </form>
    );
};

export default SectionB;
