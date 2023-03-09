import { useState } from 'react';

const Variants = () => {
  const [variants, setVariants] = useState([{num: 1, val: "Control", weight: 1, is_control: true}])
  /*
  value, experiment_id, is_control, weight
  for form, just need value (text) and weight (menu), and
  delete Variant button (there will just be one add variant button
  at the bottom)
  */

  // will need line that displays % available for new variants
  return (
    <div>

      <p>VARIANT FORMMMMMMMMM</p>

    </div>
  );
};

export default Variants;