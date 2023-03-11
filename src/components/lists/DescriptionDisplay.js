import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import listUtils from '../../utils/listUtils';

const DescriptionDisplay = ({ name, description, rowLength, type, id }) => {

  const processedDescription = listUtils.processDescription(description, rowLength);

  const experiment = type === 3 ? true : false;

  const handleClick = (event) => {
    event.preventDefault();
    alert(`this should display everything for experiment # ${id}`);
  }

  return (
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
            {experiment &&
                  <button
                    type="button"
                    className="rounded-full bg-indigo-600 py-1 px-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleClick}
                  >
                    View Eperiment Details
                  </button>
            }
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default DescriptionDisplay;

