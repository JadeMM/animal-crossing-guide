import React from 'react';
import Table from './Table';
import FilterBar from './FilterBar';

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
      timePeriod: {
        day: true,
        night: true
      },
      showBugs: false,
      showBugFilter: false
    }
  }

  updateCheckBoxes = (e) => {
    let stateObj = {...this.state};

    if(this.state[e.target.name][e.target.id]) {
      stateObj[e.target.name][e.target.id] = false;
      this.setState(stateObj);
    } else {
      stateObj[e.target.name][e.target.id] = true;
      this.setState(stateObj);
    }
  }

  clearChecks = (e) => {
    let stateObj = {...this.state};

    Object.keys(stateObj[e.target.id]).map(key => {
      stateObj[e.target.id][key] = false;
    });

    this.setState({stateObj});
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
    const {bugLoc, timePeriod, showBugs, showBugFilter} = this.state;
    return (
        <div>
            <h3 id='showBugs' className={this.toggleHeaderClass('showBugs')} onClick={(e) => this.toggleVisibility(e)}>Bugs</h3>
            <div id='bugSection' className='typeDiv' hidden={!showBugs}>
                <div className='bugFilter'>
                    <h4 id='showBugFilter' onClick={(e) => this.toggleVisibility(e)}>
                        {showBugFilter ? <span>&#9650; </span> : <span>&#9660; </span>}
                        Filters
                    </h4>
                    <FilterBar id={'bugCheckDiv'} hidden={!showBugFilter} section={[bugLoc, timePeriod]} type={['bugLoc', 'timePeriod']} updateCheckBoxes={this.updateCheckBoxes} clearChecks={this.clearChecks}/>
                  </div>
                  <Table month={month} section={[bugLoc, timePeriod]} type={'bug'}/>
              </div>
        </div>
    )
  }
}