import { useState, useEffect } from 'react';
import DeleteAlert from './DeleteAlert';
import DescriptionDisplay from './DescriptionDisplay';
import UpdateFormModal from '../form/UpdateFormModal';
import listUtils from '../../utils/listUtils';

const ScheduledFeaturesList = ({
  scheduledFeatures,
  setScheduledFeatures,
  setExperimentChange,
  // currentFeatures,
  currentExperiments,
  existingNames
}) => {
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [deleteObj, setDeleteObj] = useState(true);
  const [error, setError] = useState(null);
  const [processedFeatures, setProcessedFeatures] = useState([...scheduledFeatures]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [featureToUpdate, setFeatureToUpdate] = useState(null);

  useEffect(() => {
  }, [processedFeatures])

  let processed = listUtils.processFeatureObjs(processedFeatures);
  processed = listUtils.sortByDate(processed);
  const futureExperiment = true;

  const emptyList = processed.length === 0;

  const handleShowDeleteConfirmation = async (id, list, callback) => {
    setDeleteObj({ id, list, callback, setError });
    setOpenDeleteAlert(true);
  };

  const handleShowUpdateForm = (featureObj) => {
    setFeatureToUpdate(featureObj);
    setShowUpdateModal(true);
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
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
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
        <DeleteAlert
          openDeleteAlert={openDeleteAlert}
          setOpenDeleteAlert={setOpenDeleteAlert}
          deleteObj={deleteObj}
          setDeleteObj={setDeleteObj}
          setExperimentChange={setExperimentChange}
          setError={setError}
          processedFeatures={processedFeatures}
          setProcessedFeatures={setProcessedFeatures}
        />
        <UpdateFormModal
          showUpdateModal={showUpdateModal}
          setShowUpdateModal={setShowUpdateModal}
          featureToUpdate={featureToUpdate}
          setFeatureToUpdate={setFeatureToUpdate}
          setExperimentChange={setExperimentChange}
          processedFeatures={processedFeatures}
          setProcessedFeatures={setProcessedFeatures}
          featureObj={featureToUpdate}
          currentExperiments={currentExperiments}
          scheduledFeatures={scheduledFeatures}
          existingNames={existingNames}
        />
        <div className="max-w-7xl sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 rounded-lg bg-testLabBackground px-4 py-5 sm:px-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-testLabDarkBlue sm:truncate sm:text-3xl sm:tracking-tight">
                  Scheduled Features
                </h2>
              </div>
            </div>
            <p className="mt-2 max-w-4xl text-sm text-gray-500">
              View and edit your upcoming toggles, roll-outs, and experiments, ordered by start date.
            </p>
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="mt-8 flow-root">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    {emptyList
                      ? <h3 className="text-base font-semibold leading-6 text-testLabDarkBlue">You do not currently have any scheduled features to display.</h3>
                      : <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-testLabDarkBlue sm:pl-3">
                              Name
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-testLabDarkBlue">
                              Feature Type
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-testLabDarkBlue">
                              Start Date
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-testLabDarkBlue">
                              End Date
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-testLabDarkBlue">
                              Enrolled Users
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-testLabDarkBlue">
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {processed.map((featureObj, idx) => (
                            <tr key={featureObj.id} className={idx % 2 === 0 ? "bg-white" : 'bg-testLabBackground'}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-testLabDarkBlue sm:pl-3">
                                <DescriptionDisplay
                                  name={featureObj.name}
                                  description={featureObj.description || "No description provided."}
                                  rowLength={30}
                                  type={featureObj.type_id}
                                  id={featureObj.id}
                                  featuresArr={processed}
                                  futureExperiment={futureExperiment}
                                />
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{featureObj.type}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{featureObj.startDate}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{featureObj.endDate}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{featureObj.userPercentage}</td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                <button
                                  type="button"
                                  className="rounded bg-testLabBlue py-1 px-2 text-s font-semibold text-white shadow-sm hover:bg-testLabBeige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-testLabBlue"
                                  onClick={() => handleShowUpdateForm(featureObj)} // show update modal
                                >
                                  Edit
                                </button>
                              </td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                <button
                                  type="button"
                                  className="rounded bg-testLabBlue py-1 px-2 text-s font-semibold text-white shadow-sm hover:bg-testLabBeige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-testLabBlue"
                                  onClick={() => handleShowDeleteConfirmation(featureObj.id, scheduledFeatures, setScheduledFeatures, processedFeatures)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduledFeaturesList;