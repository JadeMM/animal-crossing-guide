import React from 'react';
import Table from './Table';
import FilterCheckboxes from './FilterCheckboxes';

export default class BugContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bugLoc: {
        flying: true,
        tree: true,
        ground: true,
        flower: true,
        stump: true,
        food: true,
        trash: true,
        rock: true,
        beach: true,
        villager: true
      },
      showBugs: false,
      showBugFilter: false
    }
  }

  updateCheckBoxes = (e) => {
    let stateObj = {...this.state};

    if(this.state.bugLoc[e.target.id]) {
      stateObj.bugLoc[e.target.id] = false;
      this.setState(stateObj);
    } else {
      stateObj.bugLoc[e.target.id] = true;
      this.setState(stateObj);
    }
  }

  clearChecks = (e) => {
    this.setState({
        bugLoc: {
          flying: false,
          tree: false,
          ground: false,
          flower: false,
          stump: false,
          food: false,
          trash: false,
          rock: false,
          beach: false,
          villager: false
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

  toggleHeaderClass = () => this.state.showBugs ? 'visibleContainer' : 'hiddenContainer';
    
  render() {
    const {month} = this.props;
    const {bugLoc, showBugs, showBugFilter} = this.state;
    return (
        <div>
            <h3 id='showBugs' className={this.toggleHeaderClass('showBugs')} onClick={(e) => this.toggleVisibility(e)}>Bugs</h3>
            <div id='bugSection' className='typeDiv' hidden={!showBugs}>
                <div className='bugFilter'>
                    <h4 id='showBugFilter' onClick={(e) => this.toggleVisibility(e)}>
                        {showBugFilter ? <span>&#9650; </span> : <span>&#9660; </span>}
                        Filters
                    </h4>
                    <FilterCheckboxes id={'bugCheckDiv'} hidden={!showBugFilter} loc={bugLoc} type={'bugLoc'} updateCheckBoxes={this.updateCheckBoxes} clearChecks={this.clearChecks}/>
                  </div>
                  <Table month={month} loc={bugLoc} type={'bug'}/>
              </div>
        </div>
    )
  }
}