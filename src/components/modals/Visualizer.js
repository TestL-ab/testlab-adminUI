import {useState, useEffect, useReducer} from 'react';
import visualizerService from '../../services/visualizerService';

export default function Visualizer({ experiment, handleClick }) {
  const experimentId = experiment.id;
  const variantArr = experiment['variant_arr'];
  console.log(experiment);
  const [eventData, setEventData] = useState([]);
  const [featureAnalysis, setFeatureAnalysis] = useState([]);
  const [error, setError] = useState(null);
  // usereducer for the different visualizer options to display on the page -- additional useState for which button is toggled?


  //need to change to call getExperimentEventData for EACH variant.
  useEffect(() => {
    // console.log("exprimentID:" ,experiment['variant_arr'][0].id);
    // experiment[variant_arr].forEach(variant => {

    // })
    visualizerService
      .getExperimentEventData(experimentId)//experiment['variant_arr'][0])
      .then(response => {
        setEventData(response);
        visualizerService.getFeatureAnalysis(experimentId)
        .then(response => {
          setFeatureAnalysis(response);
        })
      })
      .catch(error => {
        setError(error.message);
      });
  }, [])

  console.log(`here's the event data passed to visualizer for experiment ${experimentId}`);
  console.log(eventData);
  console.log(`here's the feature analysis data passed visualizer`);
  console.log(featureAnalysis);

  return (
    <>
      <div className="sm:col-span-8 lg:col-span-7">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">{experiment.name}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{experiment.description}</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <button
                type="button"
                className="rounded-full bg-indigo-600 py-1 px-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleClick}
              >
                Return to Experiment Details
              </button>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

// console.log("render Visualizer within modal");
// const experimentId = 3; // will use code on line below when router is working and params are supplied
// // const { experimentId } = useParams(); // will need this for real routes in useeffect below
// const [eventData, setEventData] = useState([]);
// const [error, setError] = useState(null);
// const DISPLAYS = ["Raw Graph", "User Click Percentages"]
// const [currentDisplay, setCurrentDisplay] = useState(DISPLAYS[0]);

