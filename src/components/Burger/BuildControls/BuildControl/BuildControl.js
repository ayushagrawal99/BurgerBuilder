import React from 'react';
import './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="Less">LESS</button>
            <button className="More" onClick={props.added}>MORE</button>
        </div>
    );
}

export default buildControl;