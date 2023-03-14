import { Fragment, useState, useReducer } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Home from './Home'
import Form from './Form'
import CurrentExperimentsList from './lists/CurrentExperimentsList'
import CurrentToggleList from './lists/CurrentToggleList'
import CurrentRollOutList from './lists/CurrentRollOutList'
import PastExperimentsList from './lists/PastExperimentsList'
import ScheduledFeaturesList from './lists/ScheduledFeaturesList'

let navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Create New Feature', href: '#', icon: UsersIcon, current: false },
  { name: 'Current Toggles', href: '#', icon: FolderIcon, current: false },
  { name: 'Current Roll-Outs', href: '#', icon: FolderIcon, current: false },
  { name: 'Current Experiments', href: '#', icon: CalendarIcon, current: false },
  { name: 'Scheduled Features', href: '#', icon: CalendarIcon, current: false },
  { name: 'Past Experiments', href: '#', icon: InboxIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SideNav = ({
  currentToggles,
  setCurrentToggles,
  currentRollouts,
  setCurrentRollouts,
  currentExperiments,
  setCurrentExperiments,
  scheduledFeatures,
  setScheduledFeatures,
  pastExperiments,
  setPastExperiments,
  experimentChange,
  setExperimentChange,
  existingNames
}) => {
  let contentReducer = (state, action) => {
    switch (action.type) {
      case 'Home': {
        return <Home />
      }
      case 'Create New Feature': {
        return <Form
                  currentExperiments={currentExperiments}
                  scheduledFeatures={scheduledFeatures}
                  setExperimentChange={setExperimentChange}
                  existingNames={existingNames}
                />
      }
      case 'Current Experiments': {
        return <CurrentExperimentsList
                  currentFeatures={currentExperiments}
                  setCurrentFeatures={setCurrentExperiments}
                  setExperimentChange={setExperimentChange}
                  currentExperiments={currentExperiments}
                  scheduledFeatures={scheduledFeatures}
                  existingNames={existingNames}
                />
      }
      case 'Current Toggles': {
          return <CurrentToggleList
                  currentFeatures={currentToggles}
                  setCurrentFeatures={setCurrentToggles}
                  setExperimentChange={setExperimentChange}
                  currentExperiments={currentExperiments}
                  scheduledFeatures={scheduledFeatures}
                  existingNames={existingNames}
                />
      }
      case 'Current Roll-Outs': {
        return <CurrentRollOutList
                currentFeatures={currentRollouts}
                setCurrentFeatures={setCurrentRollouts}
                setExperimentChange={setExperimentChange}
                currentExperiments={currentExperiments}
                scheduledFeatures={scheduledFeatures}
                existingNames={existingNames}
              />
      }
      case 'Scheduled Features': {
        return <ScheduledFeaturesList
                  scheduledFeatures={scheduledFeatures}
                  setScheduledFeatures={setScheduledFeatures}
                  setExperimentChange={setExperimentChange}
                  currentExperiments={currentExperiments}
                  existingNames={existingNames}
                  // currentFeatures={currentFeatures}
                />
      }
      case 'Past Experiments': {
        return <PastExperimentsList
                  pastFeatures={pastExperiments}
                  setpastFeatures={setPastExperiments}
                  setExperimentChange={setExperimentChange}
                />
      }
    }
    throw Error('Unknown action: ' + action.type);
  }
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, dispatchCurrentPage] = useReducer(contentReducer, <Home />);

  const handleClick = (e) => {
    e.preventDefault();
    navigation = navigation.map(navLink => {
      if (navLink.name === e.target.text) {
        return {...navLink, current: true};
      } else {
        return {...navLink, current: false}
      }
    })
    dispatchCurrentPage({
      type: e.target.text,
    })
  }


  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src={require("../assets/blueicon.png")}
                      alt="TestLab"
                    />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={handleClick}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                              'mr-4 h-6 w-6 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-40 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
            <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
              <img
                className="h-8 w-auto"
                src={require('../assets/blueicon.png')}
                alt="TestLab"
              />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 px-2 py-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleClick}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                        'mr-3 h-6 w-6 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:pl-64">
          <button
            type="button"
            className=" px-4 text-white lg:hidden bg-slate-800"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-10 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-between px-4">
          </div>
          {/* THIS IS WHERE CONTENT RENDERS:
if currentView is Current Experimenrs <Current Experiments />  */}
          {currentPage}

        </div>
      </div>
    </>
  )
}

export default SideNav;