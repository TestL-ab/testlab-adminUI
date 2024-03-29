const NameInput = ({ name, setName, existingNames, nameTaken, setNameTaken, updateFeatureCurrentName }) => {
  const handleInput = (event) => {
    event.preventDefault();
    const value = event.target.value;
    if (updateFeatureCurrentName &&
        updateFeatureCurrentName.toLowerCase().trim() === value.toLowerCase().trim()) {
          setNameTaken(false);
          setName(value);
          return
        }

    existingNames.includes(value.toLowerCase().trim())
      ? setNameTaken(true)
      : setNameTaken(false);
    setName(value);
  }

  return (
    <div className="sm:col-span-5">
      <label htmlFor="name" className="font-semibold text-gray-900">
        Feature Name
      </label>
      <div className="mt-2 flex rounded-md shadow-sm sm:col-span-5">
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full min-w-0 flex-1 py-1.5 px-1.5 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-testLabBlue sm:text-sm sm:leading-6 sm:py-1.5"
          value={name}
          onChange={handleInput}
          required={true}
        />
      </div>
      {nameTaken && <p className="mt-2 text-sm text-red-600">A feature with this name already exists. Please enter another name.</p>}
    </div>
  );
}

export default NameInput;