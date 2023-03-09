import DatePicker from 'react-date-picker';
import formUtils from '../../utils/formUtils';

const DateSelector = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  currentDate,
  type,
  scheduledFeatures,
  currentExperiments,
  maxAvailable,
  setMaxAvailable
}) => {

  const tomorrow =  formUtils.getNextDayDateSelector(currentDate);
  const processedCurrentDate = formUtils.processDayDateSelector(currentDate);
  const processedStartDate = formUtils.processDayDateSelector(startDate);

  const handleChangeStart = (date) => {
    setStartDate(date);
    if (type === 3) {
      const existingExperiments = formUtils.processExperiments(scheduledFeatures, currentExperiments);
      const dateArray = formUtils.getDateRange(date, endDate);
      const available = formUtils.calculateSpaceAvailable(dateArray, existingExperiments);
      setMaxAvailable(available * 100);
    } else {
      setMaxAvailable(null);
    }
  }

  const handleChangeEnd = (date) => {
    setEndDate(date);
    if (type === 3) {
      const existingExperiments = formUtils.processExperiments(scheduledFeatures, currentExperiments);
      const dateArray = formUtils.getDateRange(startDate, date);
      const available = formUtils.calculateSpaceAvailable(dateArray, existingExperiments);
      setMaxAvailable(available * 100);
    } else {
      setMaxAvailable(null);
    }
  };

  return (
    <div className="pt-5">
    <h3 className="text-base font-semibold leading-6 text-gray-900">Select Dates</h3>
    <label htmlFor="start_date" className="block text-sm font-medium leading-6 text-gray-900">
      Start Date
    </label>
    <DatePicker onChange={handleChangeStart} value={startDate} minDate={currentDate} maxDate={endDate} required={true} />
    <label htmlFor="end_date" className="block text-sm font-medium leading-6 text-gray-900">
      End Date
    </label>
    <DatePicker onChange={handleChangeEnd} value={endDate} minDate={processedCurrentDate === processedStartDate ? tomorrow : startDate} required={true} />
  </div>
  )
};

export default DateSelector;