import React from "react";
import "./CounterControl.css";

type ClickProp = {
    clicked: any;
    label: string;
};

const CounterControl: React.FC<ClickProp> = props => {
    return (
        <div className="CounterControl" onClick={props.clicked}>
            {props.label}
        </div>
    );
};

export default CounterControl;
