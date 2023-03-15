// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//       require('@tailwindcss/line-clamp'),
//     ],
//   }
//   ```
// */
// import { Fragment } from 'react'
// import { Menu, Popover, Transition } from '@headlessui/react'
// import {
//   AcademicCapIcon,
//   BanknotesIcon,
//   Bars3Icon,
//   BellIcon,
//   CheckBadgeIcon,
//   ClockIcon,
//   ReceiptRefundIcon,
//   UsersIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
// import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
// import Header from './home/Header'
// import Visualizer from './visualizer/OrigVisualizer'
// const user = {
//   name: 'Chelsea Hagon',
//   email: 'chelsea.hagon@example.com',
//   role: 'Human Resources Manager',
//   imageUrl:
//     'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
// const navigation = [
//   { name: 'Home', href: '#', current: true },
//   { name: 'Profile', href: '#', current: false },
//   { name: 'Resources', href: '#', current: false },
//   { name: 'Company Directory', href: '#', current: false },
//   { name: 'Openings', href: '#', current: false },
// ]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]
// const stats = [
//   { label: 'Vacation days left', value: 12 },
//   { label: 'Sick days left', value: 4 },
//   { label: 'Personal days left', value: 2 },
// ]
// const actions = [
//   {
//     icon: ClockIcon,
//     name: 'Request time off',
//     href: '#',
//     iconForeground: 'text-teal-700',
//     iconBackground: 'bg-teal-50',
//   },
//   {
//     icon: CheckBadgeIcon,
//     name: 'Benefits',
//     href: '#',
//     iconForeground: 'text-purple-700',
//     iconBackground: 'bg-purple-50',
//   },
//   {
//     icon: UsersIcon,
//     name: 'Schedule a one-on-one',
//     href: '#',
//     iconForeground: 'text-sky-700',
//     iconBackground: 'bg-sky-50',
//   },
//   {
//     icon: BanknotesIcon,
//     name: 'Payroll',
//     href: '#',
//     iconForeground: 'text-yellow-700',
//     iconBackground: 'bg-yellow-50',
//   },
//   {
//     icon: ReceiptRefundIcon,
//     name: 'Submit an expense',
//     href: '#',
//     iconForeground: 'text-rose-700',
//     iconBackground: 'bg-rose-50',
//   },
//   {
//     icon: AcademicCapIcon,
//     name: 'Training',
//     href: '#',
//     iconForeground: 'text-indigo-700',
//     iconBackground: 'bg-indigo-50',
//   },
// ]
// const recentHires = [
//   {
//     name: 'Leonard Krasner',
//     handle: 'leonardkrasner',
//     imageUrl:
//       'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     href: '#',
//   },
//   {
//     name: 'Floyd Miles',
//     handle: 'floydmiles',
//     imageUrl:
//       'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     href: '#',
//   },
//   {
//     name: 'Emily Selman',
//     handle: 'emilyselman',
//     imageUrl:
//       'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     href: '#',
//   },
//   {
//     name: 'Kristin Watson',
//     handle: 'kristinwatson',
//     imageUrl:
//       'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     href: '#',
//   },
// ]
// const announcements = [
//   {
//     id: 1,
//     title: 'Office closed on July 2nd',
//     href: '#',
//     preview:
//       'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
//   },
//   {
//     id: 2,
//     title: 'New password policy',
//     href: '#',
//     preview:
//       'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
//   },
//   {
//     id: 3,
//     title: 'Office closed on July 2nd',
//     href: '#',
//     preview:
//       'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
//   },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }


// export default function Home() {
//   return <Header />
//   return (
//     <>
//       {/*
//         This example requires updating your template:

//         ```
//         <html class="h-full bg-gray-100">
//         <body class="h-full">
//         ```
//       */}
//       {/* bg-gradient-to-r from-sky-800 to-cyan-600 pb-24 */}
//       <div className="min-h-full">
//         <Popover as="header" className="bg-black pb-24">
//           {({ open }) => (
//             <>
//               <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//                 <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
//                   {/* Logo */}
//                   {/* <div className="absolute left-0 flex-shrink-0 py-5 lg:static">
//                     <a href="#">
//                       <span className="sr-only">Your Company</span>
//                       <img
//                         className="h-8 w-auto"
//                         src={require('../assets/full_logo_transparent_back.png')}
//                         alt=""
//                       />
//                     </a>
//                   </div> */}

//                   {/* Right section on desktop */}
//                   <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
//                     <button
//                       type="button"
//                       className="flex-shrink-0 rounded-full p-1 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
//                     >
//                       <span className="sr-only">View notifications</span>
//                       <BellIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>

//                     {/* Profile dropdown */}
//                     <Menu as="div" className="relative ml-4 flex-shrink-0">
//                       <div>
//                         <Menu.Button className="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
//                           <span className="sr-only">Open user menu</span>
//                           <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
//                         </Menu.Button>
//                       </div>
//                       <Transition
//                         as={Fragment}
//                         leave="transition ease-in duration-75"
//                         leaveFrom="transform opacity-100 scale-100"
//                         leaveTo="transform opacity-0 scale-95"
//                       >
//                         <Menu.Items className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                           {userNavigation.map((item) => (
//                             <Menu.Item key={item.name}>
//                               {({ active }) => (
//                                 <a
//                                   href={item.href}
//                                   className={classNames(
//                                     active ? 'bg-gray-100' : '',
//                                     'block px-4 py-2 text-sm text-gray-700'
//                                   )}
//                                 >
//                                   {item.name}
//                                 </a>
//                               )}
//                             </Menu.Item>
//                           ))}
//                         </Menu.Items>
//                       </Transition>
//                     </Menu>
//                   </div>

//                   <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
//                     <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
//                       {/* Left nav */}
//                       <div className="hidden lg:col-span-2 lg:block">
//                         <nav className="flex space-x-4">
//                           {navigation.map((item) => (
//                             <a
//                               key={item.name}
//                               href={item.href}
//                               className={classNames(
//                                 item.current ? 'text-white' : 'text-cyan-100',
//                                 'rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10'
//                               )}
//                               aria-current={item.current ? 'page' : undefined}
//                             >
//                               {item.name}
//                             </a>
//                           ))}
//                         </nav>
//                       </div>
//                       <div className="px-12 lg:px-0">
//                         {/* Search */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <Transition.Root as={Fragment}>
//                 <div className="lg:hidden">
//                   <Transition.Child
//                     as={Fragment}
//                     enter="duration-150 ease-out"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="duration-150 ease-in"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                   >
//                     <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
//                   </Transition.Child>

//                   <Transition.Child
//                     as={Fragment}
//                     enter="duration-150 ease-out"
//                     enterFrom="opacity-0 scale-95"
//                     enterTo="opacity-100 scale-100"
//                     leave="duration-150 ease-in"
//                     leaveFrom="opacity-100 scale-100"
//                     leaveTo="opacity-0 scale-95"
//                   >
//                     <Popover.Panel
//                       focus
//                       className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
//                     >
//                       <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
//                         <div className="pt-3 pb-2">
//                           <div className="flex items-center justify-between px-4">
//                             <div>
//                               <img
//                                 className="h-8 w-auto"
//                                 src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600"
//                                 alt="Your Company"
//                               />
//                             </div>
//                             <div className="-mr-2">
//                               <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
//                                 <span className="sr-only">Close menu</span>
//                                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                               </Popover.Button>
//                             </div>
//                           </div>
//                           <div className="mt-3 space-y-1 px-2">
//                             {navigation.map((item) => (
//                               <a
//                                 key={item.name}
//                                 href={item.href}
//                                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
//                               >
//                                 {item.name}
//                               </a>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="pt-4 pb-2">
//                           <div className="flex items-center px-5">
//                             <div className="flex-shrink-0">
//                               <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
//                             </div>
//                             <div className="ml-3 min-w-0 flex-1">
//                               <div className="truncate text-base font-medium text-gray-800">{user.name}</div>
//                               <div className="truncate text-sm font-medium text-gray-500">{user.email}</div>
//                             </div>
//                             <button
//                               type="button"
//                               className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
//                             >
//                               <span className="sr-only">View notifications</span>
//                               <BellIcon className="h-6 w-6" aria-hidden="true" />
//                             </button>
//                           </div>
//                           <div className="mt-3 space-y-1 px-2">
//                             {userNavigation.map((item) => (
//                               <a
//                                 key={item.name}
//                                 href={item.href}
//                                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
//                               >
//                                 {item.name}
//                               </a>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </Popover.Panel>
//                   </Transition.Child>
//                 </div>
//               </Transition.Root>
//             </>
//           )}
//         </Popover>
//         <main className="-mt-24 pb-8">
//           <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//             <h1 className="sr-only">Profile</h1>
//             {/* Main 3 column grid */}
//             <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
//               {/* Left column */}
//               <div className="grid grid-cols-1 gap-4 lg:col-span-2">
//                 {/* Welcome panel */}
//                 <section aria-labelledby="profile-overview-title">
//                   <div className="overflow-hidden rounded-lg bg-white shadow">
//                     <h2 className="sr-only" id="profile-overview-title">
//                       Profile Overview
//                     </h2>
//                     <div className="bg-white p-6">
//                       <div className="sm:flex sm:items-center sm:justify-between">
//                         <div className="sm:flex sm:space-x-5">
//                           <div className="flex-shrink-0">
//                             <img className="mx-auto h-20 w-20 rounded-full" src={user.imageUrl} alt="" />
//                           </div>
//                           <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
//                             <p className="text-sm font-medium text-gray-600">Welcome back,</p>
//                             <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user.name}</p>
//                             <p className="text-sm font-medium text-gray-600">{user.role}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>

//                 {/* Actions panel */}
//                 <section aria-labelledby="quick-links-title">
//                   <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
//                     <h2 className="sr-only" id="quick-links-title">
//                       Quick links
//                     </h2>
//                     {actions.map((action, actionIdx) => (
//                       <div
//                         key={action.name}
//                         className={classNames(
//                           actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
//                           actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
//                           actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
//                           actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
//                           'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500'
//                         )}
//                       >
//                         <div>
//                           <span
//                             className={classNames(
//                               action.iconBackground,
//                               action.iconForeground,
//                               'inline-flex rounded-lg p-3 ring-4 ring-white'
//                             )}
//                           >
//                             <action.icon className="h-6 w-6" aria-hidden="true" />
//                           </span>
//                         </div>
//                         <div className="mt-8">
//                           <h3 className="text-lg font-medium">
//                             <a href={action.href} className="focus:outline-none">
//                               {/* Extend touch target to entire panel */}
//                               <span className="absolute inset-0" aria-hidden="true" />
//                               {action.name}
//                             </a>
//                           </h3>
//                           <p className="mt-2 text-sm text-gray-500">
//                             Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at
//                             blanditiis et quo et molestiae.
//                           </p>
//                         </div>
//                         <span
//                           className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
//                           aria-hidden="true"
//                         >
//                           <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
//                           </svg>
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </section>
//               </div>

//               {/* Right column */}
//               <div className="grid grid-cols-1 gap-4">
//                 {/* Announcements */}
//                 <section aria-labelledby="announcements-title">
//                   <div className="overflow-hidden rounded-lg bg-white shadow">
//                     <div className="p-6">
//                       <h2 className="text-base font-medium text-gray-900" id="announcements-title">
//                         Announcements
//                       </h2>
//                       <div className="mt-6 flow-root">
//                         <ul role="list" className="-my-5 divide-y divide-gray-200">
//                           {announcements.map((announcement) => (
//                             <li key={announcement.id} className="py-5">
//                               <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
//                                 <h3 className="text-sm font-semibold text-gray-800">
//                                   <a href={announcement.href} className="hover:underline focus:outline-none">
//                                     {/* Extend touch target to entire panel */}
//                                     <span className="absolute inset-0" aria-hidden="true" />
//                                     {announcement.title}
//                                   </a>
//                                 </h3>
//                                 <p className="mt-1 text-sm text-gray-600 line-clamp-2">{announcement.preview}</p>
//                               </div>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div className="mt-6">
//                         <a
//                           href="#"
//                           className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                         >
//                           View all
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </div>
//         </main>
//         <footer>
//           <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//             <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
//               <span className="block sm:inline">&copy; 2021 Your Company, Inc.</span>{' '}
//               <span className="block sm:inline">All rights reserved.</span>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   )
// }
















import { ChevronRightIcon } from '@heroicons/react/20/solid'

 const Home = () => {
  return (
    <div className="h-screen relative isolate overflow-hidden bg-gray-900 h">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg>
      <svg
        viewBox="0 0 1108 632"
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <path
          fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
          fillOpacity=".2"
          d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
        />
        <defs>
          <linearGradient
            id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
            x1="1220.59"
            x2="-85.053"
            y1="432.766"
            y2="638.714"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5" />
            <stop offset={1} stopColor="#80CAFF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
        {/* <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <img
            className="h-11"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <span>Just shipped v1.0</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Deploy to the cloud with confidence
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div> */}
        {/* <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;

