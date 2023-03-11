import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const DescriptionDisplay = ({ name, description, rowLength }) => {
  const processDescription = (description) => {
    let rows = description.split(" ").reduce((acc, word) => {
      if (acc.length === 0) {
        return [word];
      }
      const currentRow = acc[acc.length - 1];
      if ((currentRow + " " + word).length <= rowLength) {
        acc[acc.length - 1] = currentRow + " " + word;
      } else {
        acc.push(word);
      }
      return acc;
    }, [])

    return rows;
  }

  const processedDescription = processDescription(description);

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
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default DescriptionDisplay;


