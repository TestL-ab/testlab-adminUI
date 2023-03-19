import { useEffect } from 'react';

const UpdateToggleVariantButton = ({
  type,
  showVariants,
  setShowVariants
}) => {
  useEffect(() => {
  }, [showVariants]);

  const displayShowVariantButton = (type === 3 && !showVariants);
  const  displayShowExperimentButton = (type === 3 && showVariants);

  const handleToggleVariants = (event) => {
    event.preventDefault();
    setShowVariants(!showVariants);
  };

  return (
    <>
      { displayShowVariantButton && <button
        type="button"
        className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-testLabBlue shadow-sm ring-1 ring-inset ring-testLabBlue hover:bg-testLabBeige hover:text-white hover:ring-testLabBeige"
        onClick={handleToggleVariants}
      >
        Show Variant Form
      </button> }
      { displayShowExperimentButton &&
      <button
        type="button"
        className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-testLabBlue shadow-sm ring-1 ring-inset ring-testLabBlue hover:bg-testLabBeige hover:text-white hover:ring-testLabBeige"
        onClick={handleToggleVariants}
      >
        Show Experiment Form
      </button>}
    </>
  );
};

export default UpdateToggleVariantButton;