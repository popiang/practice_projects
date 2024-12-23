import { createContext, useState } from "react";

export const BMIContext = createContext();

/* eslint-disable react/prop-types */
export const BMIContextProvider = ({ children }) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmiResult, setBmiResult] = useState("");

    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = parseFloat(height) / 100;
            const weightInKg = parseFloat(weight);

            if (
                isNaN(heightInMeters) ||
                isNaN(weightInKg) ||
                heightInMeters <= 0 ||
                weightInKg <= 0
            ) {
                setBmiResult("Invalid Input");
                return;
            }

            const bmi = (weight / (height / 100) ** 2).toFixed(2);
            setBmiResult(bmi);
        }
    };

    return (
        <BMIContext.Provider
            value={{
                height,
                weight,
                setHeight,
                setWeight,
                bmiResult,
                calculateBMI,
            }}
        >
            {children}
        </BMIContext.Provider>
    );
};
