const types = [
  { id: 1,  title: "Toggle" },
  { id: 2, title: "Roll Out" },
  { id: 3, title: "Experiment"}
];

const TypeRadio = ({ setType }) => {
  const handleChange = (event) => {
    const selected = event.currentTarget;
    setType(Number(selected.value));
  }

  return (
    <div>
      <label className="text-base font-semibold text-gray-900">Feature Type</label>
      <p className="text-sm text-gray-500">Select one.</p>
      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4">
          {types.map((type) => (
            <div key={type.id} className="flex items-center">
              <input
                id={type.id}
                name="notification-method"
                type="radio"
                defaultChecked={type.id === 1}
                value={type.id}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor={type.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                {type.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default TypeRadio;
