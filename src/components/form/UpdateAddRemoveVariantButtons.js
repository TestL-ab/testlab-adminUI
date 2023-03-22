import UpdateToggleVariantButton from "./UpdateToggleVariantButton";

const UpdateAddRemoveVariantButtons = ({
  handleRemoveVariant,
  handleAddVariant,
  lastVariant
}) => {
  const secondVariantIsLast = lastVariant === 2;
  const fifthVariantIsLast = lastVariant === 5;
  console.log("last testing");
  return (
    <>
      {!fifthVariantIsLast && <button
          type="button"
          className="rounded bg-white py-1 px-2 text-sm font-semibold text-testLabBlue shadow-sm ring-1 ring-inset ring-testLabBlue hover:ring-testLabBeige hover:text-white hover:bg-testLabBeige"
          onClick={handleAddVariant}
          id={`add-${lastVariant}`}
        >
          Add Another Variant
        </button>}
      {!secondVariantIsLast && <button
          type="button"
          className="rounded bg-white py-1 px-2 text-sm font-semibold text-testLabBlue shadow-sm ring-1 ring-inset ring-testLabBlue hover:ring-testLabBeige hover:text-white hover:bg-testLabBeige"
          onClick={handleRemoveVariant}
          id={`remove-${lastVariant}`}
        >
          Remove Variant
        </button>}
    </>
  );
};

export default UpdateAddRemoveVariantButtons;