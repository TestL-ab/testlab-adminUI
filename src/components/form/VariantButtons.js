const VariantButtons = ({
  handleRemoveVariant,
  handleAddVariant,
  handleDeleteExperiment,
  lastVariant,
  handleChangeToToggle,
  handleChangeToRollOut
 }) => {
  const secondVariantIsLast = lastVariant === 2;
  const fifthVariantIsLast = lastVariant === 5;
  return (
    <>
    { secondVariantIsLast
    ? null
    : <button
        type="button"
        className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={handleRemoveVariant}
        id={`remove-${lastVariant}`}
      >
        Remove Variant
      </button>}
    { fifthVariantIsLast
    ? null
    : <button
        type="button"
        className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={handleAddVariant}
        id={`add-${lastVariant}`}
      >
        Add Another Variant
      </button>}
    <div className="pt-5">
      <div className="flex justify-start">
        <button
          type="submit"
          className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Submit Variants
        </button>
      </div>
      <div className="pt-5">
        <p className="mt-1 text-sm text-gray-500">All experiments are required to have variants.  If you do not wish to create variants at this time, you may delete the experiment or switch the experiment type to a roll-out (enrolling the same user percentage specified for the experiment in this feature), or a toggle (enrolling all users in this feature).</p>
        <button
          type="button"
          className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleDeleteExperiment}
        >
          Delete Experiment
        </button>
        <button
          type="button"
          className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={(e) => handleChangeToRollOut} // want to try this with handleChangeType(2)
        >
          Change to Roll Out
        </button>
        <button
          type="button"
          className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleChangeToToggle}
          >
          Change to Toggle
        </button>
      </div>
    </div>
    </>
  );
};

export default VariantButtons;