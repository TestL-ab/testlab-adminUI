import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function HoverInfo({ featureAnalysis }) {
  return (
    <div className="group flex relative">
      <span className="bg-white text-black px-1 py-2">
        <svg
          className="flex fill-current h-3 w-3 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <InformationCircleIcon />
        </svg>

      </span>

      <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute opacity-0 mx-auto px-4">
        <ul className="rounded-md absolute hidden bg-gray-800 px-1 py-1 group-hover:block w-64 ">
        <p className="underline underline-offset-1">Percent of users exposed to each variant: </p>

          {featureAnalysis.map((variant, idx) => {
            return (<li key={`var-${idx}`}>&nbsp;&nbsp;{variant.value} : {variant.weight * 100}%</li>)
          })}
        </ul>
      </span>
    </div>
  );
}