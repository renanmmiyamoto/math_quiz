import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
	<Html>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600&display=swap"
				rel="stylesheet"
			/>
			<link rel="shortcut icon" href="/favicon.ico" />
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
);

export default Document;
