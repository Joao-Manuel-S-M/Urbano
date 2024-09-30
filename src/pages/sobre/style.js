import styled from "styled-components";
import bgHome from "../../assets/images/bgabout.webp";
import Footer from "../../components/footer/Footer";

export const Home = styled.section`
	background-image: url(${bgHome});
	background-size: cover;
	width: 100vw;
	height: 100vh;

	.wrappText {
		font-family: "Noto Serif", serif;
		color: #fff;
		text-align: center;
		height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.wrappText h1 {
		text-shadow: 0px 7.411764621734619px 3.7058823108673096px
			rgba(0, 0, 0, 0.25);
		font-size: 65px;
		font-weight: 700;
		margin-bottom: 30px;
	}

	.wrappText p {
		max-width: 820px;
		font-size: 17px;
		font-weight: 700;
		margin: 0 auto;
		font-family: "Inter", sans-serif;
		text-shadow: 0px 8.412px 5.706px rgb(0, 0, 1);
	}

	@media (max-width: 750px) {
		.wrappText h1 {
			font-size: 30px;
		}
		.wrappText p {
			font-size: 15px;
			padding: 0 20px;
			line-height: 1.5;
		}
	}
`;

export const About = styled.section`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: end;
	background-color: #fafafa;

	.bg {
		width: 100vw;
	}

	.wrappText {
		font-family: "Inter", sans-serif;
		width: 1440px;
		margin: 0 auto;
		margin-top: 300px;
		position: relative;
		top: 205px;
	}

	.wrappText h1 {
		color: #2f2f2f;
		font-size: 56.76px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		text-transform: uppercase;
	}

	.wrappText hr {
		width: 205px;
		border: 2px solid #f61f4b;
		border-radius: 20px;
		margin-bottom: 20px;
	}

	.wrappText p {
		color: #000;
		font-family: "Inter", sans-serif;
		font-size: 12px;
		font-style: italic;
		font-weight: 600;
		line-height: 200.023%; /* 24.003px */
		max-width: 373px;
		margin-bottom: 20px;
	}

	.wrappText a {
		border-radius: 20px;
		background: #f61f4b;
		box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
		padding: 10px 25px;
		color: #fff;
		text-decoration: none;
	}

	@media (max-width: 750px) {
		height: auto;

		.wrappText {
			margin-top: 70px;
			position: relative;
			top: 0;
			padding-left: 20px;
			margin-bottom: 70px;
		}

		.wrappText h1 {
			font-size: 30px;
		}

		.wrappText hr {
			width: 100px;
		}

		.wrappText p {
			font-size: 12px;
			max-width: 300px;
		}
	}
`;

export const NossoTime = styled.section`
	background-color: #fafafa;

	.wrappText {
		padding-top: 20px;
		text-align: center;
		font-family: "Inter", sans-serif;
	}

	.wrappText span {
		color: #f61f4b;
		font-size: 11.12px;
		font-weight: 600;
		letter-spacing: 4.226px;
	}

	.wrappText h1 {
		color: #383838;
		font-size: 42.12px;
		font-weight: 600;
	}

	.wrappText p {
		color: #474747;
		font-family: "Inter", sans-serif;
		font-size: 12.09px;
		font-weight: 500;
		letter-spacing: 0.605px;
		max-width: 607px;
		margin: 0 auto;
		margin-top: 6px;
	}

	.wrappPattern {
		display: flex;
		justify-content: center;
		padding-top: 50px;
	}

	.wrappPattern .square {
		height: fit-content;
		margin-top: 18px;
	}

	.wrappPattern .circle {
		height: fit-content;
	}

	.card {
		font-family: "Inter", sans-serif;
	}

	.card > h1 {
		color: #474747;
		font-size: 21.09px;
		font-weight: 600;
		margin-top: 20px;
	}

	.card > p {
		color: #f61f4b;
		font-size: 14.09px;
		font-weight: 500;
		letter-spacing: 1.057px;
		margin: 5px 0 15px 0;
	}

	.card > .icon {
		margin-right: 10px;
		width: 19px;
	}

	.wrappCards {
		display: flex;
		gap: 50px;
		justify-content: center;
		margin-top: 70px;
		flex-wrap: wrap;
	}

	@media (max-width: 750px) {
		.wrappText h1 {
			font-size: 30px;
		}

		.wrappText p {
			font-size: 12px;
			line-height: 1.5;
			margin-top: 20px;
		}
	}
`;

export const Localização = styled.section`
	height: 104vh; //Tirar depois
	padding-top: 150px;
	padding-bottom: 20px;
	background-color: #fafafa;
	height: 115vh;

	body {
		background-color: #fafafa;
	}

	.wrappText {
		padding-top: 20px;
		text-align: center;
		font-family: "Inter", sans-serif;
	}

	.wrappText h1 {
		color: #f61f4b;
		font-size: 42.12px;
		font-weight: 600;
	}

	.wrappText p {
		color: #474747;
		font-family: "Inter", sans-serif;
		font-size: 12.09px;
		font-weight: 500;
		letter-spacing: 0.605px;
		max-width: 607px;
		margin: 0 auto;
		margin-top: 6px;
		/* margin-bottom: 110px; */
	}

	.wrappPattern {
		display: flex;
		justify-content: center;
		padding-top: 50px;
	}

	.icon {
		height: fit-content;
	}

	.icon2 {
		height: fit-content;
		margin-top: 110px;
	}

	.wrapperLocatin {
		width: fit-content;
		margin: 0 auto;
		margin-top: 80px;
	}

	@media (max-width: 750px) {
		padding-top: 70px;
		height: auto;
		display: inline-block;

		.wrappText h1 {
			font-size: 30px;
		}

		.wrappText p {
			font-size: 12px;
			line-height: 1.5;
			margin-top: 20px;
		}

		.wrappPattern img {
			width: 30px;
		}

		.wrappPattern {
			padding-top: 0px;
		}

		.wrapperLocatin {
			margin-top: 0;
		}

		.wrapperLocatin svg {
			width: 90vw;
			height: fit-content;
			margin-top: 60px;
		}
	}
`;

export const WrappFooter = styled.div`
	margin-top: -80px;
`;
