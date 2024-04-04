// HouseholdDetail.js
import React from 'react';

const InputField = ({ id, placeholder }) => (
    <input className='border-2 ml-2 pl-2 mb-2' type="text" id={id} placeholder={placeholder} />
);

const Label = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className='mb-2'>{children}</label>
);

const HouseholdDetail = ({handleChange}) => (
    <div className="householdDetail d-block border-1 border-black pt-16 px-2 mx-2 ">
        <div className='lg:flex justify-around'>
            <div className='HouseHold Details flex'>
                <div className="Name mb-2 flex flex-col  ">
                    <Label htmlFor="Name">Name</Label>
                    <Label htmlFor="HN">House.No.</Label>
                    <Label htmlFor="place">Place</Label>
                    <Label htmlFor="Area">Area</Label>
                    <Label htmlFor="HN">Mobile No.</Label>
                    <Label htmlFor="place">Telephone No</Label>
                    <Label htmlFor="Area">Landline</Label>
                    <Label htmlFor="place">Address</Label>
                </div>

                <div className="HN-Number mb-2 flex flex-col">
                    <InputField id='H.N0' placeholder='H.N0.'  onChange={handleChange}/>
                    <InputField id='Name' placeholder='Name'   onChange={handleChange}/>
                    <InputField id='place' placeholder='Enter Place'  onChange={handleChange}/>
                    <InputField id='area1' placeholder='Area in sq.mts'   onChange={handleChange}/>
                    <InputField id='mono' placeholder='999....'   onChange={handleChange}/>
                    <InputField id='phno' placeholder='6215....'   onChange={handleChange}/>
                    <InputField id='land' placeholder='5664....'   onChange={handleChange}/>
                    <InputField id='add' placeholder='Enter Place'   onChange={handleChange}/>
                </div>
            </div>
        </div>
    </div>
);

export default HouseholdDetail;
