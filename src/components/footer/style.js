import styled from "styled-components";

export const Footer = styled.footer`
	width: 100vw;
	background-color: #f61f4b;
	/* background-color:  */
	font-family: NoyhRW01-Medium;
	color: #fff;
	padding: 35px 76px;
	box-sizing: border-box;
	display: ${(props) => (props.display ? props.display : "flex")};
	justify-content: space-between;
	margin-top: 80px;
	flex-wrap: wrap;
	gap: 83px;

	.wrapper {
		display: flex;
		flex-direction: column;
	}

	.logo {
		font-size: 61.2px;
		font-weight: 500;
		margin-bottom: 19px;
		display: inline-flex;
	}

	.title {
		font-family: "Inter", sans-serif;
		font-size: 19.09px;
		font-style: normal;
		font-weight: 700;
		display: inline-flex;
		margin-bottom: 10px;
	}

	nav {
		display: flex;
		gap: 44px;
	}

	li {
		list-style: none;
		font-size: 16.09px;
		font-style: normal;
		font-weight: 500;
		margin-bottom: 5px;
	}

	a {
		color: #fff;
		text-decoration: none;
	}

	.newsletter {
		display: flex;
		flex-direction: column;
	}

	.frase-news {
		font-family: Bree Serif;
		font-size: 27.022px;
		font-weight: 400;
	}

	form {
		margin-top: 10px;
	}

	input {
		max-width: 302.222px;
		height: 35px;
		font-size: 15px;
		font-family: "Inter", sans-serif;
		padding: 0 10px;
		border-radius: 5px 0 0 5px;
		border: 0;
	}

	input:focus {
		outline: 0;
		box-shadow: 0;
	}

	button {
		width: 80px;
		height: 35px;
		border-radius: 0 5px 5px 0;
		border: none;
		background-color: #f30132;
		color: #fff;
		font-size: 15px;
	}

	.wrapp-icons {
		display: flex;
		flex-direction: column;
		margin-top: 50px;
	}

	.wrapp-icons img {
		width: min-content;
	}

	.icons img {
		margin-top: 10px;
		padding-right: 10px;
	}

	@media (max-width: 1120px) {
		text-align: center;
		justify-content: center;

		.logo {
			margin: 0 auto 30px auto;
		}

		nav {
			flex-wrap: wrap;
			justify-content: center;
		}
	}

	@media (max-width: 380px) {
		form {
			display: flex;
		}

		input {
			width: 50vw;
		}
	}
`;
