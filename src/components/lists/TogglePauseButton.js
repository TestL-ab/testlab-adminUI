import { useState, useEffect } from 'react';
import experimentService from "../../services/experimentService";

const TogglePauseButton = ({ featureObj, processedFeatures, setProcessedFeatures, setExperimentChange }) => {
  const [isRunning, setIsRunning] = useState(featureObj.is_running);

  useEffect(() => {
  }, [isRunning]);

  const is_running = featureObj.is_running;

  const handleTogglePause = async (event) => {
    event.preventDefault();
    const id = featureObj.id;
    const updatedFeatureObj = {
      ...featureObj,
      is_running: !isRunning,
    }

    try {
      const responseObj = await experimentService.updateFeature(id, updatedFeatureObj);
      console.log(responseObj);
      setProcessedFeatures(processedFeatures.map((featureObj) => {
        return featureObj.id === id ? responseObj : featureObj
      }));
      setIsRunning(responseObj.is_running);
      setExperimentChange(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <p>{isRunning}</p>
      {isRunning
        ? <button
          type="button"
          className="rounded bg-white py-1 px-2 text-s font-semibold text-testLabBlue shadow-sm ring-1 ring-inset ring-testLabBlue hover:ring-testLabBeige hover:text-white hover:bg-testLabBeige"
          onClick={handleTogglePause}
        >
          Pause Feature
        </button>
        : <button
          type="button"
          className="rounded bg-testLabBlue py-1 px-2 text-s font-semibold text-white shadow-sm hover:bg-testLabBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-testLabBlue"
          onClick={handleTogglePause}
        >
          Resume Feature
        </button>
      }
    </>
  );
};

export default TogglePauseButton;