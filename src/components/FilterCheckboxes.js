import React from 'react';

export default function FilterCheckboxes(props) {

    const capFirstLetter = (word) => word.replace(/^\w/, c => c.toUpperCase());

    return (
        <div id={props.id} className={props.id} hidden={props.hidden}>
            <h4>Location</h4>
            {Object.keys(props.loc).map(key => {
                return (
                    <span key={key}>
                        <input type="checkbox" checked={props.loc[key]} onChange={(e) => props.updateCheckBoxes(e)} id={key} name={props.type}/>
                        <label htmlFor={key}>{capFirstLetter(key)}</label>
                    </span>
                )
            })}
            <button onClick={(e) => props.clearChecks(e)} id={props.type}>Clear All</button>
        </div>
    )
}