import { useEffect } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import formUtils from '../../utils/formUtils';

const DateSelector = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  currentDate,
  scheduledFeatures,
  currentExperiments,
  setMaxAvailable,
  isUpdate,
  updateId
}) => {
  console.log('isupdate',isUpdate, updateId);

  const tomorrow = formUtils.getNextDayDateSelector(currentDate);
  const processedCurrentDate = formUtils.processDayDateSelector(currentDate);
  const processedStartDate = formUtils.processDayDateSelector(startDate);
  const updateStartDate = formUtils.processDateForUpdate(startDate);

  useEffect(() => {
    if (startDate && endDate) {
      let existingExperiments = formUtils.processExperiments(scheduledFeatures, currentExperiments);
      if (isUpdate) {
        existingExperiments = existingExperiments.filter((obj) => {
           return obj.id !== updateId
        });
      }
      const dateArray = formUtils.getDateRange(startDate, endDate);
      const available = formUtils.calculateSpaceAvailable(dateArray, existingExperiments);
      setMaxAvailable(available * 100);
    }
  }, []);

  const handleChangeStart = (date) => {
    setStartDate(date);
    let existingExperiments = formUtils.processExperiments(scheduledFeatures, currentExperiments);
    if (isUpdate) {
      existingExperiments = existingExperiments.filter((obj) => obj.id !== updateId);
    }
    const dateArray = formUtils.getDateRange(date, endDate);
    const available = formUtils.calculateSpaceAvailable(dateArray, existingExperiments);
    setMaxAvailable(available * 100);
  }

  const handleChangeEnd = (date) => {
    setEndDate(date);
    let existingExperiments = formUtils.processExperiments(scheduledFeatures, currentExperiments);
    if (isUpdate) {
      existingExperiments = existingExperiments.filter((obj) => obj.id !== updateId);
    }
    const dateArray = formUtils.getDateRange(startDate, date);
    const available = formUtils.calculateSpaceAvailable(dateArray, existingExperiments);
    setMaxAvailable(available * 100);
  };

  return (
    <div className="pt-5 col-span-3 w-48">
      <h3 className="text-base font-semibold leading-6 text-gray-900">Select Dates</h3>
      <br />
      <label htmlFor="start_date" className="block text-sm font-medium leading-6 text-gray-900">
        Start Date
      </label>
      {isUpdate
        ? <p>{updateStartDate}</p>
        : <DatePicker onChange={handleChangeStart} value={startDate} minDate={currentDate} maxDate={endDate} required={true} />}

      <label htmlFor="end_date" className="block text-sm font-medium leading-6 text-gray-900">
        End Date
      </label>
      <DatePicker style={{"border-radius": 20}} onChange={handleChangeEnd} value={endDate} minDate={processedCurrentDate === processedStartDate ? tomorrow : startDate} required={true} />
    </div>
  );
};

export default DateSelector;