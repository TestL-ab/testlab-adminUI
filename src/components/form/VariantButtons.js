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
        className="rounded bg-white py-1 px-2 text-s font-semibold text-testLabBlue shadow-sm ring-1 ring-inset ring-testLabBlue hover:ring-testLabBeige hover:text-white hover:bg-testLabBeige"
        onClick={handleRemoveVariant}
        id={`remove-${lastVariant}`}
      >
        Remove Variant
      </button>}
    { fifthVariantIsLast
    ? null
    : <button
        type="button"
        className="rounded bg-white py-1 px-2 text-s font-semibold text-testLabBlue shadow-sm ring-1 ring-inset ring-testLabBlue hover:ring-testLabBeige hover:text-white hover:bg-testLabBeige"
        onClick={handleAddVariant}
        id={`add-${lastVariant}`}
      >
        Add Another Variant
      </button>}
    <div className="pt-5">
      <div className="flex justify-start">
        <button
          type="submit"
          className="rounded-md bg-testLabBlue py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-testLabBeige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-testLabBlue"        >
          Submit Variants
        </button>
      </div>
      <div className="pt-5">
        <p className="mt-1 text-sm text-gray-500">All experiments are required to have variants.  If you do not wish to create variants at this time, you may delete the experiment or switch the experiment type to a roll-out (enrolling the same user percentage specified for the experiment in this feature), or a toggle (enrolling all users in this feature).</p>
        <button
          type="button"
          className="rounded-md bg-testLabBlue py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-testLabBeige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-testLabBlue"
          onClick={handleDeleteExperiment}
        >
          Delete Experiment
        </button>
        <button
          type="button"
          className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleChangeToRollOut}
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