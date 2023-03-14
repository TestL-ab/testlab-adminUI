const NameInput = ({ name, setName, existingNames, nameTaken, setNameTaken }) => {
  const handleInput = (event) => {
    event.preventDefault();
    const value = event.target.value;
    existingNames.includes(value.toLowerCase().trim())
      ? setNameTaken(true)
      : setNameTaken(false);
    setName(value);
  }

  return (
    <div className="sm:col-span-5">
    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
      Feature Name
    </label>
    <div className="mt-2 flex rounded-md shadow-sm">
      <input
        type="text"
        name="name"
        id="name"
        className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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