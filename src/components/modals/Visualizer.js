import { useState, useEffect, useReducer } from 'react';
import { ArrowLeftCircleIcon } from '@heroicons/react/20/solid';
import Graph from '../visualizer/Graph';
import ClickPercentageChart from '../visualizer/ClickPercentageChart'
import SimpleBarChart from '../visualizer/SimpleBarChart';
import DailyLineChart from '../visualizer/LineChart';
import WeightedBarChart from '../visualizer/WeightedBarChart';
import visualizerService from '../../services/visualizerService';
import HoverInfo from '../visualizer/HoverInfo';

export default function Visualizer({ experiment, handleClick, featureAnalysis, eventData, error, setError }) {
  const experimentId = experiment.id;
  const variantArr = experiment['variant_arr'];

  const stringForWeightedVariants = visualizerService.weightsToString(featureAnalysis);

  return (
    <>
      {error
        ? <div className="error">
          <p>An error occurred: {error}</p> {/* not sure how we want to handle errors but this works for now */}
        </div>
        :
        <>
          <div className="overflow-hidden bg-white shadow sm:rounded-lg ">
            <div className="px-4 py-5 sm:px-6 ">
              <h1 className="text-2xl font-semibold leading-6 text-gray-900">{experiment.name}</h1>
              <p className="mt-1 pt-2 leading-relaxed italic tracking-tight max-w-2xl text-descr text-gray-500">Experiment Description: {experiment.description}</p>
              {/* <p>&nbsp;</p> */}
              <p className="pt-2 mt-1 max-w-2xl text-xs text-testLabDarkBlue"><a href="https://testl-ab.github.io/docs/admin-ui" className="font-bold text-testLabDarkBlue hover:underline hover:text-testLabBlue ">Read the docs </a>for more information and options for interpreting this data</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <div className='container  '>
              <div className='border-b border-gray-200 px-4 py-5 sm:px-6'>
                  <div>
                    <h1 className="flex items-center">
                      Raw Event Data
                      <HoverInfo featureAnalysis={featureAnalysis} />
                    </h1>
                  </div>
                  <p className='text-gray-500 text-sm font-style: italic'>Total of all event data, split based on distinct users</p>
                  <div className="grid justify-center pt-4">
                    <SimpleBarChart featureAnalysis={featureAnalysis} />
                  </div>
                </div>
                <div className='border-b border-gray-200 px-4 py-5 sm:px-6'>
                  <div>
                    <h1 className="flex items-center">
                      Normalized Event Data
                      <HoverInfo featureAnalysis={featureAnalysis} />
                    </h1>
                    <p className='text-gray-500 text-sm font-style: italic'>Total events corrected for percentage of users in each variant</p>
                    <div className="grid justify-center pt-4">
                      <WeightedBarChart featureAnalysis={featureAnalysis} />
                    </div>
                  </div>
                </div>

                <div className='border-b border-gray-200 px-4 py-5 mb-4 sm:px-6'>
                  <div>
                  <h1 className="flex items-center">
                    Timeline of Event Data
                    <HoverInfo featureAnalysis={featureAnalysis} />
                  </h1>
                  </div>
                  <p className='text-gray-500 text-sm font-style: italic'>All event data displayed by date</p>
                  <div className="grid justify-center pt-4">

                    <DailyLineChart eventData={eventData} featureAnalysis={featureAnalysis} />
                  </div>

                </div>
              </div>
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <button
                  type="button"
                  className="rounded-full bg-testLabBlue py-1 px-2.5 text-xs font-semibold text-white shadow-sm hover:bg-testLabBeige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-testLabBlue"
                  onClick={handleClick}
                >
                  <div className="flex items-center text-sm">
                    <ArrowLeftCircleIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                    Return to Experiment Details
                  </div>
                </button>
              </dl>
            </div>
          </div>
        </>}
    </>
  )
}
