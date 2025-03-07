import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import WeeklyTable from "./WeeklyTable";
import "./Home.css";
import logo from "../assets/logo5.png";

const ROWS_COUNT = 3;

export function Home() {

	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		fetch("/api/bookings")
			.then((response) => response.json())
			.then((data) => {
				// console.log(data, "DATA");
				setBookings(data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<main role="main">
			<div>
				<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Just the Deskeando logo"
				/>

				{/* <Link to="/about/this/site">About</Link> */}
			</div>
			<WeeklyTable bookings={bookings} rowsCount={ROWS_COUNT} />
  </main>
	);
}

export default Home;
