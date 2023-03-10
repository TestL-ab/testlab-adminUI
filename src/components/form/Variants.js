import { useState } from 'react';
import VariantForm from './VariantForm';
import experimentService from '../../services/experimentService';
import formUtils from '../../utils/formUtils';

const Variants = ({ experimentObj, setExperimentObj, setShowVariants }) => {
  const [variantObj1, setVariantObj1] = useState({ is_control: true, value: "", weight: "" });
  const [variantObj2, setVariantObj2] = useState({ value: "", weight: "" });
  const [variantObj3, setVariantObj3] = useState({ value: "", weight: "" });
  const [variantObj4, setVariantObj4] = useState({ value: "", weight: "" });
  const [variantObj5, setVariantObj5] = useState({ value: "", weight: "" });

  const experimentName = experimentObj ? experimentObj.name : "Default Test Name for Dev Need to Change code for production";
  const experimentId = experimentObj ? experimentObj.id : 98;

  /*

//NEED LOGIC TO ENFORCE USER PERCENT!!
// have to enforce only 1-100 input

  */
  const handleChangedValue = (event) => {
    event.preventDefault();
    const id = event.target.id.split('-').pop();
    console.log(id);
    switch(id) {
      case "1":
        const updatedObj1 = {
          ...variantObj1,
          value: event.target.value,
        }
        setVariantObj1(updatedObj1)
        break;
      case "2":
        const updatedObj2 = {
          ...variantObj2,
          value: event.target.value,
        }
        setVariantObj2(updatedObj2)
        break;
      case "3":
        const updatedObj3 = {
          ...variantObj3,
          value: event.target.value,
        }
        setVariantObj3(updatedObj3)
        break;
      case "4":
        const updatedObj4 = {
          ...variantObj4,
          value: event.target.value,
        }
        setVariantObj4(updatedObj4)
        break;
      case "5":
        const updatedObj5 = {
          ...variantObj5,
          value: event.target.value,
        }
        setVariantObj5(updatedObj5)
        break;
    }
  };

  const handleChangedWeight = (event) => {
    event.preventDefault();
    const id = event.target.id.split('-').pop();

    switch(id) {
      case "1":
        const updatedObj1 = {
          ...variantObj1,
          weight: event.target.value,
        }
        setVariantObj1(updatedObj1)
        break;
      case "2":
        const updatedObj2 = {
          ...variantObj2,
          weight: event.target.value,
        }
        setVariantObj2(updatedObj2)
        break;
      case "3":
        const updatedObj3 = {
          ...variantObj3,
          weight: event.target.value,
        }
        setVariantObj3(updatedObj3)
        break;
      case "4":
        const updatedObj4 = {
          ...variantObj4,
          weight: event.target.value,
        }
        setVariantObj4(updatedObj4)
        break;
      case "5":
        const updatedObj5 = {
          ...variantObj5,
          weight: event.target.value,
        }
        setVariantObj5(updatedObj5)
        break;
    }
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const variantArr = formUtils.processVariantData([variantObj1,
                                                     variantObj2,
                                                     variantObj3,
                                                     variantObj4,
                                                     variantObj5]);

    if (!formUtils.validVariantWeights(variantArr) || !formUtils.distinctVariantValues(variantArr)) {
      return;
    }

    let variantsObj = { id: experimentId, variants: variantArr };
    try {
      console.log(variantsObj);
      // const response = await experimentService.createVariants(experimentId, variantsObj)
      setExperimentObj(null);
      setShowVariants(false);
      setVariantObj1({ is_control: true, value: "", weight: "" });
      setVariantObj2({ value: "", weight: "" });
      setVariantObj3({ value: "", weight: "" });
      setVariantObj4({ value: "", weight: "" });
      setVariantObj5({ value: "", weight: "" });
    }
    catch (error) {
      console.log(error);
    }
  };

  const handleDeleteExperiment = async (event) => {
    event.preventDefault();
    // NEED MODAL TO POP UP CONFRIMING, ASK IF WANT TO SWITCH TO TOGGLE OR ROLL-OUT
    try {
      let response = await experimentService.deleteExperiment(experimentId);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // will need line that displays % available for new variants
  /// those subcomponents will need string num 2-5 and variantObj2 or whatever
  return (
    <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
      <div>
        <h3 className="text-base font-semibold leading-6 text-gray-900">Create Variants for {experimentName}</h3>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
            <p className="mt-1 text-sm text-gray-500">Enter details for your control variant here.</p>
              <label htmlFor="value-1" className="block text-sm font-medium leading-6 text-gray-900">
                Control Variant Value
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="value-1"
                  id="value-1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={variantObj1.value}
                  onChange={handleChangedValue}
                  required={true}
                />
              </div>
            <div className="sm:col-span-3">
              <label htmlFor="weight-1" className="block text-sm font-medium leading-6 text-gray-900">
                Control User Percentage
              </label>
              <p className="mt-1 text-sm text-gray-500">Enter only integers between 1-100.</p>
              <div className="mt-2">
                <input
                  type="text"
                  name="weight-1"
                  id="weight-1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={variantObj1.weight}
                  onChange={handleChangedWeight}
                  required={true}
                />%
              </div>
            </div>
          </div>
      </div>
      <VariantForm
        num="2"
        variantObj={variantObj2}
        handleChangedValue={handleChangedValue}
        handleChangedWeight={handleChangedWeight}
      />
      <div className="pt-5">
        <div className="flex justify-start">
          <button
            type="submit"
            className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Submit Variants
          </button>

        </div>
        <div className="pt-5">
        <p className="mt-1 text-sm text-gray-500">All experiments are required to have variants.  If you do not wish to create variants at this time, you may delete the experiment or switch the experiment type to a roll-out (enrolling the same user percentage specified for the experiment in this feature), or a toggle (enrolling all users in this feature).</p>
        <button
          type="button"
          className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleDeleteExperiment}
        >
          Delete Experiment
        </button>
        <button
          type="button"
          className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Change to Roll Out
        </button>
        <button
          type="button"
          className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Change to Toggle
        </button>
      </div>
      </div>
    </form>
)
};

export default Variants;