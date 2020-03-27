import React from 'react';

export default function Checkboxes(props) {

    const capFirstLetter = (word) => word.replace(/^\w/, c => c.toUpperCase());

    return (
        <div >
            {Object.keys(props.section).map(key => {
                return (
                    <span key={key}>
                        <input type="checkbox" checked={props.section[key]} onChange={(e) => props.updateCheckBoxes(e)} id={key} name={props.type}/>
                        <label htmlFor={key}>{capFirstLetter(key)}</label>
                    </span>
                )
            })}
            <button onClick={(e) => props.clearChecks(e)} id={props.type}>Clear All</button>
        </div>
    )
}