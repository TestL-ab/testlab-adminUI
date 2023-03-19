import Visualizer from "./Visualizer.js";

const ExperimentDetails = ({ experiment, controlVariant, otherVariants, dispatchModalPage, handleClick, futureExperiment }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <div className="sm:col-span-2 lg:col-span-2 px-4 py-4">
        <div className="overflow-hidden bg-white sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">{experiment.name}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{experiment.description}</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4">
              <div className="sm:col-span-1">
                <dt className="text-s font-medium text-gray-500">Start Date</dt>
                <dd className="mt-1 text-s text-gray-900">{experiment.startDate}</dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-s font-medium text-gray-500">End Date</dt>
                <dd className="mt-1 text-s text-gray-900">{experiment.endDate}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-s font-medium text-gray-500">Users Enrolled</dt>
                <dd className="mt-1 text-s text-gray-900">{experiment.userPercentage}</dd>
              </div>
              <div className="sm:col-span-4">
                <div>
                  <h3 className="text-s font-bold text-gray-900">Variants:</h3>
                  <br />


                  <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    <li key={controlVariant.id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                      <div className="flex w-full items-center justify-between space-x-6 p-6">
                        <div className="flex-1">

                          <div className="flex items-center space-x-3">

                            <p className="text-sm font-bold break-normal text-gray-900">{controlVariant.value}</p>
                            <span className="inline-block flex-shrink-0 rounded-full bg-green-100 mt-2 mb-5 px-2 py-1 text-xs font-semibold text-green-800">
                              Control
                            </span>
                          </div>

                          <p className="mt-1 text-sm text-gray-500">{controlVariant.weight * 100}% of users in experiment</p>

                        </div>
                      </div>
                    </li>
                    {otherVariants.map((variant) => (
                      <li key={variant.id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                        <div className="flex w-full items-center justify-between space-x-6 p-6">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3">
                              <h3 className="text-sm font-bold text-gray-900">{variant.value}</h3>
                              <span className="inline-block flex-shrink-0 rounded-full bg-white mt-2 mb-5 px-2 py-1 text-xs font-semibold text-white">t</span>

                            </div>

                            <p className="mt-1 text-sm text-gray-500 align-text-bottom">{variant.weight * 100}% of users in experiment</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {futureExperiment ? null : <button
                type="button"
                className="rounded-full bg-testLabBlue w-32 h-8 py-1 px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-testLabBeige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-testLabBlue"
                onClick={handleClick}
              >
                View Analytics
              </button>}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
export default ExperimentDetails;