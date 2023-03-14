const Buttons = ({
  setName,
  setDescription,
  dispatch,
  setStartDate,
  setEndDate,
  setPercentageObj,
  setQuery,
  currentDate
}) => {
  const handleClearForm = (event) => {
    event.preventDefault();
    setName("");
    setDescription("");
    dispatch({type: "1"});
    setStartDate(currentDate);
    setEndDate(null);
    setPercentageObj({});
    setQuery("");
  };

  return (
    <div>
      <button
        type="submit"
        className="ml-3 inline-flex justify-center rounded-md bg-testLabBlue py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-testLabBeige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Create Feature
      </button>
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

export default Buttons;