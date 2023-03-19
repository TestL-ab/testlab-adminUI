import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function HoverInfo({featureAnalysis}) {
  return (
    <div className="group relative text-2xl">
          <InformationCircleIcon/>

      <button className="bg-gray-300 text-gray-700 py-4 px-6 rounded inline-flex items-center group">
       {/* <span className="mr-1">Menu</span> */}
        {/* <svg
          className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg> */}
      </button>
      
      {/* menu list */}
      <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block w-56">
        <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
          Profile
        </li>
        <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
          Settings
        </li>
        <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
          Logout
        </li>
      </ul>
      
    </div>
  );
}