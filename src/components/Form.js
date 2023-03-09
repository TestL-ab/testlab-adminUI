import React, { useState } from 'react';
import NameInput from './form/NameInput';
import DescriptionText from './form/DescriptionText';
import TypeRadio from './form/TypeRadio';
import DateSelector from './form/DateSelector'
import UserPercentageMenu from './form/UserPercentageMenu';
import Buttons from './form/Buttons';
import experimentService from '../services/experimentService';

const Form = ( {currentExperiments, scheduledFeatures }) => {
  const currentDate = new Date();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState(1);
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(null);
  const [percentageObj, setPercentageObj] = useState({ id: 0.05, name: "5%" });
  const [query, setQuery] = useState('') // for UserPercentageMenu--it's a tailwind thing

  const processExperiments = ()=> {
    let scheduledExperiments = scheduledFeatures.filter(feature => feature.type_id === 3);
    let existingExperiments = currentExperiments.concat(scheduledExperiments);
    return existingExperiments.map((experimentObj) => {
      return {
        startDate: new Date(experimentObj.start_date),
        endDate: new Date(experimentObj.end_date),
        userPercentage: experimentObj.userPercentage,
      }
    });
  }

  const existingExperimnts = processExperiments();

  const getDates = () => {
    if (!endDate || !startDate) return [];
    let dateArray = [startDate];
    console.log("startDate: ", startDate, "endDate: ", endDate);
    let currDate = startDate;

    while (currDate < endDate) {
      const dateCopy = new Date(currDate);
      currDate = dateCopy.setDate(dateCopy.getDate() + 1);

      let date = new Date(currDate);
      if (!dateArray.includes(date)) dateArray.push(date);

    }
    return dateArray;
  };

  const dateArray = getDates();
  // console.log("date array: ", dateArray);

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      setName("");
      setDescription("");
      setType(1);
      setStartDate(currentDate);
      setEndDate(null);
      setPercentageObj({ id: 0.05, name: "5%" });
      setQuery("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <NameInput name={name} setName={setName} />
            <DescriptionText description={description} setDescription={setDescription} />
            <TypeRadio type={type} setType={setType} />
            <DateSelector startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} currentDate={currentDate} />
            <UserPercentageMenu percentageObj={percentageObj} setPercentageObj={setPercentageObj} query={query} setQuery={setQuery} dateArray={dateArray}/>
          </div>
        </div>
      </div>
      <Buttons name={name} description={description} tppe={type} startDate={startDate} endDate={endDate} userPercentage={percentageObj.id} />
    </form>
  )
};

export default Form;
