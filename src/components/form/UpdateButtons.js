import UpdateToggleVariantButton from "./UpdateToggleVariantButton";

const UpdateButtons = ({
  type,
  showVariants,
  setShowVariants
}) => {

  return (
    <>
      <button
        type="submit"
        className="ml-3 inline-flex justify-center rounded-md bg-testLabBlue py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-testLabBeige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ml-0 mr-3"
      >
        Update Feature
      </button>
      <UpdateToggleVariantButton
        type={type}
        showVariants={showVariants}
        setShowVariants={setShowVariants}
      />
    </>
  );
};

export default UpdateButtons;