import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function DatePicker({ onChange = () => {}, initialValue = null }) {
  const [date, setDate] = useState(initialValue);

  useEffect(() => {
    onChange(date);
  }, [date]);

  return (
    <div className="relative max-w-sm">
      <input
        type="date"
        value={date}
        onChange={(e) => {
          e?.target?.value && setDate(e.target.value);
        }}
        onKeyDown={(e) => {
          e.preventDefault();
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:bg-none ring-0 outline-none"
        placeholder="Select date"
      />
    </div>
  );
}

export default DatePicker;
