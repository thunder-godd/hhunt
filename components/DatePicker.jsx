import { useState } from "react";
const DatePicker = () => {
	const [dates, setDates] = useState([
		"Sun",
		"Mon",
		"Tue",
		" Wed",
		"Thur",
		"Fri",
		"Sat",
		"Sun",
		"Mon",
		"Tue",
		" Wed",
		"Thur",
		"Fri",
		"Sat",
		"Sun",
		"Mon",
		"Tue",
		" Wed",
		"Thur",
		"Fri",
		"Sat",
	]);

	return (
		<div className="flex max-md overflow-x-scroll whitespace-nowrap">
			{dates.map((d, i) => {
				return (
					<div className="bg-orange border  p-5 m-1 text-center rounded-md">
						<p className="">{d}</p>
						<p className="">{i + 1}</p>
					</div>
				);
			})}
		</div>
	);
};

export default DatePicker;
