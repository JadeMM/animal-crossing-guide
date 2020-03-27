import React from 'react';
import Checkboxes from './Checkboxes';

export default function FilterBar(props) {

    return (
        <div id={props.id} className={props.id} hidden={props.hidden}>
            <h4>Location</h4>
            <Checkboxes section={props.section[0]} type={props.type[0]} updateCheckBoxes={props.updateCheckBoxes} clearChecks={props.clearChecks}/>
            <h4>Time</h4>
            <Checkboxes section={props.section[1]} type={props.type[1]} updateCheckBoxes={props.updateCheckBoxes} clearChecks={props.clearChecks}/>
        </div>
    )
}