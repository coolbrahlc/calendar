import React from "react";
import SelectView from "./SelectView";

const Title = ({view, prevMonth, nextMonth, prevWeek,
 nextWeek, showPopUp, monthName,  onChangeView, weekName, onShowPopUp
}) => {
  return (
    <div className="DatePickerContainer__Title">
      {view==="Month" ?
        (
          <i className="prev fa fa-fw fa-chevron-left"
            onClick={prevMonth}>
            prev
          </i>
        ) :
        (
          <i className="prev fa fa-fw fa-chevron-left"
            onClick={prevWeek}>
            prev
          </i>
        )
      }
      <span
        onClick={onShowPopUp}
      >
        {view==="Month"? monthName : monthName}
        {showPopUp && <SelectView onChangeView={onChangeView}/>}
      </span>


      {view==="Month" ?
        (
          <i className="prev fa fa-fw fa-chevron-right"
            onClick={nextMonth}>
            next
          </i>
        ) :
        (
          <i className="prev fa fa-fw fa-chevron-left"
            onClick={nextWeek}>
            next
          </i>
        )
      }
  </div>
  )
}

export default Title;