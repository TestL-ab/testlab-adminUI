import UpdateToggleVariantButton from "./UpdateToggleVariantButton";

const UpdateVariantButton = ({ type, showVariants, setShowVariants }) => {
  return (
    <div className="pt-5">
    <div className="flex justify-start">
      <button
        type="submit"
        className="ml-0 inline-flex justify-center rounded-md bg-testLabBlue py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-testLabDarkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ml-0 mr-3"
      >
        Update Variants
      </button>
      <UpdateToggleVariantButton type={type} showVariants={showVariants} setShowVariants={setShowVariants} />
    </div>
    <div className="pt-5">
    </div>
  </div>
  );
};

export default UpdateVariantButton;