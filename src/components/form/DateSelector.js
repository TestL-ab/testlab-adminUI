import DatePicker from 'react-date-picker';
import formUtils from '../../utils/formUtils';
import  './brandmark-design.png'
const DateSelector = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  currentDate,
  scheduledFeatures,
  currentExperiments,
  setMaxAvailable,
  isUpdate
}) => {

  const tomorrow = formUtils.getNextDayDateSelector(currentDate);
  const processedCurrentDate = formUtils.processDayDateSelector(currentDate);
  const processedStartDate = formUtils.processDayDateSelector(startDate);
  const updateStartDate = formUtils.processDateForUpdate(startDate);

  const handleChangeStart = (date) => {
    setStartDate(date);
    const existingExperiments = formUtils.processExperiments(scheduledFeatures, currentExperiments);
    const dateArray = formUtils.getDateRange(date, endDate);
    const available = formUtils.calculateSpaceAvailable(dateArray, existingExperiments);
    setMaxAvailable(available * 100);
  }

  const handleChangeEnd = (date) => {
    setEndDate(date);
    const existingExperiments = formUtils.processExperiments(scheduledFeatures, currentExperiments);
    const dateArray = formUtils.getDateRange(startDate, date);
    const available = formUtils.calculateSpaceAvailable(dateArray, existingExperiments);
    setMaxAvailable(available * 100);
  };

  return (
    <div className="pt-5">
    <h3 className="text-base font-semibold leading-6 text-gray-900">Select Dates</h3>
    <label htmlFor="start_date" className="block text-sm font-medium leading-6 text-gray-900">
      Start Date
    </label>
    {isUpdate
    ? <p>{updateStartDate}</p>
     : <DatePicker onChange={handleChangeStart} value={startDate} minDate={currentDate} maxDate={endDate} required={true} /> }

    <label htmlFor="end_date" className="block text-sm font-medium leading-6 text-gray-900">
      End Date
    </label>
    <DatePicker onChange={handleChangeEnd} value={endDate} minDate={processedCurrentDate === processedStartDate ? tomorrow : startDate} required={true} />
  </div>
  )
};

export default DateSelector;