// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const householdFields = [
  { label: 'Name', type: 'text', id: 'HouseHoldDetail-Name', placeholder: 'Name' },
  { label: 'House.No.', type: 'text', id: 'HouseHoldDetail-HN', placeholder: 'H.N0.' },
  { label: 'Place', type: 'text', id: 'HouseHoldDetail-place', placeholder: 'Enter Place' },
  { label: 'Area', type: 'number', id: 'HouseHoldDetail-area1', placeholder: 'Area in sq.mts' },
  { label: 'Mobile No.', type: 'text', id: 'HouseHoldDetail-mono', placeholder: '999....' },
  { label: 'Telephone No', type: 'text', id: 'HouseHoldDetail-phno', placeholder: '6215....' },
  { label: 'Landline', type: 'number', id: 'HouseHoldDetail-land', placeholder: '5664....' },
  { label: 'Address', type: 'text', id: 'HouseHoldDetail-add', placeholder: 'Enter Place' },
  { label: 'Annual Income', type: 'number', id: 'HouseHoldDetail-income', placeholder: 'Enter the family\'s annual income' }

];

const electricFields = [
  { label: 'Consumer No', type: 'number', id: 'ElecSec.Consumer No', placeholder: '123...' },
  { label: 'Connected Load', type: 'number', id: 'ElecSec.Connected Load', placeholder: '1,2,3...' },
  { label: 'Avg Unit (in watt)', type: 'number', id: 'ElecSec.Avg Unit (in watt)', placeholder: '100...' },
  { label: 'Current Monthly Consumption', type: 'number', id: 'ElecSec.Current Monthly Consumption', placeholder: '' },
  { label: 'Gross Bill', type: 'number', id: 'ElecSec.Gross Bill', placeholder: '' },
];

export default function SectionA({ handleChange }) {
  return (
    <div className="border-b border-gray-900/10 pb-12 lg:pr-28 lg:pl-28 lg:m-12">
      <h2 className=" text-2xl text-center font-semibold leading-7 text-gray-900 ">SECTION A</h2>
      <p className="mt-1 text-center text-sm leading-6 text-gray-600">
        Energy audit form for families
      </p>

      <div className="mt-10">
        <div className="">
          <div className="mt-1">
            <div className="flex sm:max-w-md">
              <label htmlFor="idCode" className="block text-xl leading-6 text-gray-900 px-3">
                ID Code
              </label>
              <input
                type="number"
                name="idCode"
                id="idCode"
                onChange={handleChange}
                className="block flex-1  bg-transparent border-1  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <h1 className='text-lg  font-medium mb-1'> 1.<span>  House Hold Details</span> </h1>

        <div className="householdDetail d-block border-1 border-black pt-16 px-2 mx-2 ">
          <div className='lg:flex justify-around'>
            <div className='HouseHold Details flex flex-col'>

              {householdFields.map((field, index) => (
                <div key={index} className="flex mb-3">
                  <label htmlFor={field.id} className='mr-3 flex-1'>{field.label}</label>
                  <input className='border-2 pl-2 flex-1' type={field.type} id={field.id} placeholder={field.placeholder} onChange={handleChange} />
                </div>
              ))}

            </div>

            <div className='Electric Section '>
              <h1 className='text-center font-semibold text-lg border-1 border-black mb-4'>Electric Section</h1>

              <div className='border-1 border-black p-4 mb-4'>
                {electricFields.map((field, index) => (
                  <div key={index} className="flex mb-3">
                    <label htmlFor={field.id} className='mr-3 flex-1'>{field.label}</label>
                    <input className='border-2 pl-2 flex-1' type={field.type} id={field.id} placeholder={field.placeholder} onChange={handleChange} />
                  </div>
                ))}

                <div className="mb-2">
                  <span className='mr-2'>Stage:</span>

                  <label> 1 </label>
                  <input className='border-2 ml-2 pl-2' type="checkbox" placeholder='Area in sq.mts' id='ElecSec-Stage-1' onChange={handleChange} />
                  <label> 3 </label>
                  <input className='border-2 ml-2 pl-2' type="checkbox" placeholder='Area in sq.mts' id='ElecSec-Stage-3' onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
