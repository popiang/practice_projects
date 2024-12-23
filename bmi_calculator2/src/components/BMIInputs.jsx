import { useContext } from "react";
import { BMIContext } from "../context/BMIContext";

const BMIInputs = () => {
    const { height, setHeight, weight, setWeight, calculateBMI } =
        useContext(BMIContext);

    return (
        <div>
            <label>
                <span>Your Height (cm): </span>
                <input
                    type="text"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </label>
            <label>
                <span>Your Weight (kg): </span>
                <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </label>
            <button onClick={calculateBMI}>Calculate BMI</button>
        </div>
    );
};

export default BMIInputs;
