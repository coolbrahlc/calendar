import React, { Component } from "react";
import Title from "./Title";
import Month from "./Month";

import TasksTemplate from "./TasksTemplate";
import tasks from "../tasks";

import { getMonthName, getWeekDayName } from "./helpers";
import "./DatePicker.css";

class DatePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false,
      view: "Month", // Month or Week
    };
  }

  onChangeView = (newView) => {
    this.setState({
      view: newView
    })
  }

  onShowPopUp = () => {
    console.log('show popup')
    this.setState({
      showPopUp: !this.state.showPopUp
    })
  }

  render() {
    const { fullDate, onDayClick, prevMonth, nextMonth, nextWeek, prevWeek} = this.props;

    const dateNumber = fullDate.getDate();
    const monthNumber = fullDate.getMonth();
    const yearNumber = fullDate.getFullYear();
    const monthName = getMonthName(monthNumber);
    const dayName = getWeekDayName(fullDate.getDay());
    //const montAndWeekName = getMontAndWeekName();

    const checkTaskDate = (task, i) => {
      let loc1 = new Date(task.date),
          loc2 = new Date(fullDate);
      if(loc1.toLocaleDateString() === loc2.toLocaleDateString()) {
        return task;
      }
    };

    const tasksForDay = tasks.filter(checkTaskDate);

    return (

      <div className="DatePickerContainer">
        <Title
          view={this.state.view}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
          prevWeek={prevWeek}
          nextWeek={nextWeek}
          showPopUp={this.state.showPopUp}
          onShowPopUp={this.onShowPopUp}
          monthName={monthName}
          onChangeView={this.onChangeView}
        />
        <Month
          fullDate={fullDate}
          date={dateNumber}
          month={monthNumber}
          year={yearNumber}
          onDayClick={onDayClick}
          view={this.state.view}
        />
        <h3 className="dateText">{dayName},{dateNumber}{monthName}</h3>
        <TasksTemplate tasks = {tasksForDay}/>
      </div>
    );
  }
}

export default DatePicker;
