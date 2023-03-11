import React, { useState, useReducer, useEffect } from 'react';
import NameInput from './form/NameInput';
import DescriptionText from './form/DescriptionText';
import TypeRadio from './form/TypeRadio';
import DateSelector from './form/DateSelector'
import UserPercentageMenu from './form/UserPercentageMenu';
import Variants from './form/Variants';
import Buttons from './form/Buttons';
import FormSuccessNotification from './form/FormSuccessNotification'
import experimentService from '../services/experimentService';
import formUtils from '../utils/formUtils';

const Form = ({ currentExperiments, scheduledFeatures, experimentChange, setExperimentChange }) => {
  const currentDate = new Date();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(null);
  const [percentageObj, setPercentageObj] = useState({});
  const [query, setQuery] = useState(''); // for UserPercentageMenu--it's a tailwind thing
  const [maxAvailable, setMaxAvailable] = useState(null);
  const [type, dispatch] = useReducer(formUtils.typeSelector, 1)
  const [experimentObj, setExperimentObj] = useState(null);
  const [showVariants, setShowVariants] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (type === 3 && (percentageObj.id * 100) > maxAvailable) {
      alert(`The total user percentage for experiments in this date period exceeds 100%. Please select a user percentage less than %{maxAvailable}`);
      return;
    }
    const featureObj = {
      name: name,
      description: description,
      type_id: type,
      start_date: startDate.toISOString(),
      end_date: endDate.toISOString(),
      user_percentage: percentageObj.id
    };

    try {
      const response = await experimentService.createExperiment(featureObj);
      console.log(response);
      if (type === 3) {
        setExperimentObj(response);
        setShowVariants(true);
      }
      setName("");
      setDescription("");
      dispatch({type: "1"});
      setStartDate(currentDate);
      setEndDate(null);
      setPercentageObj({});
      setQuery("");
      setFormSuccess(true);
      setExperimentChange(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <FormSuccessNotification formSuccess={formSuccess} setFormSuccess={setFormSuccess} />
    { showVariants
      ?  <Variants
            experimentObj={experimentObj}
            setExperimentObj={setExperimentObj}
            setShowVariants={setShowVariants}
            setExperimentChange={setExperimentChange}
          />
      : <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h3 className="text-base font-semibold leading-6 text-gray-900">Create Feature</h3>
      <p className="mt-1 text-sm text-gray-500">
        Enter details for your new toggle, roll-out, or experiment here.
      </p>
      <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <NameInput
                name={name}
                setName={setName}
              />
              <DescriptionText
                description={description}
                setDescription={setDescription}
              />
              <TypeRadio
                type={type}
                dispatch={dispatch}
              />
              <DateSelector
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                currentDate={currentDate}
                type={type}
                scheduledFeatures={scheduledFeatures}
                currentExperiments={currentExperiments}
                maxAvailable={maxAvailable}
                setMaxAvailable={setMaxAvailable}
              />
              <UserPercentageMenu
                percentageObj={percentageObj}
                setPercentageObj={setPercentageObj}
                query={query} setQuery={setQuery}
                type={type}
                maxAvailable={maxAvailable}
                endDate={endDate}
              />
            </div>

          </div>
          <Buttons
              setName={setName}
              setDescription={setDescription}
              dispatch={dispatch}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setPercentageObj={setPercentageObj}
              currentDate={currentDate}
              setQuery={setQuery}
            />
        </div>
      </form>
      </div>
    }
    </>
  )
};

export default Form;