import formUtils from "../../utils/formUtils";
import { useReducer } from "react"

const types = [
  { id: 1,  title: "Toggle" },
  { id: 2, title: "Roll Out" },
  { id: 3, title: "Experiment"}
];

const TypeRadio = ({ type, setType, dispatch }) => {
  console.log("type:", type);
  const handleChange = (id) => {
    console.log("Change!!!")
    return function() {dispatch({type: String(id)})}
  }
  // const [type, dispatch] = useReducer(reducer, 1)

  // const initialState = 1;

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case '1':
  //       return 1;
  //     case '2':
  //       return 2;
  //     case '3':
  //       return 3;
  //     default:
  //       console.log(action.type);
  //   }
  // }


  // const handleChange = (event) => {
  //   const selected = event.currentTarget;
  //   let action = selected.value;

  // }

  // const RadioButton = ({ id, t, onChange }) => {
  //   return (
  //     <div key={id} className="flex items-center">
  //     <input
  //       id={id}
  //       name="notification-method"
  //       type="radio"
  //       defaultChecked={id === type}
  //       value={id}
  //       onChange={handleChange}
  //
  //       className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
  //     />
  //     <label htmlFor={id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
  //       {typeObj.title}
  //     </label>
  //     </div>
  //   );
  // };

  return (
    <div>
      <label className="text-base font-semibold text-gray-900">Feature Type</label>
      <p className="text-sm text-gray-500">Select one.</p>
      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4">
          {types.map((typeObj) => (
            <div key={typeObj.id} className="flex items-center">
               <input
                id={typeObj.id}
                name="notification-method"
                type="radio"
                // defaultChecked={typeObj.id === type}
                checked={type === typeObj.id}
                value={typeObj.id}
                onChange={handleChange(typeObj.id)}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor={typeObj.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                {typeObj.title}
              </label>

            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default TypeRadio;
