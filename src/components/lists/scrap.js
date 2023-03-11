<div>
<h3 className="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>
<dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
<div key={controlVariant.name} className="px-4 py-5 sm:p-6">
      <dt className="text-base font-normal text-gray-900">{controlVairiant.name}</dt>
      <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
        <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
          <span className="ml-2 text-sm font-medium text-gray-500">{controlVariant.weight * 100}% of users in experiment</span>
        </div>
        <div className={classNames('bg-green-100 text-green-800', 'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0')}>
          Control
        </div>
      </dd>
    </div>
  {otherVariants.map((variant) => (
    <div key={variant.id} className="px-4 py-5 sm:p-6">
      <dt className="text-base font-normal text-gray-900">{variant.name}</dt>
      <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
        <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
          <span className="ml-2 text-sm font-medium text-gray-500">{variant.weight * 100}% of users in experiment</span>
        </div>
      </dd>
    </div>
  ))}
</dl>
</div>