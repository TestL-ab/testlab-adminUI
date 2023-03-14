import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react';
import { useEffect } from 'react';

const UserPercentageMenu = ({
    percentageObj,
    setPercentageObj,
    query,
    setQuery,
    type,
    maxAvailable,
    endDate,
    currentPercentage
  }) => {

  const isToggle = type === 1;

  useEffect(() => {
    if (isToggle) {
      setPercentageObj({ id: 1, name: "100%" });
    } else if (currentPercentage) {
      const currentPercentObj = percentages.filter(percentObj => percentObj.id === currentPercentage).pop();
      setPercentageObj(currentPercentObj);
    } else {
      setPercentageObj(null);
    }
  }, [type]);

  if (isToggle) {
    return (
      <p className="text-sm text-gray-500 col-span-3">All users will be enrolled in this feature toggle.</p>
    );
  }
  let percentages = [
    { id: 0.05, name: "5%" },
    { id: 0.1, name: "10%" },
    { id: 0.15, name: "15%" },
    { id: 0.2, name: "20%" },
    { id: 0.25, name: "25%" },
    { id: 0.3, name: "30%" },
    { id: 0.35, name: "35%" },
    { id: 0.4, name: "40%" },
    { id: 0.45, name: "45%" },
    { id: 0.5, name: "50%" },
    { id: 0.55, name: "55%" },
    { id: 0.6, name: "60%" },
    { id: 0.65, name: "65%" },
    { id: 0.7, name: "70%" },
    { id: 0.75, name: "75%" },
    { id: 0.80, name: "80%" },
    { id: 0.85, name: "85%" },
    { id: 0.9, name: "90%" },
    { id: 0.95, name: "95%" },
    { id: 1, name: "100%" },
  ]

  let filteredPercentages =
    query === ''
      ? percentages
      : percentages.filter((percentage) => {
          return percentage.name.toLowerCase().includes(query.toLowerCase())
        });

    if (type === 3) {
      filteredPercentages = filteredPercentages.filter(percentObj => (percentObj.id * 100) <= maxAvailable);
    }

    const classNames = (...classes) => {
      return classes.filter(Boolean).join(' ')
    };

  return (
<div className="pt-5 w-60">
    <Combobox as="div" value={percentageObj} onChange={setPercentageObj}>
      { type === 3 && endDate
      ? <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">For this date range, {maxAvailable}% of users are available. Select the percentage of users to include in this experiment.</Combobox.Label>
      : <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">Select the percentage of users to include in this feature:</Combobox.Label>}
    <div className="relative mt-2">
      <Combobox.Input
        className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={(event) => setQuery(event.target.value)}
        displayValue={(percentage) => percentage?.name}
        required={true}
      />
      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </Combobox.Button>

      {filteredPercentages.length > 0 && (
        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {filteredPercentages.map((percentage) => (
            <Combobox.Option
              key={percentage.id}
              value={percentage}
              className={({ active }) =>
                classNames(
                  'relative cursor-default select-none py-2 pl-3 pr-9',
                  active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                )
              }
            >
              {({ active, selected }) => (
                <>
                  <span className={classNames('block truncate', selected && 'font-semibold')}>{percentage.name}</span>
                  {selected && (
                    <span
                      className={classNames(
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                        active ? 'text-white' : 'text-indigo-600'
                      )}
                    >
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      )}
    </div>
  </Combobox>
  </div>
  )
};

export default UserPercentageMenu;