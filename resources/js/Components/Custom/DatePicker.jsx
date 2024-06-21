import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ type, selected, onChange, placeholderText }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const now = new Date();
        setCurrentDate(now);
    }, []);

    const dateFormat = {
        year: "yyyy",
        month: "MM/yyyy",
        date: "dd/MM/yyyy",
    };

    const handleDateChange = (date) => {
        if (type === "year") {
            onChange(date.getFullYear());
        } else if (type === "month") {
            onChange(date);
        } else {
            onChange(date);
        }
    };

    return (
        <div className="relative mt-1">
            <DatePicker
                selected={selected}
                onChange={handleDateChange}
                showYearPicker={type === "year"}
                showMonthYearPicker={type === "month"}
                dateFormat={dateFormat[type]}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholderText={placeholderText}
            />
        </div>
    );
};

export default CustomDatePicker;
