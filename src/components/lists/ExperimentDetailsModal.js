import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

const ExperimentDetailsModal = ({ id, featuresArr, open, setOpen }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const experiment = featuresArr.filter(featureObj => featureObj.id === id).pop();
  const controlVariant = experiment.variant_arr.filter(variant => variant.is_control).pop();
  const otherVariants = experiment.variant_arr.filter(variant => !variant.is_control);

  return (
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
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                    <div className="sm:col-span-8 lg:col-span-7">
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-base font-semibold leading-6 text-gray-900">{experiment.name}</h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">{experiment.description}</p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Start Date</dt>
                          <dd className="mt-1 text-sm text-gray-900">{experiment.startDate}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">End Date</dt>
                          <dd className="mt-1 text-sm text-gray-900">{experiment.endDate}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Users Enrolled</dt>
                          <dd className="mt-1 text-sm text-gray-900">{experiment.userPercentage}</dd>
                        </div>
                        <div className="sm:col-span-2">
                        <div>
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Variants:</h3>
                        <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
                        { controlVariant &&

                        <div key={controlVariant.id} className="px-4 py-5 sm:p-6">
                              <dt className="text-base font-normal text-gray-900">{controlVariant.value}</dt>
                              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                  <span className="ml-2 text-sm font-medium text-gray-500">{controlVariant.weight * 100}% of users in experiment</span>
                                </div>
                                <div className={classNames('bg-green-100 text-green-800', 'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0')}>
                                  Control
                                </div>
                              </dd>
                            </div>

                        }

                          {otherVariants.map((variant) => (
                            <div key={variant.id} className="px-4 py-5 sm:p-6">
                              <dt className="text-base font-normal text-gray-900">{variant.value}</dt>
                              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                  <span className="ml-2 text-sm font-medium text-gray-500">{variant.weight * 100}% of users in experiment</span>
                                </div>
                              </dd>
                            </div>
                          ))}
                        </dl>
                        </div>
                        </div>
                      </dl>
                    </div>
                    </div>
                    </div>
                  </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

  )
};

export default ExperimentDetailsModal;