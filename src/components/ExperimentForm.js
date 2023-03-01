import { useState } from 'react';

/*
TODOS: 
- other experiment data pieces into form (experiment type, start date, end date, percentage) 
- useEffect to fill form data if editing an existing experiment 
- revision of values (which are needed & what if any presets) / what is filled in by SQL (defaults) / translation to API requests 
- onSubmit for form submission, request to API-> is this different for "new experiment" vs "edit experiment"?
= still need a lot of validation: 
    - only one control 
    - weight of experiments adds to 1.0
    - variants have unique names

*/

const ExperimentForm = () => {
  let emptyVariantFormData = { experiment_id: -1, value: '', is_control: false, weight: 0 };

  const [variantFormData, setVariantFormData] = useState([{ ...emptyVariantFormData }]);
  const [experimentFormData, setExperimentFormData] = useState({type_id: 1, name: 'Experiment1', start_date: Date.now(), end_date: Date.now()+1000000000, is_running: false, user_percentage:1.0 })

  let handleVariantChange = (index, e) => {
    let newVariantValues = [...variantFormData];
    if (e.target.name === "is_control") {
      newVariantValues[index][e.target.name] = !(newVariantValues[index][e.target.name]);

    } else {
      newVariantValues[index][e.target.name] = e.target.value;
    }
    setVariantFormData(newVariantValues);
  }
  let handleFormChange = (e) => {
    let newExperimentData = {...experimentFormData};
    newExperimentData[e.target.name] = e.target.value;
    setExperimentFormData(newExperimentData);
  }

  let addVariantFormFields = () => {
    let emptyFormFields = { ...emptyVariantFormData };
    setVariantFormData(variantFormData.concat(emptyFormFields))
  }

  let removeVariantFormFields = (i) => {
    let newFormValues = [...variantFormData];
    newFormValues.splice(i, 1);
    setVariantFormData(newFormValues);
  }

  return (
    <form >
      <label>Experiment Name</label>
      <input type="text" name="name" value={experimentFormData.name} onChange={e => {handleFormChange(e)
      }}/>

      {variantFormData.map((variant, idx) => {
        return (
          <div key={idx}>
            <label>Value</label>
            <input type="text" name="value" value={variant.value || ""} onChange={e => handleVariantChange(idx, e)} />

            <label>Weight</label>
            <input type="text" name="weight" value={variant.weight || 0} onChange={e => handleVariantChange(idx, e)} />

            <label>Is Control?</label>
            <input type="checkbox" name="is_control" checked={variant.is_control} onChange={e => handleVariantChange(idx, e)} />
            
            <button type='button' onClick={()=> removeVariantFormFields(idx)}>Remove Variant</button>
          </div>
        )
      })}
      <button type='button' onClick={() => addVariantFormFields()}>Another Variant</button>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ExperimentForm;