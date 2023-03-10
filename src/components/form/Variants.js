/*
in main form that has experimentCreatedId state, default nulll
in form submit:
if type === 3
set ExperimentCreatedId to the id on the experiment object returned

in form logic, have if !experimentCreatedId show what we show now;
have experimentCreatedId show variant form, pass experimentCreatedId, setExperimentCreatdId to variant

inside of variant, when submit, setExperimentCreatedId to null

In addition to "submit" and "reset" have "delete experiment" and "switch to toggle" and "switch to roll-out"
*/

import { useState } from 'react';

const Variants = ({ experimentId, experimentName }) => {
  const [values, setValues] = useState({ "0": "Control"})
  const [weights, setWeights] = useState({"0": 1});

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  console.log("id", experimentId, "name", experimentName);

  const handleAddVariant = (event) => {
    event.preventDefault();
  }

  const handleChangeValue = (event) => {
    event.preventDefault();
    const id = event.target.id;

    const updatedValues = {
      ...values,
      [id]: event.target.value,
    }

    console.log("values", values);
    console.log("updatedvalue", updatedValues);

    setValues(updatedValues);
  }
  /*
  value, experiment_id, is_control, weight
  for form, just need value (text) and weight (menu), and
  delete Variant button (there will just be one add variant button
  at the bottom)
  */

  // will need line that displays % available for new variants
  return (

<form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
      <div className="space-y-8 divide-y divide-gray-200">

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

          <h3 className="text-base font-semibold leading-6 text-gray-900">Variant Details</h3>
      <p className="text-sm text-gray-500">Use this variant as the control for your experiment.</p>
      <div>
        <h2 className="text-base font-semibold leading-6 text-gray-900">Control</h2>
        <fieldset>
        <label htmlFor="value-0" className="block text-sm font-medium leading-6 text-gray-900">
          Variant Value
        </label>
        <div className="mt-2">
        <input
          type="value-0"
          name="value-0"
          id="0"
          value={values["0"] || ""}
          onChange={handleChangeValue}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          required={true}
        />
      </div>
      </fieldset>
      <fieldset>
        <label htmlFor="value-1" className="block text-sm font-medium leading-6 text-gray-900">
          Variant Value
        </label>
        <div className="mt-2">
        <input
          type="value-1"
          name="value-1"
          id="1"
          value={values["1"] || ""}
          onChange={handleChangeValue}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          required={true}
        />
      </div>
      </fieldset>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleAddVariant}
        >
          Create Additional Variant
        </button>
      </div>
      </form>
  );
};

export default Variants;