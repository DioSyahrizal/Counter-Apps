import React from "react";

import "./CounterOutput.css";

type PropValue = {
    value: number;
};

const counterOutput: React.FC<PropValue> = props => <div className="CounterOutput">Current Counter: {props.value}</div>;

export default counterOutput;
