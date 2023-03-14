import React, { useState, useReducer } from 'react';
import NameInput from './NameInput';
import DescriptionText from './DescriptionText';
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
  existingNames,
  setShowUpdateModal,
  processedFeatures,
  setProcessedFeatures
}) => {
  const currentDate = new Date();
  const [name, setName] = useState(featureObj.name);
  const [description, setDescription] = useState(featureObj.description);
  const [endDate, setEndDate] = useState(new Date(featureObj.end_date));
  const [percentageObj, setPercentageObj] = useState({});
  const [query, setQuery] = useState(''); // for UserPercentageMenu--it's a tailwind thing
  const [maxAvailable, setMaxAvailable] = useState(null);
  const [experimentObj, setExperimentObj] = useState(featureObj);
  const [showVariants, setShowVariants] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [nameTaken, setNameTaken] = useState(false);
  const type = featureObj.type_id;
  const startDate = new Date(featureObj.startDate);

  const handleUpdate = async (event) => {
    event.preventDefault();

    if (nameTaken && name !== experimentObj.name) {
      alert(`A feature with the name ${name} already exists. Please create a different name.`);
      return;
    }

    const updatedFeatureObj = {
      id: featureObj.id,
      name: name,
      description: description,
      type_id: type,
      start_date: startDate.toISOString(),
      end_date: endDate.toISOString(),
      is_running: true,
      user_percentage: percentageObj.id
    };

    try {
      const response = await experimentService.updateFeature(featureObj.id, updatedFeatureObj);
      const updatedFeatures = processedFeatures.map(featObj => featObj.id === response.id ? response : featObj);
      setProcessedFeatures(updatedFeatures);
      setShowUpdateModal(false);
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
      ?  <UpdateVariants
            experimentObj={experimentObj}
            setExperimentObj={setExperimentObj}
            showVariants={showVariants}
            setShowVariants={setShowVariants}
            setExperimentChange={setExperimentChange}
            processedFeatures={processedFeatures}
            setProcessedFeatures={setProcessedFeatures}
            setShowUpdateModal={setShowUpdateModal}
            setFormSuccess={setFormSuccess}
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
                currentPercentage={featureObj.user_percentage}
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