"use client";
import { useState } from "react";
import { auth } from "../../utils/firebase";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (event) => setEmail(event.target.value);
	const handlePasswordChange = (event) => setPassword(event.target.value);

	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.error("Error signing in", error);
		}
	};

	return (
		<form onSubmit={handleLogin}>
			<label>
				Email:
				<input type="email" value={email} onChange={handleEmailChange} />
			</label>
			<br />
			<label>
				Password:
				<input
					type="password"
					value={password}
					onChange={handlePasswordChange}
				/>
			</label>
			<br />
			<button type="submit">Log in</button>
		</form>
	);
}
