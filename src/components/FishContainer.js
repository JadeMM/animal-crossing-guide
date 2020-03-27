import React from 'react';
import Table from './Table';
import FilterCheckboxes from './FilterCheckboxes';

export default class FishContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fishLoc: {
        ocean: true,
        river: true,
        pier: true,
        pond: true,
        waterfall: true,
        mouth: true
      },
      showFish: true,
      showFishFilter: false,
    }
  }

  updateCheckBoxes = (e) => {
    let stateObj = {...this.state};

    if(this.state.fishLoc[e.target.id]) {
      stateObj.fishLoc[e.target.id] = false;
      this.setState(stateObj);
    } else {
      stateObj.fishLoc[e.target.id] = true;
      this.setState(stateObj);
    }
  }

  clearChecks = () => {
    this.setState({
      fishLoc: {
        ocean: false,
        river: false,
        pier: false,
        pond: false,
        waterfall: false,
        mouth: false
      }
    })
  }
  
  toggleVisibility = (e) => {
    let stateObj = {...this.state};

    if(this.state[e.target.id]) {
      stateObj[e.target.id] = false;
      this.setState(stateObj);
    } else {
      stateObj[e.target.id] = true;
      this.setState(stateObj);
    }
  }

  toggleHeaderClass = () => this.state.showFish ? 'visibleContainer' : 'hiddenContainer';

  render() {
    const {month} = this.props;
    const {fishLoc, showFish, showFishFilter} = this.state;

    return (
        <div>
          <h3 id='showFish' className={this.toggleHeaderClass()} onClick={(e) => this.toggleVisibility(e)}>Fish</h3>
          <div id='fishSection' className='typeDiv' hidden={!showFish}>
            <div className='fishFilter'>
              <h4 id='showFishFilter' onClick={(e) => this.toggleVisibility(e)}>
                {showFishFilter ? <span>&#9650; </span> : <span>&#9660; </span>}
                Filters
              </h4>
              <FilterCheckboxes id={'checkDiv'} hidden={!showFishFilter} loc={fishLoc} type={'fishLoc'} updateCheckBoxes={this.updateCheckBoxes} clearChecks={this.clearChecks}/>
            </div>
            <Table month={month} loc={fishLoc} type={'fish'}/>
          </div>
        </div>
    )
  }
}