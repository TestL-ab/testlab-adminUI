const ControlVariantForm = ({variantObj, handleChangedValue, handleChangedWeight, error}) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
    <div className="sm:col-span-3">
    <p className="mt-1 text-sm text-gray-500">Enter details for your control variant here.</p>
      <label htmlFor="value-1" className="block text-sm font-medium leading-6 text-gray-900">
        Control Variant Value
      </label>
      <div className="mt-2">
        <input
          type="text"
          name="value-1"
          id="value-1"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={variantObj.value}
          onChange={handleChangedValue}
          required={true}
          aria-invalid={false}
        />
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="weight-1" className="block text-sm font-medium leading-6 text-gray-900">
          Control User Percentage
        </label>
        <p className="mt-1 text-sm text-gray-500">Enter only integers between 1-100.</p>
        <div className="mt-2">
          <input
            type="text"
            name="weight-1"
            id="weight-1"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={variantObj.weight}
            onChange={handleChangedWeight}
            required={true}
          />
          { error && <p className="mt-2 text-sm text-red-600" >{error}</p> }
        </div>
      </div>
    </div>
  </div>
  );
};

export default ControlVariantForm;