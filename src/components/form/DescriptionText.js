const DescriptionText = ({ description, setDescription }) => {
  const handleInput = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setDescription(value);
  };

  return (
    <div className="col-span-5">
      <label htmlFor="about" className="font-semibold text-gray-900">
        Description
      </label>
      <p className="mt-2 text-sm text-gray-500">Include helpful reminders about this feature along with your experiment hypothesis, if relevant.</p>
      <div className="mt-2">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-testLabBlue sm:py-1.5 pt-1 leading-1 py-1.5 px-1.5 sm:text-sm sm:leading-6 w-300"
          value={description}
          onChange={handleInput}
        />
      </div>
    </div>
  )
}

export default DescriptionText;