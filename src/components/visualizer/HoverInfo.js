import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function HoverInfo({featureAnalysis}) {
  return (
    // relative vs absolute vs -- absolute should add padding between graphs
    <div className="group relative text-2xl">
        <svg
          className="flex fill-current h-4 w-4 transition-transform"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <InformationCircleIcon />
        </svg>
      
    <div className="rounded absolute hidden bg-testLabBlueGray text-gray-500 pt-1 group-hover:inline w-100 text-xs">
      <p>Testing what content I can add</p>
    </div>
      {/* menu list
      <ul className="rounded absolute hidden text-gray-500 pt-1 group-hover:block w-56">
        <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
          Profile
        </li>
        <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
          Settings
        </li>
        <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
          Logout
        </li>
      </ul> */}
      
    </div>
  );
}