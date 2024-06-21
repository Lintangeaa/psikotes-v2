import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const handleKeyPress = (e) => {
        if (type === "number" && !/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };

    const handleInput = (e) => {
        if (type === "number" && /[^0-9]/.test(e.target.value)) {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
        }
    };

    return (
        <input
            {...props}
            type={type}
            className={
                "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                className
            }
            onKeyPress={handleKeyPress}
            onInput={handleInput}
            ref={input}
        />
    );
});
