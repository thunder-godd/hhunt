// import MyDatePicker from "./MyDatePicker";
// import TimePicker from "./TimePicker";
import Btn from "./Btn";
import Confirm from "./Confirm";
import { useState } from "react";
import Input from "./Input";
import DatePicker from "./DatePicker";
const Modal = ({ setShowModal }) => {
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const getTime = (t) => {
		setTime(t);
		console.log(t);
	};
	const getDate = (d) => {
		setDate(d);
		console.log(d);
	};
	const handleSubmit = () => {
		setShowConform(true);
	};
	return (
		<section className="bg-gray  border-orange-600 rounded-lg absolute top-[50%] left-[20%]  w-[60%] h-[75%] border  z-50  ">
			<div
				className="relative right-0 p-2"
				onClick={(e) => setShowModal(false)}>
				X
			</div>
			<div className="my-2 mx-2 text-center font-bold ">Schedule A Tour</div>

			<div className="max-w-lg mx-auto">
				<div>
					<p className="my-4">Tour Type ?</p>
					<div className="grid grid-cols-2  rounded-md border  ">
						<div className="font-semibold text-center border py-2  rounded-md ">
							In-Person
						</div>
						<div className="font-semibold text-center py-2">Video Chat</div>
					</div>
				</div>
				<div className="my-2 border border-red-500 bg-orange-700 py-3">
					<DatePicker />
				</div>
				<div className="my-2">
					{/* <TimePicker time={time} getTime={getTime} /> */}
				</div>
				<div className="my-2">
					<input
						className="p-3 rounded-lg mt-3 w-[100%]"
						type="text"
						placeholder="Email"
					/>
				</div>
				<div className="my-2">
					<input
						className="p-3 rounded-lg mt-3 w-[100%]"
						type="text"
						placeholder="Phone"
					/>
				</div>
				<div className="my-4 mx-2 text-center">
					<Btn variant="pri">
						<button className="p-3 rounded-lg " onClick={() => handleSubmit()}>
							Submit
						</button>
					</Btn>
				</div>
			</div>
		</section>
	);
};

export default Modal;
