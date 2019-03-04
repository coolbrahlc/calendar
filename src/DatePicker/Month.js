import React, { Component } from "react";

import Weekday from "./Weekday";
import Day from "./Day";
import tasks from "../tasks";

import { weekdays, abbreviationForWeekday, getWeeksForMonth, getWeekForDay } from "./helpers";

class Month extends Component {
  constructor(props) {
    super(props);

  }

  today = new Date();

  renderWeek = (fullDate, dayIndex) => {
    const { onDayClick } = this.props;
    //const {hoveredDate} = this.state;

    if (fullDate == null) {
      return <Day key={dayIndex} />;
    }
    //console.log(fullDate);
    ////Fri Mar 01 2019 00:00:00 GMT+0200 (EET)
    const date = fullDate.getDate();

    const checkTaskDate = (task, i) => {
      let loc1 = new Date(task.date),
          loc2 = new Date(fullDate);
      return loc1.toLocaleDateString() === loc2.toLocaleDateString();
    };

    const haveTasksForDay = tasks.some(checkTaskDate);

    const isToday = () => {
      console.log('equal!!!!!!:', fullDate.toLocaleDateString() === this.today.toLocaleDateString())
      return fullDate.toLocaleDateString() === this.today.toLocaleDateString();
    };

    return (
      <Day
        key={dayIndex}
        isToday={isToday()}
        fullDate={fullDate}
        onClick={onDayClick}
        haveTasksForDay={haveTasksForDay}
        selected={date === this.props.date}
      />
    );
  }

  render() {

    if (this.props.view === "Week") {
      const {fullDate} = this.props;
      console.log('rend month ${fullDate}');
      const week = getWeekForDay(fullDate);

      /*S M T W T F S*/
      const weekDaysMarkup = weekdays.map(weekday => {
        console.log(`weekDaysMarkup ${fullDate}`)
        return (
          <Weekday
            key={weekday}
            title={abbreviationForWeekday(weekday)}
            current={true}
            label={weekday}
          />
        );
      });

      return (
        <div className="MonthContainer">
          <div className="WeekdayContainer">{weekDaysMarkup}</div>
          <div role="row" className="Week">
            {week.map(this.renderWeek)}
          </div>
        </div>
      );

    } else {
      const { month, year } = this.props;
      const week = getWeeksForMonth(month, year);
      const weeksMarkup = week.map((week, index) => {
        return (
          <div role="row" className="Week" key={index}>
            {week.map(this.renderWeek)}
          </div>
        );
      });

      /*S M T W T F S*/
      const weekDaysMarkup = weekdays.map(weekday => {
        return (
          <Weekday
            key={weekday}
            title={abbreviationForWeekday(weekday)}
            current={true}
            label={weekday}
          />
        );
      });

      return (
        <div className="MonthContainer">
          <div className="WeekdayContainer">{weekDaysMarkup}</div>
          {weeksMarkup}
        </div>
      );
    }
  }


}

export default Month;
