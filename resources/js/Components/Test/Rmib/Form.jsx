import CustomButton from "@/Components/CustomButton";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaDeleteLeft } from "react-icons/fa6";
import Alert from "@/Components/Custom/Alert";

const RmibForm = ({ title, datas }) => {
    const [currentSession, setCurrentSession] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(
        Array(datas[currentSession].length).fill(null)
    );
    const [allSessionAnswers, setAllSessionAnswers] = useState([]);

    useEffect(() => {
        const fetchSessionAnswers = () => {
            const sessionAnswers = [];
            datas.forEach((sessionData, index) => {
                const localStorageKey = `session${index + 1}Answers`;
                const storedAnswers = JSON.parse(
                    localStorage.getItem(localStorageKey)
                );
                if (storedAnswers) {
                    sessionAnswers.push(...storedAnswers);
                }
            });
            setAllSessionAnswers(sessionAnswers);
        };

        fetchSessionAnswers();
    }, [currentSession, datas.length]);

    const handleAnswerChange = (questionIndex, answerValue) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[questionIndex] = answerValue;
        setSelectedAnswers(newSelectedAnswers);
    };

    const handleCancelAnswer = (questionIndex) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[questionIndex] = null;
        setSelectedAnswers(newSelectedAnswers);
    };

    const isAnswerSelected = (answerValue) => {
        return selectedAnswers.includes(answerValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedAnswers.some((answer) => answer === null)) {
            Alert.error("Harap lengkapi semua jawaban sebelum melanjutkan.");
            return;
        }

        if (currentSession === datas.length - 1) {
            showConfirmationModal("Anda akan menyelesaikan test", false);
        } else {
            showConfirmationModal(
                "Anda akan melanjutkan ke sesi berikutnya",
                true
            );
        }
    };

    const session = () => {
        const sessionAnswers = datas[currentSession].map((question, index) => ({
            [question.name]: selectedAnswers[index],
        }));
        localStorage.setItem(
            `session${currentSession + 1}Answers`,
            JSON.stringify(sessionAnswers)
        );

        console.log("sesion", sessionAnswers);

        setCurrentSession(currentSession + 1);
        setSelectedAnswers(Array(datas[currentSession + 1].length).fill(null));
    };

    const endSession = (allSessionAnswers) => {
        const counts = {};
        allSessionAnswers.forEach((answer) => {
            const name = Object.keys(answer)[0];
            const value = answer[name];
            counts[name] = (counts[name] || 0) + value;
        });

        // Sort names by their counts in ascending order
        const sortedNames = Object.keys(counts).sort(
            (nameA, nameB) => counts[nameA] - counts[nameB]
        );

        // Construct final result with sorted names
        const finalResult = sortedNames.map((name) => ({
            [name]: counts[name],
        }));

        console.log("Final Result:", finalResult);
    };

    const showConfirmationModal = (text, moveNextSession) => {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: text,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, lanjutkan!",
            cancelButtonText: "Tidak, batalkan",
        }).then((result) => {
            if (result.isConfirmed) {
                if (moveNextSession) {
                    setCurrentSession(currentSession + 1);
                    session();
                } else {
                    endSession(allSessionAnswers);
                }
            }
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white rounded-lg p-7"
        >
            <h1>{title}</h1>
            {datas[currentSession].map((question, qIndex) => (
                <div key={qIndex} className="mb-4">
                    <label className="block mb-2">{question.question}</label>
                    <div className="relative">
                        <select
                            value={selectedAnswers[qIndex] || ""}
                            onChange={(e) =>
                                handleAnswerChange(
                                    qIndex,
                                    parseInt(e.target.value)
                                )
                            }
                            className="block w-full pr-10 mt-1 border border-blue-400 rounded"
                        >
                            <option value="" disabled>
                                Select Order
                            </option>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(
                                (number) => (
                                    <option
                                        key={number}
                                        value={number}
                                        disabled={
                                            isAnswerSelected(number) &&
                                            selectedAnswers[qIndex] !== number
                                        }
                                    >
                                        {number}
                                    </option>
                                )
                            )}
                        </select>
                        {selectedAnswers[qIndex] !== null && (
                            <CustomButton
                                type="button"
                                className="absolute transform -translate-y-1/2 bg-white right-2 top-1/2"
                                onClick={() => handleCancelAnswer(qIndex)}
                            >
                                <FaDeleteLeft className="text-xl text-red-500 rounded-full hover:text-red-700" />
                            </CustomButton>
                        )}
                    </div>
                </div>
            ))}

            {currentSession === datas.length - 1 ? (
                <CustomButton
                    type="submit"
                    className="bg-green-500 hover:bg-green-700"
                >
                    Submit
                </CustomButton>
            ) : (
                <CustomButton
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-700"
                >
                    Next
                </CustomButton>
            )}
        </form>
    );
};

export default RmibForm;
