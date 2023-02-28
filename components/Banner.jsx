import Image from "next/image";
import banner from "../public/images/bnr2.jpg";
const Banner = () => {
	return (
		<div className="w-[100%] h-[70vh]  relative rounded-md overflow-hidden xl:w-[95%] mx-auto">
			<Image src={banner} alt="" fill />
			<div className="absolute bg-gray text-center top-[50%] left-[50%] opacity-80  -translate-x-1/2 -translate-y-1/2 rounded-lg p-8">
				{" "}
				<p className="text-black-900 xl:text-4xl font-bold bg-gray">
					Let Us Guide{" "}
					<span className="font-bold bg-gray-100 rounded">You</span> Home
				</p>
				<p className="text-black text-lg mt-4 text-black-600 bg-orange-100 opacity-90 rounded">
					Find your dream home, faster and easier
				</p>
				<div>
					<input
						className="p-3 rounded-lg mt-3 w-[100%]"
						type="text"
						placeholder="Search"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
