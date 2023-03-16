import { useState } from 'react';
import VariantForm from './VariantForm';
import ControlVariantForm from './ControlVariantForm';
import VariantButtons from './VariantButtons';
import experimentService from '../../services/experimentService';
import formUtils from '../../utils/formUtils';

const Variants = ({ experimentObj, setExperimentObj, setShowVariants, setExperimentChange, setFormSuccess }) => {
  const [variantObj1, setVariantObj1] = useState({ is_control: true, value: "", weight: "" });
  const [variantObj2, setVariantObj2] = useState({ value: "", weight: "" });
  const [variantObj3, setVariantObj3] = useState({ value: "", weight: "" });
  const [variantObj4, setVariantObj4] = useState({ value: "", weight: "" });
  const [variantObj5, setVariantObj5] = useState({ value: "", weight: "" });
  const [error1, setError1] = useState(null);
  const [error2, setError2] = useState(null);
  const [error3, setError3] = useState(null);
  const [error4, setError4] = useState(null);
  const [error5, setError5] = useState(null);
  const [hidden3, setHidden3] = useState(true);
  const [hidden4, setHidden4] = useState(true);
  const [hidden5, setHidden5] = useState(true);
  const [lastVariant, setLastVariant] = useState(2);
  // const [formSuccess, setFormSuccess] = useState(false);
  // const successMessage = `Variants added to ${experimentObj.name} successfully!`;

  const experimentName = experimentObj.name;
  const experimentId = experimentObj.id;

  const changeLastVariant = (num) => {
    switch (num) {
      case 2:
        setHidden3(true);
        setVariantObj3({ value: "", weight: "" })
        setHidden4(true);
        setVariantObj4({ value: "", weight: "" });
        setHidden5(true);
        setVariantObj5({ value: "", weight: "" });
        break;
      case 3:
        setHidden3(false);
        setHidden4(true);
        setVariantObj4({ value: "", weight: "" });
        setHidden5(true);
        setVariantObj5({ value: "", weight: "" });
        break;
      case 4:
        setHidden3(false);
        setHidden4(false);
        setHidden5(true);
        setVariantObj5({ value: "", weight: "" });
        break;
      case 5:
        setHidden3(false);
        setHidden4(false);
        setHidden5(false);
        break;
      default:
        throw Error('Unknown action.')
    }
  };

  const handleAddVariant = (event) => {
    event.preventDefault();
    const num = event.target.id.split("-").pop();
    const nextNum = parseInt(num, 10) + 1;
    if (nextNum > 5) return;
    setLastVariant(nextNum);
    changeLastVariant(nextNum);
  };

  const handleRemoveVariant = (event) => {
    event.preventDefault();
    const num = event.target.id.split("-").pop();
    const nextNum = parseInt(num, 10) - 1;
    if (nextNum < 2) return;
    setLastVariant(nextNum);
    changeLastVariant(nextNum);
  }

  const handleChangedValue = (event) => {
    event.preventDefault();
    const id = event.target.id.split('-').pop();
    console.log(id);
    switch (id) {
      case "1":
        const updatedObj1 = {
          ...variantObj1,
          value: event.target.value,
        }
        setVariantObj1(updatedObj1)
        break;
      case "2":
        const updatedObj2 = {
          ...variantObj2,
          value: event.target.value,
        }
        setVariantObj2(updatedObj2)
        break;
      case "3":
        const updatedObj3 = {
          ...variantObj3,
          value: event.target.value,
        }
        setVariantObj3(updatedObj3)
        break;
      case "4":
        const updatedObj4 = {
          ...variantObj4,
          value: event.target.value,
        }
        setVariantObj4(updatedObj4)
        break;
      case "5":
        const updatedObj5 = {
          ...variantObj5,
          value: event.target.value,
        }
        setVariantObj5(updatedObj5)
        break;
    }
  };

  const handleChangedWeight = (event) => {
    event.preventDefault();
    const id = event.target.id.split('-').pop();
    switch (id) {
      case "1":
        if (!checkValidPercent(event.target.value)) {
          setError1("Error: invalid input")
        } else {
          setError1(null);
        }
        const updatedObj1 = {
          ...variantObj1,
          weight: event.target.value,
        }
        setVariantObj1(updatedObj1)
        break;
      case "2":
        if (!checkValidPercent(event.target.value)) {
          setError2("Error: invalid input")
        } else {
          setError2(null);
        }
        const updatedObj2 = {
          ...variantObj2,
          weight: event.target.value,
        }
        setVariantObj2(updatedObj2)
        break;
      case "3":
        if (!checkValidPercent(event.target.value)) {
          setError3("Error: invalid input")
        } else {
          setError3(null);
        }
        const updatedObj3 = {
          ...variantObj3,
          weight: event.target.value,
        }
        setVariantObj3(updatedObj3)
        break;
      case "4":
        if (!checkValidPercent(event.target.value)) {
          setError4("Error: invalid input")
        } else {
          setError4(null);
        }
        const updatedObj4 = {
          ...variantObj4,
          weight: event.target.value,
        }
        setVariantObj4(updatedObj4)
        break;
      case "5":
        if (!checkValidPercent(event.target.value)) {
          setError5("Error: invalid input")
        } else {
          setError5(null);
        }
        const updatedObj5 = {
          ...variantObj5,
          weight: event.target.value,
        }
        setVariantObj5(updatedObj5)
        break;
    }
  };

  const checkValidPercent = (input) => {
    const numbersOnlyRegex = new RegExp('[0-9]$', 'g');
    if (!numbersOnlyRegex.test(input)) return false;
    if (parseInt(input) > 100 || parseInt(input) < 1) return false;
    return true;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const variantArr = formUtils.processVariantData([variantObj1,
      variantObj2,
      variantObj3,
      variantObj4,
      variantObj5],
      experimentId);

    if (!formUtils.validVariantWeights(variantArr) || !formUtils.distinctVariantValues(variantArr)) {
      return;
    }

    let variantsObj = { id: experimentId, variants: variantArr };
    try {
      console.log(variantsObj);
      const response = await experimentService.createVariants(experimentId, variantsObj);
      console.log(response);
      setFormSuccess(true);
      setExperimentObj(null);
      setShowVariants(false);
      setExperimentChange(true);
      setVariantObj1({ is_control: true, value: "", weight: "" });
      setVariantObj2({ value: "", weight: "" });
      setVariantObj3({ value: "", weight: "" });
      setVariantObj4({ value: "", weight: "" });
      setVariantObj5({ value: "", weight: "" });
    }
    catch (error) {
      console.log(error);
    }
  };

  const handleDeleteExperiment = async (event) => {
    event.preventDefault();
    try {
      let response = await experimentService.deleteExperiment(experimentId);
      setExperimentObj(null);
      setShowVariants(false);
      setExperimentChange(true);
      setVariantObj1({ is_control: true, value: "", weight: "" });
      setVariantObj2({ value: "", weight: "" });
      setVariantObj3({ value: "", weight: "" });
      setVariantObj4({ value: "", weight: "" });
      setVariantObj5({ value: "", weight: "" });

    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeToToggle = async (event) => {
    event.preventDefault();
    try {
      const updatedExperimentObj = {
        ...experimentObj,
        type_id: 1,
        user_percentage: 1
      };

      const responseObj = await experimentService.updateFeature(experimentId, updatedExperimentObj);
      console.log(responseObj);
      setExperimentObj(null);
      setShowVariants(false);
      setExperimentChange(true);
      setVariantObj1({ is_control: true, value: "", weight: "" });
      setVariantObj2({ value: "", weight: "" });
      setVariantObj3({ value: "", weight: "" });
      setVariantObj4({ value: "", weight: "" });
      setVariantObj5({ value: "", weight: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeToRollOut = async (event) => {
    event.preventDefault();
    try {
      const updatedExperimentObj = {
        ...experimentObj,
        type_id: 2,
      };

      const responseObj = await experimentService.updateFeature(experimentId, updatedExperimentObj);
      console.log(responseObj);
      setExperimentObj(null);
      setShowVariants(false);
      setExperimentChange(true);
      setVariantObj1({ is_control: true, value: "", weight: "" });
      setVariantObj2({ value: "", weight: "" });
      setVariantObj3({ value: "", weight: "" });
      setVariantObj4({ value: "", weight: "" });
      setVariantObj5({ value: "", weight: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <FormSuccessNotification formSuccess={formSuccess} setFormSuccess={setFormSuccess} message={successMessage} /> */}

      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h2 className="text-base font-bold leading-6 text-gray-900">Create Variants for {experimentName}</h2>
        <p className="mt-1 text-sm text-gray-500">
          Create up to five variants. Each variant value must be distinct, an the sum of user percentages must
          be precisely 100%.
        </p>
        <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
          <ControlVariantForm
            variantObj={variantObj1}
            handleChangedValue={handleChangedValue}
            handleChangedWeight={handleChangedWeight}
            error={error1}
          />
          <VariantForm
            num="2"
            variantObj={variantObj2}
            handleChangedValue={handleChangedValue}
            handleChangedWeight={handleChangedWeight}
            error={error2}
            handleAddVariant={handleAddVariant}
            handleRemoveVariant={handleRemoveVariant}
            lastVariant={lastVariant}
          />
          <VariantForm
            num="3"
            variantObj={variantObj3}
            handleChangedValue={handleChangedValue}
            handleChangedWeight={handleChangedWeight}
            error={error3}
            hidden={hidden3}
            handleAddVariant={handleAddVariant}
            handleRemoveVariant={handleRemoveVariant}
            lastVariant={lastVariant}
          />
          <VariantForm
            num="4"
            variantObj={variantObj4}
            handleChangedValue={handleChangedValue}
            handleChangedWeight={handleChangedWeight}
            error={error4}
            hidden={hidden4}
            handleAddVariant={handleAddVariant}
            handleRemoveVariant={handleRemoveVariant}
            lastVariant={lastVariant}
          />
          <VariantForm
            num="5"
            variantObj={variantObj5}
            handleChangedValue={handleChangedValue}
            handleChangedWeight={handleChangedWeight}
            error={error5}
            hidden={hidden5}
            handleAddVariant={handleAddVariant}
            handleRemoveVariant={handleRemoveVariant}
            lastVariant={lastVariant}
          />
          <VariantButtons
            handleDeleteExperiment={handleDeleteExperiment}
            handleChangeToToggle={handleChangeToToggle}
            handleChangeToRollOut={handleChangeToRollOut}
            handleRemoveVariant={handleRemoveVariant}
            handleAddVariant={handleAddVariant}
            lastVariant={lastVariant}
          />
        </form>
      </div>
    </>
  );
};

export default Variants;