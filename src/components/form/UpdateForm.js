import React, { useState, useReducer } from 'react';
import NameInput from './NameInput';
import DescriptionText from './DescriptionText';
import TypeRadio from './TypeRadio';
import DateSelector from './DateSelector'
import UserPercentageMenu from './UserPercentageMenu';
import UpdateVariants from './UpdateVariants';
import UpdateButtons from './UpdateButtons';
import FormSuccessNotification from '../form/FormSuccessNotification';
import experimentService from '../../services/experimentService';
import formUtils from '../../utils/formUtils';

const UpdateForm = ({
  featureObj,
  currentExperiments,
  scheduledFeatures,
  setExperimentChange,
  existingNames
}) => {
  const currentDate = new Date();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState(null);
  const [percentageObj, setPercentageObj] = useState({});
  const [query, setQuery] = useState(''); // for UserPercentageMenu--it's a tailwind thing
  const [maxAvailable, setMaxAvailable] = useState(null);
  const [experimentObj, setExperimentObj] = useState(featureObj);
  const [showVariants, setShowVariants] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [nameTaken, setNameTaken] = useState(false);
  const type = featureObj.type_id;
  const startDate = new Date(featureObj.startDate);
  console.log("type:", type, "startDate:", startDate)

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (type === 3 && (percentageObj.id * 100) > maxAvailable) {
  //     alert(`The total user percentage for experiments in this date period exceeds 100%. Please select a user percentage less than %{maxAvailable}`);
  //     return;
  //   }
  //   if (nameTaken) {
  //     alert(`A feature with the name ${name} already exists. Please create a different name.`);
  //     return;
  //   }
  //   const featureObj = {
  //     name: name,
  //     description: description,
  //     type_id: type,
  //     start_date: startDate.toISOString(),
  //     end_date: endDate.toISOString(),
  //     is_running: true,
  //     user_percentage: percentageObj.id
  //   };

  //   try {
  //     const response = await experimentService.createExperiment(featureObj);
  //     console.log(response);
  //     if (type === 3) {
  //       setExperimentObj(response);
  //       setShowVariants(true);
  //     }
  //     setName("");
  //     setDescription("");
  //     // dispatch({type: "1"});
  //     // setStartDate(currentDate);
  //     setEndDate(null);
  //     setPercentageObj({});
  //     setQuery("");
  //     setFormSuccess(true);
  //     setExperimentChange(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleUpdate = async (event) => {
    event.preventDefault();
  };

  return (
    <>
    <FormSuccessNotification formSuccess={formSuccess} setFormSuccess={setFormSuccess} />
    { showVariants
      ?  <UpdateVariants
            experimentObj={experimentObj}
            setExperimentObj={setExperimentObj}
            setShowVariants={setShowVariants}
            setExperimentChange={setExperimentChange}
          />
      : <div className="max-w-7xl sm:px-6 lg:px-8">
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
         Update {featureObj.name}
        </h2>
      </div>
    </div>
      <p className="mt-2 max-w-4xl text-sm text-gray-500">
      Note: feature type and start date may not be changed.
      </p>
      <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
      <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleUpdate}>
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <NameInput
                name={name}
                setName={setName}
                existingNames={existingNames}
                nameTaken={nameTaken}
                setNameTaken={setNameTaken}
              />
              <DescriptionText
                description={description}
                setDescription={setDescription}
              />
              <DateSelector
                startDate={startDate}
                isUpdate={true}
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
          <UpdateButtons
              setName={setName}
              setDescription={setDescription}
              setEndDate={setEndDate}
              setPercentageObj={setPercentageObj}
              currentDate={currentDate}
              setQuery={setQuery}
              type={featureObj.type_id}
              showVariants={showVariants}
              setShowVariants={setShowVariants}
            />
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>
    }
    </>
  );
};

export default UpdateForm;


{/* <div key={variant.id} className="px-4 py-5 sm:p-6">
<dt className="text-base font-normal text-gray-900">{variant.value}</dt>
<dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
  <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
    <span className="ml-2 text-sm font-medium text-gray-500">{variant.weight * 100}% of users in experiment</span>
  </div>
</dd>
</div> */}