const VariantForm = ({
    num,
    variantObj,
    handleChangedValue,
    handleChangedWeight,
    error,
    hidden,
  }) => {

  return (
    <>
    { hidden
      ? null
    : <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
    <div className="sm:col-span-3">
      <label htmlFor={`value-${num}`} className="block text-sm font-medium leading-6 text-gray-900">
        Variant {num} Value
      </label>
      <div className="mt-2">
        <input
          type="text"
          name={`value-${num}`}
          id={`value-${num}`}
          className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-testLabBlue sm:text-sm sm:leading-6"
          value={variantObj.value}
          onChange={handleChangedValue}
          required={true}
        />
      </div>
      <div className="sm:col-span-3">
        <label htmlFor={`weight-${num}`} className="block text-sm font-medium leading-6 text-gray-900">
          Variant {num} User Percentage
        </label>
        <p className="mt-1 text-sm text-gray-500">Enter only integers between 1-100.</p>
        <div className="mt-2">
          <input
            type="text"
            name={`weight-${num}`}
            id={`weight-${num}`}
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-testLabBlue sm:text-sm sm:leading-6"
            value={variantObj.weight}
            onChange={handleChangedWeight}
            required={true}
          />
        { error && <p className="mt-2 text-sm text-red-600">{error}</p> }
        </div>
      </div>
    </div>
  </div>
  }
  </>
  );
};

export default VariantForm;