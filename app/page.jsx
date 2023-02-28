import Image from "next/image";
import { Inter } from "@next/font/google";

import Listings from "../components/Listings";
import Banner from "../components/Banner";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<div className="home">
				<div>
					<Banner />
				</div>
				<main className="main">
					<h5 className="text-center font-semibold mt-4">New Listings</h5>
					<Listings />
				</main>
			</div>
		</main>
	);
}
