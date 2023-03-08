import { useState } from 'react';
import experimentService from "../services/experimentService";

const processFeatureObjs = (featureArr) => {
  return featureArr.map((obj) => {
    return {
      ...obj,
      startDate: new Date(obj.start_date).toLocaleDateString(),
      endDate: new Date(obj.end_date).toLocaleDateString(),
      userPercentage: `${100 * obj.user_percentage}%`,
    };
  });
};

const handleDelete = async (id, list, callback, errorHandler) => {
  try {
    let response = await experimentService.deleteExperiment(id);
    console.log(response);
    const filteredList = list.filter(obj => obj.id !== id);
    callback(filteredList);
  } catch (error) {
    errorHandler(error.message);
  }
}

const sortByDate = (featureArr) => {
  return featureArr.sort((a, b) => {
    return new Date(a.start_date) - new Date(b.start_date);
  });
};

const PastExperimentsList = ({ pastFeatures, setpastFeatures, title }) => {
  const [error, setError] = useState(null);
  pastFeatures = processFeatureObjs(pastFeatures);
  pastFeatures = sortByDate(pastFeatures);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">{title}</h1>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            { error
            ? <p>Error: {error} </p>
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
 {/* FUTURE GOAL: STATUS COLUMN */}
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {pastFeatures.map((featureObj, idx) => (
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
  )
}

export default PastExperimentsList;