import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html lang="fr">
				<Head>
					<link
						rel="preload"
						href="/fonts/inter-var-latin.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
				</Head>
				<body className="bg-background text-foreground mx-auto">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;