const UpdateButtons = ({
  setName,
  setDescription,
  setEndDate,
  setPercentageObj,
  setQuery,
  type,
  showVariants,
  setShowVariants
}) => {
  const displayShowVariantButton = (type === 3 && !showVariants);
  const  displayShowExperimentButton = (type === 3 && showVariants);

  const handleToggleVariants = (event) => {
    event.preventDefault();
    setShowVariants(!showVariants);
  };

  const handleClearForm = (event) => {
    event.preventDefault();
    setName("");
    setDescription("");
    setEndDate(null);
    setPercentageObj({});
    setQuery("");
  };

  return (
    <div className="flex justify-start">
      <button
        type="submit"
        className="ml-3 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Update Feature
      </button>
      { displayShowVariantButton && <button
        type="button"
        className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={handleToggleVariants}
      >
        Show Variant Form
      </button> }
      { displayShowExperimentButton &&
      <button
        type="button"
        className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={handleToggleVariants}
      >
        Show Experiment Form
      </button>}
      <button
        type="button"
        className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={handleClearForm}
      >
        Clear Form
      </button>
    </div>
  );
};

export default UpdateButtons;