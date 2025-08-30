import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Custom input for DatePicker
const DateCustomInput = forwardRef(({ value, onClick, onClear }, ref) => (
  <div
    onClick={onClick}
    ref={ref}
    className="flex items-center justify-between  px-6 py-2 cursor-pointer min-w-[120px]"
  >
    {/* If there's a value show date + cancel button, else show icon */}
    {value ? (
      <>
        <span>{value}</span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation(); // prevent opening calendar
            onClear();
          }}
          className="text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
      </>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mx-auto"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
        />
      </svg>
    )}
  </div>
));

const DateCell = ({ getValue, row, column, table }) => {
  const date = getValue();
  const { updateData } = table.options.meta;

  return (
    <DatePicker
      wrapperClassName="date-wrapper"
      dateFormat="MMM d"
      selected={date ? new Date(date) : null}
      onChange={(newDate) => updateData(row.index, column.id, newDate)}
      customInput={
        <DateCustomInput
          onClear={() => updateData(row.index, column.id, null)}
        />
      }
    />
  );
};

export default DateCell;
