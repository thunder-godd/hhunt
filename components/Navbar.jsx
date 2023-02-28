import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.jpg";
import menu from "../public/images/menu.png";
import Input from "./Input";
const Navbar = () => {
	return (
		<div className="navbar flex justify-between place-items-center mb-3 max-w-[90vw] mx-auto">
			<div className="logo ">
				<Link href="/">
					<span className=" inline-block h-7 w-7 mt-5 mx-2">
						<Image src={logo} />
					</span>
				</Link>
				<div className="text-orange">HHUNT</div>
				{/* <span className="md:block">House Hunters</span> */}
			</div>
			<div className="w-[45vw]">
				<input
					className="p-3 rounded-lg mt-3 w-[100%]"
					type="text"
					placeholder="Find Your  Dream Home"
				/>
			</div>

			{/* <div className="search mt-4 border-2 border-b-orange">
				<span className="icon"></span>
				<input type="text" placeholder="Search" />
			</div> */}
			<nav>
				<div className=" h-7 w-7 mt-5 mx-2">
					<Image src={menu} alt="menu" />
				</div>

				<ul className="hidden align-middle justify-between">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/">About Us</Link>
					</li>
					<li>
						<Link href="/">Sign in</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
