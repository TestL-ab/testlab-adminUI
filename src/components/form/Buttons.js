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
    <>
      <button
        type="submit"
        className="ml-0 inline-flex justify-center rounded-md bg-testLabBlue py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-testLabBeige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ml-0 mr-3"
      >
        Create Feature
      </button>

      <button
        type="button"
        className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-testLabBlue shadow-sm ring-1 ring-inset ring-testLabBlue hover:bg-testLabBeige hover:text-white hover:ring-testLabBeige"
        onClick={handleClearForm}
      >
        Clear Form
      </button>
    </>
  );
};

export default Buttons;