import React from 'react';
import Table from './Table';
import FilterCheckboxes from './FilterCheckboxes';

export default function FishContainer(props) {
    
    const {month, fishLoc, showFish, showFishFilter} = props;

    return (
        <div>
          <h3 id='showFish' className={props.toggleHeaderClass('showFish')} onClick={(e) => props.toggleVisibility(e)}>Fish</h3>
          <div id='fishSection' className='typeDiv' hidden={!showFish}>
            <div className='fishFilter'>
              <h4 id='showFishFilter' onClick={(e) => props.toggleVisibility(e)}>
                {showFishFilter ? <span>&#9650; </span> : <span>&#9660; </span>}
                Filters
              </h4>
              <FilterCheckboxes id={'checkDiv'} hidden={!showFishFilter} loc={fishLoc} type={'fishLoc'} updateCheckBoxes={props.updateCheckBoxes} clearChecks={props.clearChecks}/>
            </div>
            <Table month={month} loc={fishLoc} type={'fish'}/>
          </div>
        </div>
    )
}