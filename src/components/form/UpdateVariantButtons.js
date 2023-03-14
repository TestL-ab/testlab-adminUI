import UpdateToggleVariantButton from "./UpdateToggleVariantButton";

const UpdateVariantButtons = ({
  handleRemoveVariant,
  handleAddVariant,
  lastVariant,
  showVariants,
  setShowVariants,
  type
}) => {
  const secondVariantIsLast = lastVariant === 2;
  const fifthVariantIsLast = lastVariant === 5;
  return (
    <>
      {secondVariantIsLast
        ? null
        : <button
          type="button"
          className="rounded bg-white py-1 px-2 text-sm font-semibold text-testLabBlue shadow-sm ring-1 ring-inset ring-testLabBlue hover:ring-testLabBeige hover:text-white hover:bg-testLabBeige"
          onClick={handleRemoveVariant}
          id={`remove-${lastVariant}`}
        >
          Remove Variant
        </button>}
      {fifthVariantIsLast
        ? null
        : <button
          type="button"
          className="rounded bg-white py-1 px-2 text-sm font-semibold text-testLabBlue shadow-sm ring-1 ring-inset ring-testLabBlue hover:ring-testLabBeige hover:text-white hover:bg-testLabBeige"
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
            Update Variants
          </button>
          <UpdateToggleVariantButton type={type} showVariants={showVariants} setShowVariants={setShowVariants} />
        </div>
        <div className="pt-5">
        </div>
      </div>
    </>
  );
};

export default UpdateVariantButtons;