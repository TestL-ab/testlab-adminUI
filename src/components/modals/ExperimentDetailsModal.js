import { Fragment, useReducer, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import Visualizer from './Visualizer';
import ExperimentDetails from './ExperimentDetails';

//where do we reset the currentModalPage to the experiment details?? 
// ON CLOSING THE MODAL, reset.
    // need to figure out how to render event data
    //open visualize modal and pass down the appropriate props.
    //s


const ExperimentDetailsModal = ({ id, featuresArr, open, setOpen, currModalPage, setCurrModalPage, modalPage, dispatchModalPage }) => {


  //how do you pass dispatchModalPage on to the two subcomponents of the modal?????



  // const [currentPage, setModalPage] = useState(<ExperimentDetails experiment={experiment} controlVariant={controlVariant} otherVariants={otherVariants} setModalPage={setModalPage}/>)


  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              {/* This element is to trick the browser into centering the modal contents. */}
              <span className="hidden md:inline-block md:h-screen md:align-middle" aria-hidden="true">
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                      onClick={() => {
                        dispatchModalPage({type:'EXPERIMENT_DETAILS'});
                        setOpen(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    {/*This is where the core piece of the modal goes!!!                 */}
                    {/* {<ExperimentDetails experiment={experiment} controlVariant={controlVariant} otherVariants={otherVariants}/>} */}
                    {/* <Visualizer /> */}
                    {modalPage}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )

}

export default ExperimentDetailsModal;