import UpdateToggleVariantButton from "./UpdateToggleVariantButton";

const UpdateButtons = ({
  type,
  showVariants,
  setShowVariants
}) => {

  return (
    <div className="flex justify-start">
      <button
        type="submit"
        className="ml-3 inline-flex justify-center rounded-md bg-testLabBlue py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-testLabBlue"
      >
        Update Feature
      </button>
      <UpdateToggleVariantButton
        type={type}
        showVariants={showVariants}
        setShowVariants={setShowVariants}
      />
    </div>
  );
};

export default UpdateButtons;