import React from "react";

const SelectAnswer = () => {
    return (
        <div key={qIndex} className="mb-4">
            <label className="block mb-2">{question}</label>
            <div className="relative">
                {selectedAnswers[qIndex] && (
                    <CustomButton
                        type="button"
                        className="absolute px-2 py-1 text-xs transform -translate-y-1/2 bg-red-500 rounded-full hover:bg-red-700 right-2 top-1/2"
                        onClick={() => handleCancelAnswer(qIndex)}
                    >
                        x
                    </CustomButton>
                )}
            </div>
        </div>
    );
};

export default SelectAnswer;
