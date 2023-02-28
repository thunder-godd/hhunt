"use client";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import "./globals.css";
import Navbar from "../components/Navbar";
export default function RootLayout({ children }) {
	// }: {
	// 	children: React.ReactNode;
	// })
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setUser(user);
		});
		return unsubscribe;
	}, []);
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<Navbar />
				<div className="max-w-[90vw] m-auto">{children}</div>
			</body>
		</html>
	);
}
