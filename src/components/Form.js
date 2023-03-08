import React, { useState } from 'react';
import NameInput from './form/NameInput';
import DescriptionText from './form/DescriptionText';
import TypeRadio from './form/TypeRadio';
import DateSelector from './form/DateSelector'
import UserPercentageMenu from './form/UserPercentageMenu';

const Form = () => {
  const currentDate = new Date();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState(1);
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(null);
  const [percentageObj, setPercentageObj] = useState({ id: 0.05, name: "5%" });
  const [query, setQuery] = useState('') // for UserPercentageMenu--it's a tailwind thing

  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <NameInput name={name} setName={setName} />
            <DescriptionText description={description} setDescription={setDescription} />
            <TypeRadio type={type} setType={setType} />
            <DateSelector startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} currentDate={currentDate} />
            <UserPercentageMenu percentageObj={percentageObj} setPercentageObj={setPercentageObj} query={query} setQuery={setQuery} />

          </div>
        </div>
      </div>
      <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
      </div>
    </form>
  )
};

export default Form;
