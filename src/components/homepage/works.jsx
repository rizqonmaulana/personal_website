import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./embreo-logo.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Embreo Pte Ltd</div>
							<div className="work-subtitle">
								Fullstack Developer
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="./nashta-logo.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">PT. NashTa Global Utama</div>
							<div className="work-subtitle">
								Backend Developer
							</div>
							<div className="work-duration">2021 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
