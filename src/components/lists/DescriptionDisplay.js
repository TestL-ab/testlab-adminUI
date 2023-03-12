import { useState, useReducer } from 'react';
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import listUtils from '../../utils/listUtils';
import ExperimentDetailsModal from '../modals/ExperimentDetailsModal';
import ExperimentDetails from '../modals/ExperimentDetails';
import Visualizer from '../modals/Visualizer';
// will need to use features Obj for experimentDetails Modal !!!

const DescriptionDisplay = ({ name, description, rowLength, type, id, featuresArr }) => {
  const [open, setOpen] = useState(false)
  const [currModalPage, setCurrModalPage] = useState('Experiment Details');
  const processedDescription = listUtils.processDescription(description, rowLength);
  const isExperiment = type === 3 ? true : false;


  const experiment = featuresArr.filter(featureObj => featureObj.id === id).pop();
  const controlVariant = experiment.variant_arr.filter(variant => variant.is_control).pop();
  const otherVariants = experiment.variant_arr.filter(variant => !variant.is_control);


  const handleModalOpenClick = (event) => {
    event.preventDefault();
    dispatchModalPage({
      type: 'EXPERIMENT_DETAILS'
    })
    setOpen(true);

  }; 

   let contentReducer = (state, action) => {
    switch (action.type) {
      case 'EXPERIMENT_DETAILS': {
        return <ExperimentDetails experiment={experiment} controlVariant={controlVariant} otherVariants={otherVariants} handleClick={handleClick} />
      }
      case 'VISUALIZER_1': {
        return <Visualizer experiment={experiment} handleClick={handleClick}/>
      }
    }
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (modalPage.type.name === "ExperimentDetails") {
      dispatchModalPage({
        type: 'VISUALIZER_1'
      })
    } else {
      dispatchModalPage({
        type: 'EXPERIMENT_DETAILS',
      })
    }
  };

  const initializeExperimentModalState = (initialState) => {
    console.log("INITIAL STATE FOR FUNC: ");
    console.log(initialState);
    return (<ExperimentDetails experiment={experiment} controlVariant={controlVariant} otherVariants={otherVariants} handleClick={handleClick} />)
  }


  let [modalPage, dispatchModalPage] = useReducer(contentReducer, <ExperimentDetails experiment={experiment} controlVariant={controlVariant} otherVariants={otherVariants} handleClick={handleClick} />, initializeExperimentModalState)
  return (
    <>
      <ExperimentDetailsModal id={id} featuresArr={featuresArr} open={open} setOpen={setOpen} currModalPage={currModalPage} setCurrModalPage={setCurrModalPage} modalPage={modalPage} dispatchModalPage={dispatchModalPage}/>
      <Disclosure as="div" className="pt-6">
        {({ open }) => (
          <>
            <dt>
              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                <span className="text-base text-sm font-semibold leading-7">{name}</span>
                <span className="ml-6 flex h-7 items-center">
                  {open ? (
                    <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>
            </dt>
            <Disclosure.Panel as="dt" className="mt-2 pr-12">
              {processedDescription.map((row, idx) => {
                return <p key={idx} className="text-base leading-7 text-sm text-gray-600">{row}</p>
              })}
              {isExperiment &&
                <button
                  type="button"
                  className="rounded-full bg-indigo-600 py-1 px-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleModalOpenClick}
                >
                  View Experiment Details
                </button>
              }
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default DescriptionDisplay;


