// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
// import { Combobox } from '@headlessui/react';
// import { useState} from 'react';

// const VariantPercentageMenu = ({ variantObj, setVariantObj }) => {
//   const [query, setQuery] = useState("")
//   const [percent, setPercent] = useState({ id: 0.01, name: "1%"})

//   console.log(percent);
//   let percentages = [];
//   for (let i = 1; i <= 100; i++) {
//     const name = `${i}%`;
//     const id = (Number(i) / 100).toFixed(2);
//     percentages.push({ id: id, name: name})
//   }

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//     console.log(percent);
//     console.log(query);
//   };

//   let filteredPercentages =
//     query === ''
//       ? percentages
//       : percentages.filter((percentage) => {
//           return percentage.name.toLowerCase().includes(query.toLowerCase())
//         });

//     const classNames = (...classes) => {
//       return classes.filter(Boolean).join(' ')
//     };

//   return (

//     <Combobox as="div" value={percent} onChange={setPercent}>

//     <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">Select the percentage of experiment participants to include in this variant:</Combobox.Label>
//     <div className="relative mt-2">
//       <Combobox.Input
//         className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         onChange={handleChange}
//         displayValue={(percentage) => percentage?.name}
//         required={true}
//       />
//       <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//         <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//       </Combobox.Button>

//       {filteredPercentages.length > 0 && (
//         <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//           {filteredPercentages.map((percentage) => (
//             <Combobox.Option
//               key={percentage.id}
//               value={percentage}
//               className={({ active }) =>
//                 classNames(
//                   'relative cursor-default select-none py-2 pl-3 pr-9',
//                   active ? 'bg-indigo-600 text-white' : 'text-gray-900'
//                 )
//               }
//             >
//               {({ active, selected }) => (
//                 <>
//                   <span className={classNames('block truncate', selected && 'font-semibold')}>{percentage.name}</span>
//                   {selected && (
//                     <span
//                       className={classNames(
//                         'absolute inset-y-0 right-0 flex items-center pr-4',
//                         active ? 'text-white' : 'text-indigo-600'
//                       )}
//                     >
//                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                     </span>
//                   )}
//                 </>
//               )}
//             </Combobox.Option>
//           ))}
//         </Combobox.Options>
//       )}
//     </div>
//   </Combobox>
//   )
// };

// export default VariantPercentageMenu;