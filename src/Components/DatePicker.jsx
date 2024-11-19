import { DateRange } from "react-date-range";

// eslint-disable-next-line react/prop-types
const DatePicker = ({ handleCalanderChange, value }) => {
  return (
    <DateRange
      onChange={handleCalanderChange}
      rangeColors={["#F43F5E"]}
      direction="vertical"
      showDateDisplay={false}
      ranges={[value]}
    />
  );
};

export default DatePicker;
