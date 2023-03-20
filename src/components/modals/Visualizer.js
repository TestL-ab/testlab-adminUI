import { useState, useEffect, useReducer } from 'react';
import { ArrowLeftCircleIcon } from '@heroicons/react/20/solid';
import Graph from '../visualizer/Graph';
import ClickPercentageChart from '../visualizer/ClickPercentageChart'
import SimpleBarChart from '../visualizer/SimpleBarChart';
import DailyLineChart from '../visualizer/LineChart';
import WeightedBarChart from '../visualizer/WeightedBarChart';
import visualizerService from '../../services/visualizerService';
import HoverInfo from '../visualizer/HoverInfo';
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

  const stringForWeightedVariants = visualizerService.weightsToString(featureAnalysis);

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
                <div className='container mx-auto '>
                  <div className='border-b border-gray-200 px-4 py-5 sm:px-6'>
                    <div >
                      <h1 className="flex items-center">
                        Weighted Event Data
                        <HoverInfo featureAnalysis={featureAnalysis} />
                      </h1>
                      <p className='text-gray-500 text-sm font-style: italic'>Total events correct for percentage of users in each variant</p>
                      <WeightedBarChart featureAnalysis={featureAnalysis} />
                    </div>
                  </div>
                  <div className='border-b border-gray-200 px-4 py-5 sm:px-6'>
                    <h1>Raw Event Data</h1>
                    <p className='text-gray-500 text-sm font-style: italic'>Total of all event data, split based on distinct users</p>

                    {<SimpleBarChart featureAnalysis={featureAnalysis} />}
                  </div>
                  <div className='border-b border-gray-200 px-4 py-5 sm:px-6'>
                    <h1>Timeline of Event Data</h1>
                    {<DailyLineChart eventData={eventData} featureAnalysis={featureAnalysis} />}
                  </div>
                </div>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <button
                    type="button"
                    className="rounded-full bg-testLabBlue py-1 px-2.5 text-xs font-semibold text-white shadow-sm hover:bg-testLabBeige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-testLabBlue"
                    onClick={handleClick}
                  >
                    <div className="flex items-center">
                      <ArrowLeftCircleIcon className="h-6 w-6 mr-2" aria-hidden="true" /> Return to Experiment Details
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
