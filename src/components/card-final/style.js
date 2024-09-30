import styled from "styled-components";
import bg from "../../assets/images/bgcard.svg";
import "react-day-picker/dist/style.css";

export const Button = styled.div`
	float: right;
	margin-right: -90px;
	margin-top: 2px;
	background-color: #f61f4b;
	font-weight: 800;
	color: white;
	padding: 10px 15px;
	font-size: 18px;
	border-radius: 100%;
	cursor: pointer;
	scale: 0.8;
	transition: 0.3s;
	flex-direction: column;

	&:hover {
		background: #ec0e3b;
		transition: 0.3s;
		box-shadow: 0px 0px 20.7px 0px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 920px) {
		margin-right: 0;
		margin-top: 0;
		position: absolute;
		right: 0;
		top: 0;
		scale: 0.7;
		background: none;
		color: #f61f4b;
	}
`;

export const Card = styled.div`
	font-family: "Ubuntu";
	max-width: 1022px;
	height: 640px;
	margin: 0 auto;
	border-radius: 18px;
	background: #fff;
	box-shadow: 0px 0px 79.8px -7px rgba(0, 0, 0, 0.25);
	display: flex;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	z-index: 2000;

	@media (max-width: 920px) {
		flex-direction: column;
		align-items: center;
		padding: 10px 20px;
		width: 85vw;
		max-height: 97vh;
		justify-content: center;
	}

	.ocult {
		display: none;
	}

	.wrappPagenation {
		background-image: url(${bg});
		background-repeat: no-repeat;
		background-size: cover;
		height: 640px;
		max-width: 299px;
		width: 100%;

		@media (max-width: 920px) {
			/* display: flex;
			flex-direction: column;
			align-items: center; */
			display: none;
		}
	}

	.stage {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-left: 20px;
		margin-top: 30px;
		cursor: pointer;
		justify-content: unset;
		width: fit-content;
		padding: 9px 15px 9px 15px;
		border-radius: 10px;
		transition: 0.1s;

		@media (max-width: 920px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-left: 0;
			margin-top: 0;
			padding: 10px 15px 10px 15px;
			align-items: center;
			width: fit-content;
			text-align: center;
		}
	}

	.stage:hover {
		background: #ffffff2e;
		transition: 0.1s;
	}

	.wrappText {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.wrappText > span {
		color: #f1e9da;
		font-size: 10px;
		font-weight: 300;
		letter-spacing: 4.42px;
	}

	.wrappText > h1 {
		color: #fff;
		font-size: 17px;
		font-weight: 700;
		/* letter-spacing: -0.63px; */

		@media (max-width: 920px) {
			font-size: 15px;
		}
	}

	.number {
		color: #fff;
		border: 2px solid #fff;
		font-family: "Inter", sans-serif;
		font-size: 20px;
		font-weight: 600;
		border-radius: 100%;
		width: 41px;
		height: 41px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.active {
		color: #f40637;
		background-color: #f8f3ea;
	}

	.wrappContent {
		margin-left: 55px;
		padding-top: 10px;
		width: 55%;

		@media (max-width: 920px) {
			width: 100%;
			margin-left: 0;
		}
	}

	.wrappTitle h1 {
		color: #dc002d;
		font-size: 40px;
		font-weight: 500;

		@media (max-width: 920px) {
			font-size: 30px;
		}
	}

	.wrappTitle p {
		color: rgba(255, 0, 52, 0.56);
		font-size: 17px;
		font-weight: 400;
		max-width: 530px;

		@media (max-width: 920px) {
			font-size: 15px;
		}
	}

	.wrappForms {
		margin-top: 40px;

		@media (max-width: 920px) {
			margin-top: 10px;
		}
	}

	.wrappInput {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 30px;
		margin-bottom: 20px;
	}

	.wrappInput > span {
		color: #dc002d;
		font-size: 18px;
		font-weight: 400;
	}

	.inputError {
		border-left: 17px solid #ff3b63 !important;
		transition: 0.6s;
	}

	.wrappInput > input {
		border-radius: 11px;
		border: 1px solid #ff88a0;
		height: 44px;
		padding-left: 20px;
		color: #dc002d;
		font-size: 15px;
		font-weight: 500;
		transition: 0.6s;
	}

	.wrappInput > input::placeholder {
		color: #f06d87;
		font-size: 15px;
		font-weight: 500;
	}

	.wrappInput > input:focus {
		outline: 2px solid #f61f4b;
	}

	.next {
		border-radius: 5px;
		background: #f61f4b;
		width: 115px;
		height: 45px;
		color: white;
		border: none;
		font-family: "Ubuntu";
		font-size: 13px;
		font-weight: 500;
		cursor: pointer;
		transition: 0.3s;
	}

	.next:hover {
		background: #ec0e3b;
		transition: 0.3s;
		box-shadow: 0px 0px 20.7px 0px rgba(0, 0, 0, 0.3);
	}

	.prev {
		border: none;
		font-family: "Ubuntu";
		font-size: 14px;
		font-weight: 500;
		background: none;
		color: #f61f4b;
		cursor: pointer;
	}

	.wrappButtons {
		display: flex;
		justify-content: space-between;
		position: absolute;
		max-width: 562px;
		width: 100%;
		bottom: 23px;

		@media (max-width: 920px) {
			position: relative;
			margin: auto;
			margin-top: 80px;
			align-items: center;
		}
	}

	// Calendar Style

	@media (max-width: 920px) {
		.calendar {
			display: block !important;
		}

		.rdp-months {
			display: block !important;
		}

		.rdp {
			/* display: block !important; */
			display: block !important;
		}
	}

	.footerCalendar {
		background: #f61f4b3b;
		padding: 8px 15px;
		margin-top: 9px;
		display: inline-flex;
		border-radius: 24px;
		border: 1px solid #e80c39b5;
		font-size: 13px;
		color: #e80c38ff;
		text-transform: uppercase;
	}

	.rdp-day_selected {
		color: white !important;
		background-color: #f61f4b;
	}

	.calendar {
		--rdp-background-color: #ff88a0;
		--rdp-color: #fff;
		--rdp-cell-size: 55px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 30px 0;
	}

	.rdp-day:hover {
		color: white;
	}

	.rdp-button {
		color: #f61f4b;
	}

	/* .rdp-nav_button:hover {
        color: white;
    } */

	.rdp-button[disabled]:not(.rdp-day_selected) {
		opacity: 0.45;
	}

	.rdp-button[disabled]:not(.rdp-day_selected):hover {
		opacity: 0.45;
		color: #f61f4b;
	}

	.rdp-day {
		color: #f61f4b;
		font-weight: 500;
	}

	.rdp-head_cell {
		color: #f61f4b;
	}

	.rdp-caption_label {
		color: #f61f4b;
		text-transform: capitalize;
	}
	//

	.wrappOptions {
		display: flex;
		flex-direction: column;
		gap: 40px;
		margin: 70px 0;
	}

	.option {
		border-radius: 15px;
		border: 1px solid #ff5578;
		background: #fff;
		box-shadow: 0px 4px 11.7px 0px rgba(0, 0, 0, 0.25);
		padding: 26px 30px;
		display: flex;
		justify-content: space-between;
		cursor: pointer;
	}

	.option > .Title,
	.price {
		color: #f61f4b;
		font-size: 20px;
		font-weight: 500;

		@media (max-width: 920px) {
			font-size: 15px;
		}
	}

	.select {
		border: 5px solid #ff5578;
		padding: 22px 26px;
	}

	.wrappInfs {
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin: 20px 0;

		@media (max-width: 920px) {
			gap: 10px;
		}
	}

	.wrappInfs > .infs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.infs > .campo {
		color: #f61f4b;
		font-size: 20px;
		font-weight: 400;

		@media (max-width: 920px) {
			font-size: 15px;
		}
	}

	.infs > .result {
		color: #f61f4b;
		font-size: 20px;
		font-weight: 300;
		text-align: end;

		@media (max-width: 920px) {
			font-size: 15px;
		}
	}

	.separator {
		height: 1px;
		background: rgba(246, 31, 75, 0.32);
		border: none;
	}

	.wrappPrice {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 30px 0;

		
	}

	.label {
		color: #f61f4b;
		font-size: 25px;
		font-weight: 500;

		
	}

	.container {
		max-width: 900px;
		width: 100vw;
		margin: 0 auto;
		display: flex;
		align-items: center;
		flex-direction: column;
		text-align: center;

		@media (max-width: 920px) {
			/* margin-top: 50px; */
			width: 100%;
		}

		
	}

	.container > h1 {
		color: #dc002d;
		font-size: 45px;
		font-weight: 500;
		margin-top: 50px;

		@media (max-width: 920px) {
			font-size: 30px;
		}
	}

	.container > p {
		color: #ff5578;
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		max-width: 617px;
		margin-top: 20px;

		@media (max-width: 920px) {
			font-size: 15px;
		}
	}

	.icon {
		width: 80px;
		margin-top: 50px;

		@media (max-width: 920px) {
			width: 60px;
		}
	}

	.resize {
		position: absolute;
		right: 17px;
		margin-right: -1px;

		
	}

	.line {
		max-width: 255px;
		width: 100vw;
		height: 2px;
		border: none;
		background: #ff5578;
	}
`;
