import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import experimentService from '../services/experimentService';

const DeleteAlert = ({
  openDeleteAlert,
  setOpenDeleteAlert,
  deleteObj,
  setDeleteObj,
  setError,
  setExperimentChange,
  processedFeatures,
  setProcessedFeatures
 }) => {
  const cancelButtonRef = useRef(null)

  const handleConfirmDelete = async (event) => {
    event.preventDefault();
    try {
      let response = await experimentService.deleteExperiment(deleteObj.id);
      console.log("processed features before delete: ", processedFeatures)
      setProcessedFeatures(processedFeatures.filter((obj) => obj.id !== deleteObj.id));
      console.log("processed features afetr delete inside alert", processedFeatures);
      const filteredList = deleteObj.list.filter(obj => obj.id !== deleteObj.id);
      deleteObj.callback(filteredList);
      setDeleteObj(null);
      setExperimentChange(true);
    } catch (error) {
      setDeleteObj(null);
      setError(error.message);
      console.log(error);
    }
    setOpenDeleteAlert(false);
  };

  const handleCancelDelete = (event) => {
    event.preventDefault();
    setOpenDeleteAlert(false);
  };

  return (
    <Transition.Root show={openDeleteAlert} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenDeleteAlert}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Delete Feature
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this feature? </p>
                      <p className="text-sm text-gray-500">
                        If the feature is currently running, it will stop immediately.
                      </p>
                      <p className="text-sm text-gray-500">
                         The record of the feature, including any associated event data will be permanently removed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={handleConfirmDelete}
                  >
                    Confirm Delete
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={handleCancelDelete}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DeleteAlert;

