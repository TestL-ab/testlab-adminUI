<div className="overflow-hidden bg-white shadow sm:rounded-lg">
<div className="px-4 py-5 sm:px-6">
  <h3 className="text-base font-semibold leading-6 text-gray-900">{experiment.name}</h3>
  <p className="mt-1 max-w-2xl text-sm text-gray-500">{experiment.description}</p>
</div>
<div className="border-t border-gray-200 px-4 py-5 sm:px-6">
  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
    <div className="sm:col-span-1">
      <dt className="text-sm font-medium text-gray-500">Start Date</dt>
      <dd className="mt-1 text-sm text-gray-900">{experiment.startDate}</dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-sm font-medium text-gray-500">End Date</dt>
      <dd className="mt-1 text-sm text-gray-900">{experiment.endDate}</dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-sm font-medium text-gray-500">Users Enrolled</dt>
      <dd className="mt-1 text-sm text-gray-900">{experiment.userPercentage}</dd>
    </div>
    <div className="sm:col-span-2">
      <dt className="text-sm font-medium text-gray-500">About</dt>
      <dd className="mt-1 text-sm text-gray-900">
        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
        qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
        pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
      </dd>
    </div>
    <div className="sm:col-span-2">
      <dt className="text-sm font-medium text-gray-500">Attachments</dt>
      <dd className="mt-1 text-sm text-gray-900">
        <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
          <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
            <div className="flex w-0 flex-1 items-center">
              <span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
            </div>
            <div className="ml-4 flex-shrink-0">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Download
              </a>
            </div>
          </li>
          <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
            <div className="flex w-0 flex-1 items-center">
              <span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
            </div>
            <div className="ml-4 flex-shrink-0">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Download
              </a>
            </div>
          </li>
        </ul>
      </dd>
    </div>
  </dl>
</div>
</div>