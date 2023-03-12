import Visualizer from "./Visualizer.js";

const ExperimentDetails = ({experiment, controlVariant, otherVariants, setModalPage}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const handleClick = (event) => {
    event.preventDefault();
    // need to figure out how to render event data
    //open visualize modal and pass down the appropriate props.
    setModalPage(<Visualizer/>)

  };
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
                    {controlVariant &&

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
              <button
                type="button"
                className="rounded-full bg-indigo-600 py-1 px-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleClick}
              >
                View Analytics
              </button>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
export default ExperimentDetails;