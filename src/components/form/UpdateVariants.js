import { useState, useEffect } from 'react';
import VariantForm from './VariantForm';
import ControlVariantForm from './ControlVariantForm';
import experimentService from '../../services/experimentService';
import FormSuccessNotification from './FormSuccessNotification';
import formUtils from '../../utils/formUtils';
import UpdateAddRemoveVariantButtons from './UpdateAddRemoveVariantButtons';
import UpdateVariantButton from './UpdateVariantButton';

const UpdateVariants = ({
  experimentObj,
  setExperimentObj,
  showVariants,
  setShowVariants,
  setExperimentChange,
  processedFeatures,
  setProcessedFeatures,
  setShowUpdateModal
}) => {
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
  const [lastVariant, setLastVariant] = useState(experimentObj.variant_arr.length);
  const [formSuccess, setFormSuccess] = useState(false);

  const experimentName = experimentObj.name;
  const experimentId = experimentObj.id;
  const successMessage = `Variants for ${experimentName} updated successfully!`;
  const upcomingExperiment = formUtils.isUpcomingFeature(experimentObj);

  useEffect(() => {
    const variantObjArr = experimentObj.variant_arr.map(obj => { return { ...obj, weight: obj.weight * 100 } })
    const control = variantObjArr.filter(obj => obj.is_control).pop() || experimentObj[0];
    const tests = variantObjArr.filter(obj => !obj.is_control);
    if (tests.length === variantObjArr.length) control = tests.shift();
    if (control) setVariantObj1(control);
    if (tests[0]) setVariantObj2(tests[0]);
    if (tests[1]) {
      setVariantObj3(tests[1]);
      setHidden3(false);
    }
    if (tests[2]) {

      setVariantObj4(tests[2]);
      setHidden4(false);
    }
    if (tests[3]) {
      setVariantObj5(tests[3]);
      setHidden5(false);
    }
  }, []);

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

  const handleUpdate = async (event) => {
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
      const response = await experimentService.createVariants(experimentId, variantsObj);
      console.log(response);
      setExperimentChange(true);
      const updatedFeatures = processedFeatures.map(featObj => {
        if (featObj.id === experimentObj.id) {
          return { ...featObj, variant_arr: response };
        } else {
          return featObj;
        }
      });
      setProcessedFeatures(updatedFeatures);
      setFormSuccess(true);
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


  return (
    <>
      <FormSuccessNotification
        formSuccess={formSuccess}
        setFormSuccess={setFormSuccess}
        isUpdate={true}
        setShowUpdateModal={setShowUpdateModal}
        message={successMessage}
      />
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Update Variants for {experimentName}</h3>
        <p className="mt-1 text-sm text-gray-500">
          Create up to five variants. Each variant value must be distinct, an the sum of user percentages must
          be precisely 100%.
        </p>
        <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleUpdate}>
          <ControlVariantForm
            variantObj={variantObj1}
            handleChangedValue={handleChangedValue}
            handleChangedWeight={handleChangedWeight}
            error={error1}
            upcomingExperiment={upcomingExperiment}
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
            upcomingExperiment={upcomingExperiment}
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
            upcomingExperiment={upcomingExperiment}
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
            upcomingExperiment={upcomingExperiment}
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
            upcomingExperiment={upcomingExperiment}
          />
          {upcomingExperiment &&
            <UpdateAddRemoveVariantButtons
              handleRemoveVariant={handleRemoveVariant}
              handleAddVariant={handleAddVariant}
              lastVariant={lastVariant}
            />
            }
          <UpdateVariantButton
            type={experimentObj.type_id}
            showVariants={showVariants}
            setShowVarians={setShowVariants}
          />
        </form>
      </div>
    </>
  );
};

export default UpdateVariants;