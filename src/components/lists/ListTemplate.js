import { useState, useEffect } from 'react';
import listUtils from '../../utils/listUtils';
import DeleteAlert from '../DeleteAlert';
import PastExperimentTable from './PastExperimentTable';
/*
feature Data obj
{title,
  description,
  feture (arr)
  setFeatures: state setter
  listType: "past experiments"
}

*/

const PastExperimentsList = ({ setExperimentChange, featureDataObj }) => {
  console.log(featureDataObj);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [deleteObj, setDeleteObj] = useState(true);
  const [error, setError] = useState(null);
  const [processedFeatures, setProcessedFeatures] = useState([...featureDataObj.features] || []);

  useEffect(() => {
  }, [processedFeatures])

  let processed = listUtils.processFeatureObjs(processedFeatures);
  processed = listUtils.sortByDate(processed);

  const emptyList = processed.length === 0;
  const handleDelete = async (id, list, callback) => {
    setDeleteObj({id, list, callback, setError});
    setOpenDeleteAlert(true);
  };

  const pastExperiments = featureDataObj.listType === "past experiments"
  console.log(pastExperiments, featureDataObj.listType);

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
      <h3 className="text-base font-semibold leading-6 text-gray-900">{featureDataObj.title}</h3>
      <p className="mt-1 text-sm text-gray-500">
        {featureDataObj.description}
      </p>
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
      </div>
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            { emptyList && <h3 className="text-base font-semibold leading-6 text-gray-900">You do not currently have any {featureDataObj.title.toLowerCase()}to display.</h3>}
            { pastExperiments && <PastExperimentTable
            processedFeatures={processed}
            handleDelete={handleDelete}
            pastFeatures={featureDataObj.features}
            setPastfeatures={featureDataObj.setFeatires}
            setError={setError}
          />}
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