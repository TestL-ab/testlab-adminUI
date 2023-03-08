import DatePicker from 'react-date-picker';

const DateSelector = ({ startDate, setStartDate, endDate, setEndDate, currentDate }) => {
  return (
    <div className="pt-5">
    <h3 className="text-base font-semibold leading-6 text-gray-900">Select Dates</h3>
    <label htmlFor="start_date" className="block text-sm font-medium leading-6 text-gray-900">
      Start Date
    </label>
    <DatePicker onChange={setStartDate} value={startDate} minDate={currentDate} maxDate={endDate} required={true} />
    <label htmlFor="end_date" className="block text-sm font-medium leading-6 text-gray-900">
      End Date
    </label>
    <DatePicker onChange={setEndDate} value={endDate} minDate={startDate} required={true} />
  </div>
  )
};

export default DateSelector;