import React from 'react';
import './App.css';
import MonthHeader from './components/MonthHeader';
import FishContainer from './components/FishContainer';
import BugContainer from './components/BugContainer';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      month: new Date().getMonth(),
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
      showBugs: true,
      showBugFilter: false
    }
  }

  updateMonth = (e) => this.setState({month: e.target.value});

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
    if(e.target.id === 'fishLoc') {
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
    } else {
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

  toggleHeaderClass = (show) => this.state[show] ? 'visibleContainer' : 'hiddenContainer';

  render() {
    const {month, fishLoc, showFish, showFishFilter} = this.state;
    const {bugLoc, showBugs, showBugFilter} = this.state;
    return (
      <div className='container'>
        <MonthHeader month={month} updateMonth={this.updateMonth}/>
        <div className='infoContainer'>
          <FishContainer showFish={showFish} 
            showFishFilter={showFishFilter} 
            fishLoc={fishLoc} month={month}
            toggleVisibility={this.toggleVisibility} 
            toggleHeaderClass={this.toggleHeaderClass} 
            updateCheckBoxes={this.updateCheckBoxes} 
            clearChecks={this.clearChecks}
          />
          
          <BugContainer showBugs={showBugs} 
            showBugFilter={showBugFilter} 
            bugLoc={bugLoc} month={month}
            toggleVisibility={this.toggleVisibility} 
            toggleHeaderClass={this.toggleHeaderClass} 
            updateCheckBoxes={this.updateCheckBoxes} 
            clearChecks={this.clearChecks}
          />
        </div>
      </div>
    );
  }
  
}

