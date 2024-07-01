import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
	const [show, handleShow] = useState(false);

	// Define the event handler function
	const handleScroll = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		// Add the event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup function to remove the event listener
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<img
				className="nav__logo"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8gxK4T7e99JmhiY1hSQTFoo4j9i3hOa4Wb4qsCYMLd965SKJNGp4OoRWrKytT-qMF50&usqp=CAU"
				alt=""
			/>
			<img
				className="nav__avatar"
				src="https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png"
				alt=""
			/>
		</div>
	);
}

export default Nav;
