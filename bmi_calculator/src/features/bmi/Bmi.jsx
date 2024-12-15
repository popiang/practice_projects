import { useDispatch, useSelector } from "react-redux";
import { calculate, reset, set_height, set_weight } from "./bmiSlice";
import { useState } from "react";

function Bmi() {
    const { height, weight, result, category } = useSelector(
        (state) => state.bmi
    );
    const dispatch = useDispatch();

    const [errors, setErrors] = useState({ height: "", weight: "" });

    const validateHeight = (value) => {
        if (value <= 0)
            setErrors((prev) => ({
                ...prev,
                height: "Please type in a valid height (cm)",
            }));
        else
            setErrors((prev) => ({
                ...prev,
                height: "",
            }));
    };

    const validateWeight = (value) => {
        if (value <= 0)
            setErrors((prev) => ({
                ...prev,
                weight: "Please type in a valid weight (kg)",
            }));
        else
            setErrors((prev) => ({
                ...prev,
                weight: "",
            }));
    };

    const handleHeightChange = (e) => {
        const value = e.target.value;
        dispatch(set_height(value));
        validateHeight(value);
    };

    const handleWeightChange = (e) => {
        const value = e.target.value;
        dispatch(set_weight(value));
        validateWeight(value);
    };

    return (
        <div className="bmi-container">
            <h3>BMI Calculator</h3>
            <label>
                Your height:
                <input
                    type="number"
                    value={height}
                    onChange={handleHeightChange}
                />
                {errors.height && <p className="error">{errors.height}</p>}
            </label>
            <label>
                Your weight:
                <input
                    type="number"
                    value={weight}
                    onChange={handleWeightChange}
                />
                {errors.weight && <p className="error">{errors.weight}</p>}
            </label>
            <button
                onClick={() => dispatch(calculate())}
                disabled={errors.height || errors.weight}
            >
                Calculate BMI
            </button>
            <button onClick={() => dispatch(reset())}>Reset</button>

            {result > 0 && (
                <>
                    <h2>You BMI Result: {result.toFixed(2)}</h2>
                    <h3>You BMI Category: {category}</h3>
                </>
            )}
        </div>
    );
}

export default Bmi;
