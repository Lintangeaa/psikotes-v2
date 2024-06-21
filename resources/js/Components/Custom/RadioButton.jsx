import React, { useState, useEffect } from "react";

const RadioButton = ({ name, options, initialSelectedValue, onChange, id }) => {
    const [selectedValue, setSelectedValue] = useState(initialSelectedValue);

    useEffect(() => {
        setSelectedValue(initialSelectedValue);
    }, [initialSelectedValue]);

    const handleRadioChange = (value) => {
        setSelectedValue(value);
        onChange(value);
    };

    return (
        <div className="flex w-full px-3 py-2 mt-1 space-x-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
            {options.map((option) => (
                <label
                    key={option.value}
                    className="flex items-center space-x-2"
                >
                    <input
                        id={id}
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={(e) => handleRadioChange(e.target.value)}
                        className="form-radio"
                    />
                    <span>{option.label}</span>
                </label>
            ))}
        </div>
    );
};

export default RadioButton;
