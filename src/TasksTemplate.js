import React from "react";

const TasksTemplate = ({tasks}) => {
	return (
		<div>
			<ul>
			{tasks.map((task)=>
				<li key={task.events[0].time}>
					<h4>{task.events[0].name}</h4>
					<p>{task.events[0].body}  {task.events[0].time}</p>
				</li>
				)
			}
			</ul>
		</div>
	)
}

export default TasksTemplate;