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
        className="rounded bg-white py-1 px-2 text-sm font-semibold text-testLabBlue shadow-sm ring-1 ring-inset ring-testLabBlue hover:ring-testLabBeige hover:text-white hover:bg-testLabBeige"
        onClick={handleToggleVariants}
      >
        Show Variant Form
      </button> }
      { displayShowExperimentButton &&
      <button
        type="button"
        className="rounded bg-white py-1 px-2 text-sm font-semibold text-testLabBlue shadow-sm ring-1 ring-inset ring-testLabBlue hover:ring-testLabBeige hover:text-white hover:bg-testLabBeige"
        onClick={handleToggleVariants}
      >
        Show Experiment Form
      </button>}
    </>
  );
};

export default UpdateToggleVariantButton;