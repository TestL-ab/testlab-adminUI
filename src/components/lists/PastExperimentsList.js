import { useState, useEffect } from 'react';
import listUtils from '../../utils/listUtils';
import DeleteAlert from '../DeleteAlert';

const PastExperimentsList = ({ pastFeatures, setpastFeatures, setExperimentChange }) => {
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [deleteObj, setDeleteObj] = useState(true);
  const [error, setError] = useState(null);
  const [processedFeatures, setProcessedFeatures] = useState([...pastFeatures]);

  useEffect(() => {
    setProcessedFeatures(listUtils.processFeatureObjs(processedFeatures));
    setProcessedFeatures(listUtils.sortByDate(processedFeatures));
  }, [processedFeatures])

  const emptyList = processedFeatures.length === 0;

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

<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h3 className="text-base font-semibold leading-6 text-gray-900">Past Experiments</h3>
      <p className="mt-1 text-sm text-gray-500">
        View your past experiments and experiment analysis.
      </p>
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
      </div>
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            { emptyList
            ? <h3 className="text-base font-semibold leading-6 text-gray-900">You do not currently have any past experiments to display.</h3>
            : <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Start Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    End Date
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
                {processedFeatures.map((featureObj, idx) => (
//  Make name clickable, route to experiment vairant details
                  <tr key={featureObj.id} className={idx % 2 === 0 ? undefined : 'bg-gray-50'}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {featureObj.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{featureObj.startDate}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{featureObj.endDate}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
{/* need to add link to visualizer in button!!*/}
                      <button
                        type="button"
                        className="rounded bg-indigo-600 py-1 px-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        View Results
                      </button>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
{/* need to add link to visualizer in button!!*/}
                      <button
                        type="button"
                        className="rounded bg-indigo-600 py-1 px-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Repeat Experiment
                      </button>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                      <button
                        type="button"
                        className="rounded bg-indigo-600 py-1 px-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => handleDelete(featureObj.id, pastFeatures, setpastFeatures, setError)}
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

export default PastExperimentsList;