import React, { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const CustomFilter = ({searchInput, setSearchInput, parameter}) => {
  const [selected, setSelected] = useState(parameter[0])//
  const filteredLocation =
  searchInput === ''
    ? parameter
    : parameter.filter((location) =>
        location.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(searchInput.toLowerCase().replace(/\s+/g, ''))
      )
  return (
    <div className='sm:mt-0 mt-5'>
      <Combobox value={selected} onChange={setSelected}>
      <div className="relative ">
    <Combobox.Input className='w-full h-[45px] rounded-lg sm:ml-[-10%] ml-0 pl-4 shadow'
    displayValue={(location) => location.name}
    onChange={(event) => setSearchInput(event.target.value)}/>
      <Combobox.Button className="absolute inset-y-0 right-0 pr-8">
      <ChevronUpDownIcon
        className="h-5 w-5 text-gray-400"
        aria-hidden="true"
      />
    </Combobox.Button>
    </div>
    <Transition
    as={Fragment}
    leave="transition ease-in duration-100"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    afterLeave={() => setSearchInput(searchInput)}
  >
    <Combobox.Options className="absolute mt-1 max-h-60 sm:w-[200px] w-[80%] sm:ml-[-1.5%] ml-0 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
      {filteredLocation.length === 0 && searchInput !== '' ? (
        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
          Not Found
        </div>
      ) : (
        filteredLocation.map((location) => (
          <Combobox.Option
            key={location.id}
            className={({ active }) =>
              `relative cursor-default select-none py-2 pl-10 pr-4 right-0 ${
                active ? 'bg-primary text-white' : 'text-gray-900'
              }`
            }
            value={location}
          >
            {({ selected, active }) => (
              <>
                <span
                  className={`block truncate ${
                    selected ? 'font-medium' : 'font-normal'
                  }`}
                >
                  {location.name}
                </span>
                {selected ? (
                  <span
                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                      active ? 'text-white' : 'text-teal-600'
                    }`}
                  >
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                ) : null}
              </>
            )}
          </Combobox.Option>
        ))
      )}
    </Combobox.Options>
  </Transition>
    </Combobox></div>
  )
}

export default CustomFilter