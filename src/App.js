import React, { Component } from "react";

import DatePicker from "./DatePicker";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    //this.onDayClick = this.onDayClick.bind(this);
    this.state = {
      selectedDate: new Date(),
    };
  }

  onDayClick = (e, newDay) => {
    const { selectedDate } = this.state;
    console.log(`selectedDate ${selectedDate}`)
    console.log(`day ${newDay}`)
    this.setState({
      selectedDate: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        newDay
      )
    });
  }



  prevMonth = () => {
    const { selectedDate } = this.state;
    this.setState({
      selectedDate: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth()-1,
        selectedDate.getDate()
      )
    });
  }

  nextMonth = () => {
   const { selectedDate } = this.state;
    this.setState({
      selectedDate: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth()+1,
        selectedDate.getDate()
      )
    });
  }

  prevWeek = () => {
   const { selectedDate } = this.state;
    this.setState({
      selectedDate: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()-7
      )
    });
  }

  nextWeek = () => {
   const { selectedDate } = this.state;
    this.setState({
      selectedDate: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()+7
      )
    });
  }

  render() {
    const { selectedDate } = this.state;


    return (
      <div className="App">
        <div className="MainContent">
          <DatePicker
            fullDate={selectedDate}
            onDayClick={this.onDayClick}
            prevMonth={this.prevMonth}
            nextMonth={this.nextMonth}
            prevWeek={this.prevWeek}
            nextWeek={this.nextWeek}
          />
        </div>
      </div>
    );
  }
}

export default App;
