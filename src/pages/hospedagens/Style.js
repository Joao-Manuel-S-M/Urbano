import { styled } from "styled-components";
import bg from "../../assets/images/bghospedagens.webp";

export const Container = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Inter&family=Noto+Serif:wght@700&display=swap");

	display: flex;
	flex-direction: column;
	align-items: center;
	

	.frase {
		color: #fff;
		font-family: "Noto Serif";
		font-size: 38px;
		margin-top: 50px;
		margin-bottom: 7px;

		
	}

	.texto {
		color: #ffffff;
		text-align: center;
		font-family: "Inter", sans-serif;
		font-size: 15px;
		/* font-weight: 500; */
		line-height: 182.2%; /* 32.796px */
		max-width: 550px;
		margin-bottom: 26px;
	}

	@media (max-width: 750px) {
		.frase {
			margin-top: 100px;
			font-size: 30px;
		}

		.texto {
			/* font-size: 12px; */
			padding: 0 20px;
		}
		
	}

	@media (max-width: 400px) {
		.texto {
			padding: 0 20px;
			font-size: 12px;
		}

		.frase {
			text-align: center;
			padding: 0 20px;
			font-size: 30px;
		}
	}
`;

export const Wrapper = styled.div`
	background-image: url(${bg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: bottom;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	margin-bottom: 55px;
	

	@media (max-width: 400px) {
		background-position-x: 59%;
	}

	
`;
