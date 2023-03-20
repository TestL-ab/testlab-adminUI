import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function HoverInfo({ featureAnalysis }) {
  return (
    // relative vs absolute vs -- absolute should add padding between graphs

    <div className="group flex relative">
      <span class="bg-white text-black px-1 py-2">
        <svg
          className="flex fill-current h-3 w-3 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <InformationCircleIcon />
        </svg>

      </span>

      <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute opacity-0 mx-auto px-4">
    {/* className="rounded absolute hidden bg-white-100 text-testLabDarkBlue pt-1 group-hover:block w-64 h-10 text-xs" */}
        <ul className="rounded-md absolute hidden bg-gray-800 px-1 py-1 group-hover:block w-56 ">
          {/* {      <p className="text-testLabDarkBlue px-4 py-4 bg-testLabBlueGrey opacity-100">Testing what content I can add</p>} */}
          {featureAnalysis.map((variant, idx) => {
            return (<li key={`var-${idx}`}>{variant.value}: {variant.weight * 100}% </li>)
          })}
        </ul>
      </span>
    </div>
    // <div className="group flex relative">
    //   <button>
    // <svg
    //   className="flex fill-current h-4 w-4 transition-transform"
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 20 20"
    // >
    //   <InformationCircleIcon />
    // </svg>
    //   </button>

    // <ul className="rounded absolute hidden bg-white-100 text-testLabDarkBlue pt-1 group-hover:block w-64 h-10 text-xs">
    //   {/* {      <p className="text-testLabDarkBlue px-4 py-4 bg-testLabBlueGrey opacity-100">Testing what content I can add</p>} */}
    //   {featureAnalysis.map((variant, idx) => {
    //     return (<li key={`var-${idx}`}>{variant.value}: {variant.weight * 100}% </li>)
    //   })}
    // </ul>

    /* menu list
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
    </ul> */

    // </div>
  );
}