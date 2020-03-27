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
      width: window.innerWidth
    }
  }

  componentDidMount = () => {
      window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount = () => {
      window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
      this.setState({width: window.innerWidth});
  }

  updateMonth = (e) => this.setState({month: e.target.value});

  render() {
    const { month } = this.state;
    const isMobile = this.state.width <= 700;

    return (
      <div className={isMobile? 'mobileContainer' : 'container'}>
        <MonthHeader month={month} updateMonth={this.updateMonth}/>
        <div className='infoContainer'>
          <FishContainer  month={month}/>
          <BugContainer month={month}/>
        </div>
      </div>
    );
  }
  
}

