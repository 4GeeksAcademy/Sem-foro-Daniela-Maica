import React from "react";

const Home = () => {
	return (
		<>
			<div className="main-container">
				<div className="container-left">
					<div className="triangle triangle-left "></div>
					<div className="triangle triangle-left"></div>
					<div className="triangle triangle-left"></div>
				</div>
				<div className="container">
					<div className="circle"></div>
					<div className="stick"></div>
					<div className="rectangle">			
						<div className="lights-circle"></div>				
						<div className="lights-circle"></div>						
						<div className="lights-circle"></div>
					</div>
					<div className="stick-bottom"></div>
				</div>
				<div className="container-right">
					<div className="triangle triangle-right"></div>
					<div className="triangle triangle-right"></div>
					<div className="triangle triangle-right"></div>
				</div>
			</div>
		</>
	);
};

export default Home;