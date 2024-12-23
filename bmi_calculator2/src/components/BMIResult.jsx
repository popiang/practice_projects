import { useContext } from "react";
import { BMIContext } from "../context/BMIContext";

const BMIResult = () => {
    const { bmiResult } = useContext(BMIContext);

    return <div>Your BMI: {bmiResult}</div>;
};

export default BMIResult;
