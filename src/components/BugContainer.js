import React from 'react';
import Table from './Table';
import FilterCheckboxes from './FilterCheckboxes';

export default function BugContainer(props) {
    
    const {month, bugLoc, showBugs, showBugFilter} = props;

    return (
        <div>
          <h3 id='showBugs' className={props.toggleHeaderClass('showBugs')} onClick={(e) => props.toggleVisibility(e)}>Bugs</h3>
          <div id='bugSection' className='typeDiv' hidden={!showBugs}>
            <div className='bugFilter'>
              <h4 id='showBugFilter' onClick={(e) => props.toggleVisibility(e)}>
                {showBugFilter ? <span>&#9650; </span> : <span>&#9660; </span>}
                Filters
              </h4>
              <FilterCheckboxes id={'bugCheckDiv'} hidden={!showBugFilter} loc={bugLoc} type={'bugLoc'} updateCheckBoxes={props.updateCheckBoxes} clearChecks={props.clearChecks}/>
            </div>
            <Table month={month} loc={bugLoc} type={'bug'}/>
          </div>
        </div>
    )
}