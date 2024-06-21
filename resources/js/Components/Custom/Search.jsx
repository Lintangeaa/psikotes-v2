import axios from "axios";
import React, { useState, useEffect } from "react";

const SearchableInput = ({
    placeholder,
    fetchUrl,
    onChange,
    initialValue = {},
}) => {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState(initialValue.label || "");
    const [selectedOption, setSelectedOption] = useState(initialValue || null);
    const [isFirstFocus, setIsFirstFocus] = useState(true);

    useEffect(() => {
        if (initialValue && initialValue.label !== inputValue) {
            setInputValue(initialValue.label || "");
            setSelectedOption(initialValue || null);
        }
    }, [initialValue]);

    const handleInputChange = async (inputValue) => {
        setInputValue(inputValue);

        if (!inputValue) {
            setOptions([]);
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.get(
                `${fetchUrl}?q=${encodeURIComponent(inputValue)}`
            );
            setOptions(response.data);
        } catch (error) {
            console.error("Error fetching options:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFocus = async () => {
        if (isFirstFocus) {
            setIsFirstFocus(false);

            setIsLoading(true);
            try {
                const response = await axios.get(fetchUrl);
                setOptions(response.data);
            } catch (error) {
                console.error("Error fetching options:", error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setInputValue(option.label);
        setOptions([]);
        onChange(option); // Mengirimkan option terpilih ke parent component
    };

    return (
        <div className="relative w-full mt-1">
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                onFocus={handleFocus}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {isLoading && (
                <div className="absolute z-10 w-full px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md">
                    Loading...
                </div>
            )}
            {options.length > 0 && (
                <ul className="absolute z-20 w-full mt-1 overflow-y-auto bg-white border border-gray-300 rounded-md max-h-60">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchableInput;
