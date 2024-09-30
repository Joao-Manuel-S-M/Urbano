import styled from "styled-components";
import bgHome from "../../assets/images/bgsobre.webp";

export const SectionHome = styled.section`
	.bg {
		height: 80vh;
		background-image: url(${bgHome});
		background-position: center;
		background-size: cover;
	}

	.contato {
		max-width: 1440px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		margin-top: -287px;

		@media (max-width: 920px) {
			flex-direction: column;
			align-items: center;

			padding: 0 20px;
		}
	}

	.wrappText > .title {
		color: #fff;
		font-family: Noto Serif;
		font-size: 61px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;

		@media (max-width: 920px) {
			font-size: 40px;
			text-align: center;
		}
	}

	.wrappText > .text {
		color: #fff;
		font-family: "Inter", sans-serif;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.783px;
		max-width: 400px;

		@media (max-width: 920px) {
			text-align: center;
			margin: 0 auto;
		}
	}

	.wrappContato > .wrappIcons {
		display: flex;
		align-items: center;
		margin-top: 121px;
		gap: 20px;

		@media (max-width: 920px) {
			justify-content: center;
		}
	}

	.wrappContato > .wrappText {
		max-width: 378px;
	}

	.wrappText > .titleVisit {
		color: #f61f4b;
		font-family: Noto Serif;
		font-size: 45px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		margin-bottom: 20px;
		margin-top: 77px;

		@media (max-width: 920px) {
			text-align: center;
			font-size: 30px;
		}
	}

	.wrappText > .textVisit {
		color: #363636;
		font-family: "Inter", sans-serif;
		font-size: 17px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;

		@media (max-width: 920px) {
			text-align: center;
			margin: 0 auto;
		}
	}

	.wrappContato > .wrappLocais {
		margin-top: 200px;
		transform: rotate(-90deg);
		position: relative;
		right: 172px;

		@media (max-width: 920px) {
			right: 165px;

			/* margin: 200px auto 0 auto !important; */
		}

		@media (max-width: 375px) {
			scale: 0.9;
			right: 150px;
		}

		@media (max-width: 340px) {
			scale: 0.8;
			right: 129px;
			margin-bottom: -42px;
			margin-top: 166px;
		}
	}

	.wrappLocais > .wrapp {
		display: flex;
		justify-content: space-between;
		position: relative;
		bottom: 11px;
		right: 1px;
		width: 351px;
	}

	.wrappLocais > hr {
		width: 313px;
		position: relative;
		/* right: 172px; */
	}

	.wrapp > .locais {
		position: relative;
		right: 11px;
		transform: rotate(90deg);
		display: flex;
		align-items: center;
		gap: 13px;
		margin: -135px;
		top: 158px;
	}

	.locais > img {
		width: 35px;
	}

	.locais > .wrapptext {
		display: flex;
		flex-direction: column;
		width: 280px;
	}

	.wrapptext > .endereco {
		color: #f61f4b;
		font-size: 20px;
		line-height: 140.1%; /* 35.3px */
		width: 327px;
		font-family: NoyhRW01-Medium;
		font-weight: 500;
	}

	.wrapptext > .phone {
		color: #484848;
		font-size: 18px;
		line-height: 140%; /* 35.275px */
		font-family: NoyhRW01-Medium;
		font-weight: 500;
	}

	.wrappForm {
		margin-top: 90px;

		@media (max-width: 920px) {
			margin-top: 265px;
		}
	}

	.wrappForm > .texEmail {
		display: flex;
		align-items: center;
		border-radius: 7.214px;
		background: #f3f3f3;
		box-shadow: -8.41681px 7.21441px 24.04803px 0px rgba(0, 0, 0, 0.25);
		padding: 20px 40px;

		@media (max-width: 487px) {
			padding: 20px 20px;
		}
	}

	.texEmail > img {
		width: 70px;

		@media (max-width: 487px) {
			max-width: 50px;
			width: 100%;
		}
	}

	.texEmail > .text {
		color: #212121;
		font-family: "Inter", sans-serif;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		max-width: 310px;
		margin-left: 20px;

		@media (max-width: 487px) {
			font-size: 15px;
		}

		@media (max-width: 345px) {
			font-size: 12px;
		}
	}

	.wrappForm > form {
		display: flex;
		flex-direction: column;
		padding-top: 8px;
		padding-bottom: 30px;

		@media (max-width: 487px) {
			padding: 8px 20px 30px 20px;
		}
	}

	form > .wrappInput {
		display: flex;
		flex-wrap: wrap;
		max-width: 400px;
		width: 100%;
		gap: 15px;
		margin: 0 auto;
		/* max-width: 400px; */

		@media (max-width: 487px) {
			flex-direction: column;
			margin: 0 auto;
			max-width: auto;
			width: 100%;
			/* padding: 0 20px; */
		}
	}

	.wrappInput > input {
		border-radius: 5px;
		background: #f2f2f2;
		max-width: 175px;
		width: 100%;
		height: 35px;
		border: none;
		padding-left: 15px;
		font-family: "Inter", sans-serif;
		font-size: 13px;

		@media (max-width: 487px) {
			max-width: 100%;
			width: auto;
			height: 40px;
		}
	}

	.wrappInput > input::placeholder {
		color: #7e7e7e;
	}

	form {
		background: white;
		border-radius: 7.214px;
		box-shadow: -8.41681px 7.21441px 24.04803px 0px rgba(0, 0, 0, 0.25);
		margin-top: 25px;
		/* padding: 20px 40px; */
	}

	form > textarea {
		border-radius: 5px;
		background: #f2f2f2;
		border: none;
		padding-left: 15px;
		padding-top: 15px;
		font-family: "Inter", sans-serif;
		font-size: 13px;
		/* resize: none; */
		max-width: 400px;
		width: 100%;
		height: 290px;
		margin: 0 auto;

		@media (max-width: 487px) {
			height: 200px;
			width: calc(100% - 15px);
		}
	}

	form > textarea::placeholder {
		color: #7e7e7e;
		font-size: 13px;
	}

	form > .titleForm {
		color: #555;
		font-family: "Inter", sans-serif;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		max-width: 400px;
		width: 100%;
		margin: 0 auto;
		margin-top: 25px;
		margin-bottom: 10px;
	}

	form > .button {
		max-width: 400px;
		width: 100%;

		margin: 0 auto;
		margin-top: 40px;
		border-radius: 5px;
		background: #f61f4b;
		border: none;
		padding: 10px 0;
		color: white;
		font-family: "Inter", sans-serif;
		font-size: 18px;
	}
`;

export const SectionFAQ = styled.section`
	margin: 0 auto;
	margin-top: 250px;
	margin-bottom: 200px;
	max-width: 1440px;

	@media (max-width: 920px) {
		padding: 0 20px;
		margin-top: 100px;
	}

	.row-title-text {
		color: #f61f4b;
		font-family: "Inter", sans-serif;
		font-size: 25px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		user-select: none;

		@media (max-width: 920px) {
			font-size: 15px;

			padding: 0 10px;
		}
	}

	.faq-row {
		margin: 0 auto;
		margin-bottom: 50px;
		max-width: 915px;
		border-bottom: 1px solid #f61f4b;
	}

	.styles_row-content__QOGZd[aria-expanded="true"] {
		background: rgba(255, 235, 239, 0.61);

		@media (max-width: 920px) {
			padding: 0 10px;
		}
	}

	.row-title[aria-expanded="true"] {
		background: rgba(255, 235, 239, 0.61);
	}

	.arrow-image > svg {
		fill: white !important;
		background-color: #f61f4b;
		border-radius: 100%;
	}

	.styles_row-content-text__2sgAB {
		color: #363636;
		font-family: "Inter", sans-serif;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-top: 30px;

		@media (max-width: 920px) {
			font-size: 15px;
		}
	}

	.title {
		color: #f61f4b;
		font-family: Noto Serif;
		font-size: 47px;
		font-weight: 700;
		text-align: center;
		margin-bottom: 70px;

		@media (max-width: 920px) {
			font-size: 30px;
		}
	}
`;
