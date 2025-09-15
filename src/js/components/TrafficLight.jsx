import React from "react";
import { useState } from "react";

const TrafficLight = () => {
	const colors = ["lights-circle-red", "lights-circle-yellow", "lights-circle-green"];
	const [click, setClick] = useState("null");

	const colorSelection = (color) => {
		setClick(color)
	};

	const changeColor = () => {
		const currentIndex = colors.indexOf(click);
		const nextIndex = (currentIndex + 1) % colors.length;
		setClick(colors[nextIndex]);
	};

	return (
		<>
			<div className="main-container">
				<div className="container-triangle-left">
					<div className="triangle triangle-left "></div>
					<div className="triangle triangle-left"></div>
					<div className="triangle triangle-left"></div>
				</div>
				<div className="container-trafficlight">
					<div className="circle-top"></div>
					<div className="stick-top"></div>
					<div className="rectangle-circular-lights">
						<div className={`lights-circle-red ${click == "lights-circle-red" ? "red" : ""} `}
							onClick={() => colorSelection("lights-circle-red")}
						></div>
						<div className={`lights-circle-yellow ${click == "lights-circle-yellow" ? "yellow" : ""} `}
							onClick={() => colorSelection("lights-circle-yellow")}
						></div>
						<div className={`lights-circle-green ${click == "lights-circle-green" ? "green" : ""} `}
							onClick={() => colorSelection("lights-circle-green")}
						></div>
					</div>
					<div className="stick-bottom"></div>
				</div>
				<div className="container-triangle-right">
					<div className="triangle triangle-right"></div>
					<div className="triangle triangle-right"></div>
					<div className="triangle triangle-right"></div>
				</div>
				<button className="btn btn-outline-primary"
					onClick={changeColor}
				>Cambio de color</button>
			</div>
		</>
	);
};

export default TrafficLight;