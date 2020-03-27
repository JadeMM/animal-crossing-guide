import React from 'react';
import Table from './Table';
import FilterBar from './FilterBar';

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
      timePeriod: {
        day: true,
        night: true
      },
      showFish: true,
      showFishFilter: false,
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

  toggleHeaderClass = () => this.state.showFish ? 'visibleContainer' : 'hiddenContainer';

  render() {
    const {month} = this.props;
    const {fishLoc, timePeriod, showFish, showFishFilter} = this.state;

    return (
        <div>
          <h3 id='showFish' className={this.toggleHeaderClass()} onClick={(e) => this.toggleVisibility(e)}>Fish</h3>
          <div id='fishSection' className='typeDiv' hidden={!showFish}>
            <div className='fishFilter'>
              <h4 id='showFishFilter' onClick={(e) => this.toggleVisibility(e)}>
                {showFishFilter ? <span>&#9650; </span> : <span>&#9660; </span>}
                Filters
              </h4>

              <FilterBar id={'checkDiv'} hidden={!showFishFilter} section={[fishLoc, timePeriod]}  type={['fishLoc', 'timePeriod']} updateCheckBoxes={this.updateCheckBoxes} clearChecks={this.clearChecks}/>

            </div>
            <Table month={month} section={[fishLoc, timePeriod]} type={'fish'}/>
          </div>
        </div>
    )
  }
}