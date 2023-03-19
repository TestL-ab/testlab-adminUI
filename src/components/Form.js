import React, { useState, useReducer } from 'react';
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
import listUtils from '../utils/listUtils';

const Form = ({ currentExperiments, scheduledFeatures, setExperimentChange, existingNames }) => {
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
  const [nameTaken, setNameTaken] = useState(false);
  const [currExps, setCurrExps] = useState([...currentExperiments]);



  const successMessage = `Feature created successfully!`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (type === 3 && (percentageObj.id * 100) > maxAvailable) {
      alert(`The total user percentage for experiments in this date period exceeds 100%. Please select a user percentage less than %{maxAvailable}`);
      return;
    }
    if (nameTaken) {
      alert(`A feature with the name ${name} already exists. Please create a different name.`);
      return;
    }
    const featureObj = {
      name: name,
      description: description,
      type_id: type,
      start_date: startDate.toISOString(),
      end_date: endDate.toISOString(),
      is_running: true,
      user_percentage: percentageObj.id
    };

    try {
      const response = await experimentService.createExperiment(featureObj);
      console.log(response);
      if (type === 3) {
        setExperimentObj(response);
        setShowVariants(true);
        const processedResponse = listUtils.processFeatureObjs([response]).pop();
        setCurrExps(currExps.concat(processedResponse));
      }
      setName("");
      setDescription("");
      dispatch({ type: "1" });
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
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0"></div>
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-6 sm:mt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"></div>
        </div>
      </div>
      <div className="h-screen relative isolate overflow-y-auto overflow-x-hidden bg-gray-900 h">
        <svg
          className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-auto fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
        </svg>
        <svg
          viewBox="0 0 1108 632"
          aria-hidden="true"
          className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        >
          <path
            fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
            fillOpacity=".2"
            d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
          />
          <defs>
            <linearGradient
              id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
              x1="1220.59"
              x2="-85.053"
              y1="432.766"
              y2="638.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4F46E5" />
              <stop offset={1} stopColor="#80CAFF" />
            </linearGradient>
          </defs>
        </svg>
        <FormSuccessNotification formSuccess={formSuccess} setFormSuccess={setFormSuccess} message={successMessage} />
        {showVariants
          ? <Variants
            experimentObj={experimentObj}
            setExperimentObj={setExperimentObj}
            setShowVariants={setShowVariants}
            setExperimentChange={setExperimentChange}
            setFormSuccess={setFormSuccess}
          />
          : <div className="max-w-7xl sm:px-6 lg:px-8 overflow-auto">
            <div className="border-b border-gray-200 rounded-lg bg-testLabBackground px-4 py-5 sm:px-6 overflow-auto">
              <div className="md:flex md:items-center md:justify-between">
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Create Feature
                  </h2>
                </div>
              </div>
              <p className="mt-2 max-w-4xl text-sm text-gray-500">
                Enter details for your new toggle, rollout, or experiment here.
              </p>
              <p className="mt-2 max-w-4xl text-sm text-gray-500">For more information on how to create an experiment, rollout, or toggle, please <a href="https://testl-ab.github.io/docs/admin-ui" className="font-bold text-testLabDarkBlue hover:underline hover:text-testLabBlue">view our documentation</a>.</p>
              <div className="px-4 sm:px-6 lg:px-8 mt-8 flow-root">
                <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
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
                    <br />
                    <div className='table sm:col-span-5'>
                      <div className="table-row">
                        <div className="table-cell pr-1.5">
                          <TypeRadio
                            type={type}
                            dispatch={dispatch}
                          />
                        </div>
                        <div className="table-cell">
                          <DateSelector
                            startDate={startDate}
                            setStartDate={setStartDate}
                            endDate={endDate}
                            setEndDate={setEndDate}
                            currentDate={currentDate}
                            type={type}
                            scheduledFeatures={scheduledFeatures}
                            currentExperiments={currExps}
                            maxAvailable={maxAvailable}
                            setMaxAvailable={setMaxAvailable}
                          />
                        </div>
                        <div className="sm:col-span-5">
                          <div className="table-cell" >
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
                      </div>
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




                </form>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Form;