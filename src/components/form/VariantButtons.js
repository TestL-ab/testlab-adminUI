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
          {fifthVariantIsLast
        ? null
        : <button
          type="button"
          className="rounded-md mr-3 bg-white py-2 px-3 text-sm font-semibold text-testLabBlue shadow-sm ring-1 ring-inset ring-testLabBlue hover:bg-testLabBeige hover:text-white hover:ring-testLabBeige"
          onClick={handleAddVariant}
          id={`add-${lastVariant}`}
        >
          Add Another Variant
        </button>}
      {secondVariantIsLast
        ? null
        : <button
          type="button"
          className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-testLabBlue shadow-sm ring-1 ring-inset ring-testLabBlue hover:bg-testLabBeige hover:text-white hover:ring-testLabBeige mr-3"
          onClick={handleRemoveVariant}
          id={`remove-${lastVariant}`}
        >
          Remove Variant
        </button>}

      <div className="pt-5">
        <div className="flex justify-start">
          <button
            type="submit"
            className="ml-0 inline-flex justify-center rounded-md bg-testLabDarkBlue py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-testLabBeige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ml-0 mr-3"
            >
            Submit Variants
          </button>
        </div>
        <div className="pt-5">
          <br />
          <p className="mt-1 text-sm text-gray-500">All experiments are required to have variants.  If you do not wish to create variants at this time, you may delete the experiment or switch the experiment type to a roll-out (enrolling the same user percentage specified for the experiment in this feature), or a toggle (enrolling all users in this feature).</p>
          <br />
          <button
            type="button"
            className="ml-0 inline-flex justify-center rounded-md bg-testLabDarkBlue py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-testLabBeige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ml-0 mr-3"
            onClick={handleDeleteExperiment}
          >
            Delete Experiment
          </button>
          <button
            type="button"
            className="rounded-md bg-testLabBlue py-2 px-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-testLabBlue hover:bg-testLabBeige hover:text-white hover:ring-testLabBeige mr-3"
            onClick={handleChangeToRollOut}
          >
            Change to Rollout
          </button>
          <button
            type="button"
            className="rounded-md bg-testLabBlue py-2 px-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-testLabBlue hover:bg-testLabBeige hover:text-white hover:ring-testLabBeige"
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