import { useState, useEffect, useReducer } from 'react';
import { ArrowLeftCircleIcon } from '@heroicons/react/20/solid';
import Graph from '../visualizer/Graph';
import ClickPercentageChart from '../visualizer/ClickPercentageChart'
import SimpleBarChart from '../visualizer/SimpleBarChart';
import DailyLineChart from '../visualizer/LineChart';
import WeightedBarChart from '../visualizer/WeightedBarChart';
/*
icon possibilites: 
export { default as ArrowLeftCircleIcon } from './ArrowLeftCircleIcon'
export { default as ArrowLeftOnRectangleIcon } from './ArrowLeftOnRectangleIcon'
export { default as ArrowLeftIcon } from './ArrowLeftIcon'
BackwardIcon
*/

export default function Visualizer({ experiment, handleClick, featureAnalysis, eventData, error, setError }) {
  const experimentId = experiment.id;
  const variantArr = experiment['variant_arr'];

  return (
    <div>
      {error
        ? <div className="error">
          <p>An error occurred: {error}</p> {/* not sure how we want to handle errors but this works for now */}
        </div>
        :
        <>
          <div className="sm:col-span-8 lg:col-span-7 px-4 py-4">
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">{experiment.name}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">{experiment.description}</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
{/* //how to force the graphs to be centered?  */}
                <div className='container mx-auto '>
                  <div className='border-b border-gray-200 px-4 py-5 sm:px-6'>
                      <h2>Weighted Click Data</h2>
                      {/* legend should have the weight of each variant */}
                      <WeightedBarChart featureAnalysis={featureAnalysis}/>
                    </div>
                  <div className='border-b border-gray-200 px-4 py-5 sm:px-6'>
                    <h2>Raw Click Data</h2>
                    {<SimpleBarChart featureAnalysis={featureAnalysis} />}
                  </div>
                  <div className='border-b border-gray-200 px-4 py-5 sm:px-6'>
                    <h2>Timeline of Click Data</h2>
                    {<DailyLineChart eventData={eventData} featureAnalysis={featureAnalysis}/>}
                  </div>
                </div>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <button
                    type="button"
                    className="rounded-full bg-indigo-600 py-1 px-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleClick}
                  >
                    <div className="flex items-center">
                      <ArrowLeftCircleIcon className="h-6 w-6" aria-hidden="true" /> Return to Experiment Details
                    </div>
                  </button>
                </dl>
              </div>
            </div>
          </div>
        </>}
    </div>
  )
}
