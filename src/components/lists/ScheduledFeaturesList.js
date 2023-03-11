import { useState, useEffect } from 'react';
import DeleteAlert from '../DeleteAlert';
import DescriptionDisplay from './DescriptionDisplay';
import listUtils from '../../utils/listUtils';

const ScheduledFeaturesList = ({ scheduledFeatures, setScheduledFeatures, setExperimentChange }) => {
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [deleteObj, setDeleteObj] = useState(true);
  const [error, setError] = useState(null);
  const [processedFeatures, setProcessedFeatures] = useState([...scheduledFeatures]);

  useEffect(() => {
  }, [processedFeatures])

  let processed = listUtils.processFeatureObjs(processedFeatures);
  processed = listUtils.sortByDate(processed);

  const emptyList = processed.length === 0;

  const handleDelete = async (id, list, callback) => {
    setDeleteObj({id, list, callback, setError});
    setOpenDeleteAlert(true);
  };

  return (
    <>
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
    <div className="max-w-7xl sm:px-6 lg:px-8">
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
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
            {  emptyList
            ? <h3 className="text-base font-semibold leading-6 text-gray-900">You do not currently have any scheduled features to display.</h3>
            : <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Feature Type
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Start Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    End Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Enrolled Users
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {processed.map((featureObj, idx) => (
                  <tr key={featureObj.id} className={idx % 2 === 0 ? undefined : 'bg-gray-50'}>

                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      <DescriptionDisplay
                        name={featureObj.name}
                        description={featureObj.description || "No description provided."}
                        rowLength={30}
                        type={featureObj.type_id}
                        id={featureObj.id}
                        featuresArr={processed}
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{featureObj.type}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{featureObj.startDate}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{featureObj.endDate}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{featureObj.userPercentage}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only"></span>
                      </a>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                    <button
                      type="button"
                      className="rounded bg-indigo-600 py-1 px-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => handleDelete(featureObj.id, scheduledFeatures, setScheduledFeatures, processedFeatures)}
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
  </>
  );
};

export default ScheduledFeaturesList;