import NextHead from "next/head";
import "./globals.css";

export default function App({ Component, pageProps }) {
  const card = {
    title: "Our Live Class Schdule",
    url: "https://webdevcourses.tv",
    twitter: "@webdevcoursestv",
    image: "https://webdevcourses.tv/twitter-card-summary.png",
    description: "Get mentored live by an expert, mon-fri 9am-12p and 7pm-10pm",
  };
  return (
    <NextHead>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={card.twitter} />
      <meta name="twitter:creator" content={card.twitter} />
      <meta name="twitter:title" content={card.title} />
      <meta name="twitter:description" content={card.description} />
      <meta name="twitter:image" content={card.image} />

      <meta property="og:title" content={card.title} />
      <meta property="og:url" content={card.url} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={card.description} />
      <meta property="og:image" content={card.image} />
      <Component {...pageProps} />
    </NextHead>
  );
}
