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
          className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"        >
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