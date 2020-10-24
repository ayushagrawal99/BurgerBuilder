import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label : "Salad" , type : "salad"},
    {label : "Bacon" , type : "bacon"},
    {label : "Cheese" , type : "cheese"},
    {label : "Meat" , type : "meat"},
]

const buildControls = (props) => {
    return (
        <div className="BuildControls">
            <p><strong>Burger Price : {props.price}</strong></p>
            {
                controls.map( ctrl => {
                    return <BuildControl 
                                key={ctrl.label} 
                                label={ctrl.label}
                                added={() => props.addingredient(ctrl.type)}
                                remove={() => props.removeingredient(ctrl.type)}
                                disabled={props.disabled[ctrl.type]}
                            />;
                        })
            }
            <button className="OrderButton"
                disabled={!props.purchasable} >
                ORDER NOW
            </button>
        </div>
    );
}

export default buildControls;