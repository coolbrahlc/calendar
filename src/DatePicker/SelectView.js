import React from "react";

const SelectList = ({onChangeView}) => {
	return (
		<div className="ViewPopup">
			<div>
				<a href="#" onClick={(e) => {onChangeView("Month")}}>
					This month
				</a>
			</div>
			<div>
				<a href="#" onClick={(e) => {onChangeView("Week")}}>
					This week
				</a>
			</div>
		</div>
	);
}

export default SelectList;