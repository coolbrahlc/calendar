import React from "react";

export default function Day({
  fullDate,
  isToday,
  onClick,
  haveTasksForDay,
  selected,
}) {
  if (fullDate == null) {
    return <div className="EmptyStateDay" />;
  }
  //console.log(fullDate);
  //Fri Mar 01 2019 00:00:00 GMT+0200 (EET)

  const date = fullDate.getDate();
  const dayOfWeek = fullDate.getDay();
  const isWeekend = (dayOfWeek === 6) || (dayOfWeek === 0);
  /*check for weekend*/

  //console.log(`${haveTasksForDay}`);
  let className = "Day";

  if (selected) {
    className = className.concat(" Day--selected");/* = "Day Day--selected";*/

  }

  if (isToday) {
    className = className.concat(" Day--today");
    console.log('isToday!!!!!');
  }

  if (haveTasksForDay) {
    className = className.concat(" Day--haveTasks");
    //console.log(className);
  }else if (isWeekend) {
    className = className.concat(" Day--weekend");/* = "Day Day--weekend";*/
    //console.log(className)
  }

  return (
    <button
      className={className}
      onClick={(e) => onClick(e, date)}
    >
      {date}
    </button>
  );
}